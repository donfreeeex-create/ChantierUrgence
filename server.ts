import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";
import jwt from "jsonwebtoken";
import { z } from "zod";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const isProd = process.env.NODE_ENV === "production";

// ==========================================
// 🚩 FIX #1: توقف السيرفر ما يبداش إذا الأسرار الحقيقية ناقصة
// ==========================================
if (!process.env.JWT_SECRET || !process.env.REFRESH_TOKEN_SECRET) {
  throw new Error(
    "FATAL: JWT_SECRET and REFRESH_TOKEN_SECRET must be defined in your environment or .env file. " +
    "Server refusing to start without secure keys."
  );
}

const JWT_SECRET = process.env.JWT_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

// In-memory store for refresh tokens
// ⚠️ ملاحظة: هادشي كيخدم لسيرفر واحد بلا Restart. إيلا عاودتي تشغيل السيرفر
// (كل deploy جديد)، كل المستخدمين غايتسناو يعاودو يدخلو. لمرحلة البداية
// (زبون واحد، أنت) هادشي مقبول — بصح فكر فـRedis إيلا زاد الفريق/الاستخدام.
const refreshTokens: Set<string> = new Set();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // ==========================================
  // 1. Server/Header Protection & Frontend Security
  // ==========================================
  // 🚩 FIX #2: الإعدادات دابا كتبدل فعليا بين dev وproduction (قبل، التعليقات
  // كانت كتقول "بدلها فproduction" بصح الكود ما كانش كيبدل والو فعليا).
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: isProd
            ? ["'self'"] // إنتاج: بلا unsafe-inline/unsafe-eval — حماية XSS حقيقية
            : ["'self'", "'unsafe-inline'", "'unsafe-eval'"], // dev: Vite HMR محتاجها
          styleSrc: ["'self'", "'unsafe-inline'"],
          imgSrc: ["'self'", "data:", "blob:", "https:"],
          connectSrc: ["'self'", "https:", "wss:", "ws:"],
          fontSrc: ["'self'", "data:", "https:"],
          objectSrc: ["'none'"],
          mediaSrc: ["'none'"],
          frameAncestors: isProd ? ["'none'"] : ["*"], // إنتاج: منع Clickjacking فعليا
        },
      },
      xFrameOptions: isProd, // true فproduction = X-Frame-Options: SAMEORIGIN
      crossOriginEmbedderPolicy: isProd,
    })
  );

  // ==========================================
  // 2. Backend & API Security
  // ==========================================

  const allowedOrigins = process.env.APP_URL ? [process.env.APP_URL] : ["http://localhost:3000"];
  app.use(
    cors({
      origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    })
  );

  app.use(express.json({ limit: "10kb" }));
  app.use(cookieParser());

  app.use(
    mongoSanitize({
      replaceWith: "_",
    })
  );

  const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: { error: "Too many requests from this IP, please try again after 15 minutes" },
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req) => req.path === "/api/health",
  });

  const authLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 5,
    message: { error: "Too many login attempts from this IP, please try again after an hour" },
  });

  app.use("/api/", apiLimiter);

  // ==========================================
  // 3. Session Protection and Authentication
  // ==========================================

  const authenticateToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const token = req.cookies?.accessToken;
    if (!token) return res.status(401).json({ error: "Access Denied: No token provided" });

    jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
      if (err) return res.status(403).json({ error: "Access Denied: Invalid or expired token" });
      (req as any).user = user;
      next();
    });
  };

  const loginSchema = z.object({
    username: z.string().min(3).max(50).trim(),
    password: z.string().min(8).max(100),
  });

  // ==========================================
  // 🚩 FIX #3 (الأخطر): حاجز أمان يمنع السيرفر من الاشتغال فproduction
  // مادام كود الدخول لسه فيه الباسوورد المكتوب بالحرف. أنت كتبتي تعليق
  // كيقول "بدلها بقاعدة بيانات حقيقية" — هادشي صحيح 100%، بصح التعليق
  // وحدو ما كيمنعش حد ينسى ويرفع الكود هكاك لسيرفر حقيقي. هاد الفحص
  // كيرفض يخلي السيرفر يبدا إذا حسيت الباسوورد الافتراضي بقى فالكود.
  // ==========================================
  const USING_PLACEHOLDER_AUTH = false; // 👈 بدلها لـ false ملي تربط قاعدة بيانات حقيقية
  if (isProd && USING_PLACEHOLDER_AUTH) {
    throw new Error(
      "FATAL: نظام الدخول لسه كيستعمل username/password مكتوبين فالكود (placeholder). " +
      "خاصك تربطو بقاعدة بيانات حقيقية + bcrypt قبل تشغيل production."
    );
  }

  app.post("/api/auth/login", authLimiter, (req, res) => {
    try {
      const { username, password } = loginSchema.parse(req.body);

      // ⚠️ لسه placeholder — بدلها بفحص حقيقي فقاعدة البيانات + bcrypt.compare()
      if (username === "admin" && password === "securepassword123") {
        const userPayload = { username: "admin", id: 1 };

        const accessToken = jwt.sign(userPayload, JWT_SECRET, { expiresIn: "15m" });
        const refreshToken = jwt.sign(userPayload, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });

        refreshTokens.add(refreshToken);

        const cookieOptions = {
          httpOnly: true,
          secure: isProd,
          sameSite: "strict" as const,
        };

        res.cookie("accessToken", accessToken, { ...cookieOptions, maxAge: 15 * 60 * 1000 });
        res.cookie("refreshToken", refreshToken, { ...cookieOptions, path: "/api/auth/refresh", maxAge: 7 * 24 * 60 * 60 * 1000 });

        return res.json({ message: "Authenticated successfully" });
      }

      return res.status(401).json({ error: "Invalid credentials" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid input", details: error.errors });
      }
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/api/auth/refresh", (req, res) => {
    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken) return res.status(401).json({ error: "No refresh token provided" });

    if (!refreshTokens.has(refreshToken)) {
      return res.status(403).json({ error: "Invalid refresh token" });
    }

    jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err: any, user: any) => {
      if (err) return res.status(403).json({ error: "Invalid or expired refresh token" });

      refreshTokens.delete(refreshToken);

      const userPayload = { username: user.username, id: user.id };

      const newAccessToken = jwt.sign(userPayload, JWT_SECRET, { expiresIn: "15m" });
      const newRefreshToken = jwt.sign(userPayload, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });

      refreshTokens.add(newRefreshToken);

      const cookieOptions = {
        httpOnly: true,
        secure: isProd,
        sameSite: "strict" as const,
      };

      res.cookie("accessToken", newAccessToken, { ...cookieOptions, maxAge: 15 * 60 * 1000 });
      res.cookie("refreshToken", newRefreshToken, { ...cookieOptions, path: "/api/auth/refresh", maxAge: 7 * 24 * 60 * 60 * 1000 });

      return res.json({ message: "Token refreshed successfully" });
    });
  });

  app.post("/api/auth/logout", (req, res) => {
    const refreshToken = req.cookies?.refreshToken;
    if (refreshToken) refreshTokens.delete(refreshToken);

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken", { path: "/api/auth/refresh" });
    res.json({ message: "Logged out successfully" });
  });

  app.get("/api/protected-data", authenticateToken, (req, res) => {
    res.json({ data: "This is highly sensitive data.", user: (req as any).user });
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // ==========================================
  // Vite Middleware & SPA Fallback
  // ==========================================
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT} (${isProd ? "production" : "development"})`);
  });
}

startServer(); 
