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
}

prerender().catch((e) => {
  console.error('Prerendering failed:', e);
  process.exit(1);
});
