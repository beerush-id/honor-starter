import pages from '@hono/vite-cloudflare-pages';
import { defineConfig } from 'vite';
import { client, honoRest } from '@beerush/honor/vite';
import adapter from '@hono/vite-dev-server/cloudflare';

export default defineConfig(({ mode }) => {
  return mode === 'client' ? {
    plugins: [ client() ],
  } : {
    plugins: [
      honoRest({
        devServer: {
          adapter,
        },
      }),
      pages(
        {
          entry: 'src/app.ts',
        },
      ),
    ],
  };
});
