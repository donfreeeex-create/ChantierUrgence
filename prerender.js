import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function escapeHtmlAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;');
}

async function prerender() {
  const distDir = path.resolve(__dirname, 'dist');
  const templatePath = path.resolve(distDir, 'index.html');
  const baseTemplate = fs.readFileSync(templatePath, 'utf-8');

  // Load the SSR bundle
  const { render, getRouteMeta, getAllRoutes } = await import('./dist-ssr/entry-server.js');

  const routes = getAllRoutes();

  for (const route of routes) {
    const meta = getRouteMeta(route);
    const appHtml = render(route);

    let html = baseTemplate.replace('<!--ssr-outlet-->', appHtml);

    // Customize <title>, meta description, canonical, OpenGraph, Twitter, and JSON-LD Schema for each route
    const escapedTitle = escapeHtmlAttr(meta.title);
    const escapedDesc = escapeHtmlAttr(meta.description);
    const escapedCanonical = escapeHtmlAttr(meta.canonicalUrl);

    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapedTitle}</title>`);
    html = html.replace(
      /<meta name="title" content="[^"]*" \/>/,
      `<meta name="title" content="${escapedTitle}" />`
    );
    html = html.replace(
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${escapedDesc}" />`
    );
    html = html.replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${escapedCanonical}" />`
    );
    html = html.replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${escapedCanonical}" />`
    );
    html = html.replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      `<meta property="og:title" content="${escapedTitle}" />`
    );
    html = html.replace(
      /<meta property="og:description" content="[^"]*" \/>/,
      `<meta property="og:description" content="${escapedDesc}" />`
    );
    html = html.replace(
      /<meta name="twitter:title" content="[^"]*" \/>/,
      `<meta name="twitter:title" content="${escapedTitle}" />`
    );
    html = html.replace(
      /<meta name="twitter:description" content="[^"]*" \/>/,
      `<meta name="twitter:description" content="${escapedDesc}" />`
    );
    html = html.replace(
      /<meta name="geo\.placename" content="[^"]*" \/>/,
      `<meta name="geo.placename" content="${escapeHtmlAttr(meta.geoPlacename)}" />`
    );
    html = html.replace(
      /<meta name="geo\.position" content="[^"]*" \/>/,
      `<meta name="geo.position" content="${escapeHtmlAttr(meta.geoPosition)}" />`
    );
    html = html.replace(
      /<meta name="ICBM" content="[^"]*" \/>/,
      `<meta name="ICBM" content="${escapeHtmlAttr(meta.geoPosition.replace(';', ', '))}" />`
    );
    html = html.replace(
      /<script id="json-ld-schema" type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script id="json-ld-schema" type="application/ld+json">\n${JSON.stringify(meta.jsonLd, null, 2)}\n    </script>`
    );

    if (route === '/') {
      fs.writeFileSync(templatePath, html);
    } else {
      const routeDir = path.join(distDir, route.replace(/^\//, ''));
      fs.mkdirSync(routeDir, { recursive: true });
      fs.writeFileSync(path.join(routeDir, 'index.html'), html);
    }
  }

  console.log(`Successfully pre-rendered ${routes.length} static SEO routes into dist/`);

  // Automatically generate and write updated sitemap.xml to both public/ and dist/
  const today = '2026-10-24';
  const sitemapEntries = routes
    .map((route) => {
      const loc = route === '/' ? 'https://www.chantierurgence.com/' : `https://www.chantierurgence.com${route}`;
      const segments = route.split('/').filter(Boolean);
      const priority = route === '/' ? '1.0' : segments.length === 1 ? '0.9' : '0.8';
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;

  fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemapXml);
  try {
    fs.writeFileSync(path.resolve(__dirname, 'public/sitemap.xml'), sitemapXml);
  } catch (e) {}

  // Automatically write Google-compliant 48x48 PNG favicon (PNG is required by Google Search)
  const pngBase64 = "iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE3klEQVRogdVZXUwcVRSeN7tzsRpTHmqhmjTxJ/40MRo18aHRxGhiq8Y3Hxp90KgtxcbEBxPfNPqixhdtKTMLpJClYH+EYlu0VFqBUpUWbVkUaGkLK9sWZZk7s/Nz55h7F+7MsMuyu+zP7EnOy5k7937fueeec2eOIKQRtXHNRhxENVhCx7AshhUJKVhGUEhV2BpiOLEm2qnKa6qFbAU3BDZgGe1VJGQVGjBeiZCMiCKJB7TgbfdmBj4YeEWRxflSA8dJKsZwfWBbevAyqqWMSw8WLbsbWEK70njev+Cxm8TSncB1gSp/hg1KF053u0NHLj0olJ1KaB9PlX7INjhLZZjrAlUCPRSlBoNz34UdlMAPZUzgqKDI4t8lByLnqmJYKK/sgzxKsQvZvKCGNoEx/CWQmQEgM/1gjgbBDEtgjjYAiZ5N2MJywragev9uwMG1BSMhZDPYmuyEXEQ//U6yM9oehviJVwE3VRaRwJUjOREwR+o88xi/fwJgE/bMuv5j8QioLRtZqCwKiQ6CMfwFkFsXHNvMALNZ145zm3W9m8+hHXoCAGz+zMbTxSNA1bz0LV+cAmW2kX2O7fznzEbDg4OcG+fv671vecDHu1/zJwG1/VEnhogJuOHOBIEzO1w7c2JV4AtKgAIG2+J2emj9S+CvpmQCMgJ7/gq3x49t9R8BW7kGQAwnVGi03PgV1NYH2Fhr6iS36321/iBgjbXAymKDHbsM9vykA3a6lx1g8+I3jm3qp+ISUNsfAbA0yKuYGGzlKpAbv4E10ZZ1VsqcQHAtkFt/eNa2JjtAO/wU4Ma7QGvfDHrf+wBEXx0hmyQqdL4JuPM3XYSCTblLoftY+PCh8VlW8Og1hEROA/lvNOncLBVzLJR/ArTk8wXCUtqx2uGnPdVWbd+cYlwFqC33gHbwMdC6ngdr4jtn/vHW/BOwjXm+gNaxhdvjx18GMnuR3Uhx8HZupzG9KHrv2yvOb4638vHG0Kd5JtBU6dlitbnKARoddIh1PusAGgs5gM597A2ztofAGPwIzEt7WCjS+cjN83x8vGd7vnegwnM4aTZafEa/D6jY6j+gNle7Qq47qQawHevZDmAqHofYagTAUh1HHHoy/yFEZv90AJ390ENOO/g4qPvXOx7evwHAdADFT73BrhJa1wsee0qxCeDGdfknYAx95qyhRUFtvX95sjeHUoNz41SjYAx/BWDFvfbYRMbgsyJAM4ZtxFwLXWbZwzOmudpzL0on1nQPe8dWprz2q0cLQ4CqfupNT3qkQvO6Nfk9kMiZJG/Sa7St/+uoO3wsNXFOFr7MErsSAa3zucIRYCT6ahmwlT38sydbJXaoCmwcSTmezPTn9PGfNQGq2pFn2EXM7T3uRTwNev8HgBvuSP1uxxYW517wA6AeeDBrHDkT4B4NbYL4ydcZYHrVYAXOVcyW1cZ17PtA/6UmUTtW8dulrH9sYUmcExRJHC1jAiPl/3MXy2hn+RKoeFegfdiybHDIyGQNjoUWU33ZEZDQniWNbTFWalA449AR55S94npPp1KRxBfLIZQU1goObE3dK5bQLj/3ihWKLYhq0nfr6wPbfBlOkjinSOJLQiYSkyoqFVn8mp10P3hdQk1JMZ+J0DRFW5lYRl206hXj2sHWkMQRWqSwXPEeT5XLyP8P7mk+ec7eHgAAAABJRU5ErkJggg==";
  fs.writeFileSync(path.resolve(distDir, 'favicon.png'), Buffer.from(pngBase64, 'base64'));
  try {
    fs.writeFileSync(path.resolve(__dirname, 'public/favicon.png'), Buffer.from(pngBase64, 'base64'));
  } catch (e) {}
  console.log('Successfully generated dist/favicon.png and public/sitemap.xml');
}

prerender().catch((e) => {
  console.error('Prerendering failed:', e);
  process.exit(1);
});
