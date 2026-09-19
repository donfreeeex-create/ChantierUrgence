import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prerender() {
  const templatePath = path.resolve(__dirname, 'dist/index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');
  
  // Load the server entry
  const { render } = await import('./dist-ssr/entry-server.js');
  
  // Render the app to HTML string
  const appHtml = render();
  
  // Inject the rendered HTML into the template
  const html = template.replace('<!--ssr-outlet-->', appHtml);
  
  // Write the file back
  fs.writeFileSync(templatePath, html);
  console.log('Successfully pre-rendered React to dist/index.html');

  // Automatically write Google-compliant 48x48 PNG favicon (PNG is required by Google Search)
  const pngBase64 = "iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE3klEQVRogdVZXUwcVRSeN7tzsRpTHmqhmjTxJ/40MRo18aHRxGhiq8Y3Hxp90KgtxcbEBxPfNPqixhdtKTMLpJClYH+EYlu0VFqBUpUWbVkUaGkLK9sWZZk7s/Nz55h7F+7MsMuyu+zP7EnOy5k7937fueeec2eOIKQRtXHNRhxENVhCx7AshhUJKVhGUEhV2BpiOLEm2qnKa6qFbAU3BDZgGe1VJGQVGjBeiZCMiCKJB7TgbfdmBj4YeEWRxflSA8dJKsZwfWBbevAyqqWMSw8WLbsbWEK70njev+Cxm8TSncB1gSp/hg1KF053u0NHLj0olJ1KaB9PlX7INjhLZZjrAlUCPRSlBoNz34UdlMAPZUzgqKDI4t8lByLnqmJYKK/sgzxKsQvZvKCGNoEx/CWQmQEgM/1gjgbBDEtgjjYAiZ5N2MJywragev9uwMG1BSMhZDPYmuyEXEQ//U6yM9oehviJVwE3VRaRwJUjOREwR+o88xi/fwJgE/bMuv5j8QioLRtZqCwKiQ6CMfwFkFsXHNvMALNZ145zm3W9m8+hHXoCAGz+zMbTxSNA1bz0LV+cAmW2kX2O7fznzEbDg4OcG+fv671vecDHu1/zJwG1/VEnhogJuOHOBIEzO1w7c2JV4AtKgAIG2+J2emj9S+CvpmQCMgJ7/gq3x49t9R8BW7kGQAwnVGi03PgV1NYH2Fhr6iS36321/iBgjbXAymKDHbsM9vykA3a6lx1g8+I3jm3qp+ISUNsfAbA0yKuYGGzlKpAbv4E10ZZ1VsqcQHAtkFt/eNa2JjtAO/wU4Ma7QGvfDHrf+wBEXx0hmyQqdL4JuPM3XYSCTblLoftY+PCh8VlW8Og1hEROA/lvNOncLBVzLJR/ArTk8wXCUtqx2uGnPdVWbd+cYlwFqC33gHbwMdC6ngdr4jtn/vHW/BOwjXm+gNaxhdvjx18GMnuR3Uhx8HZupzG9KHrv2yvOb4638vHG0Kd5JtBU6dlitbnKARoddIh1PusAGgs5gM597A2ztofAGPwIzEt7WCjS+cjN83x8vGd7vnegwnM4aTZafEa/D6jY6j+gNle7Qq47qQawHevZDmAqHofYagTAUh1HHHoy/yFEZv90AJ390ENOO/g4qPvXOx7evwHAdADFT73BrhJa1wsee0qxCeDGdfknYAx95qyhRUFtvX95sjeHUoNz41SjYAx/BWDFvfbYRMbgsyJAM4ZtxFwLXWbZwzOmudpzL0on1nQPe8dWprz2q0cLQ4CqfupNT3qkQvO6Nfk9kMiZJG/Sa7St/+uoO3wsNXFOFr7MErsSAa3zucIRYCT6ahmwlT38sydbJXaoCmwcSTmezPTn9PGfNQGq2pFn2EXM7T3uRTwNev8HgBvuSP1uxxYW517wA6AeeDBrHDkT4B4NbYL4ydcZYHrVYAXOVcyW1cZ17PtA/6UmUTtW8dulrH9sYUmcExRJHC1jAiPl/3MXy2hn+RKoeFegfdiybHDIyGQNjoUWU33ZEZDQniWNbTFWalA449AR55S94npPp1KRxBfLIZQU1goObE3dK5bQLj/3ihWKLYhq0nfr6wPbfBlOkjinSOJLQiYSkyoqFVn8mp10P3hdQk1JMZ+J0DRFW5lYRl206hXj2sHWkMQRWqSwXPEeT5XLyP8P7mk+ec7eHgAAAABJRU5ErkJggg==";
  fs.writeFileSync(path.resolve(__dirname, 'dist/favicon.png'), Buffer.from(pngBase64, 'base64'));
  try {
    fs.writeFileSync(path.resolve(__dirname, 'public/favicon.png'), Buffer.from(pngBase64, 'base64'));
  } catch (e) {}
  console.log('Successfully generated dist/favicon.png');
}

prerender().catch((e) => {
  console.error('Prerendering failed:', e);
  process.exit(1);
});
