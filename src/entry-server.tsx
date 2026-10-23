import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { getRouteMeta, getAllRoutes } from './seoData';

export function render(urlPath: string = '/') {
  return renderToString(
    <StrictMode>
      <App initialPath={urlPath} />
    </StrictMode>
  );
}

export { getRouteMeta, getAllRoutes };
