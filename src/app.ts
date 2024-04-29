import { createApp, type RoutePaths } from '@beerush/honor';
import { logger, LogLevel } from '@beerush/honor/utils';
import { supabase } from '@beerush/honor/supabase';

logger.configure({
  level: LogLevel.VERBOSE,
});

const routes: RoutePaths = {
  client: import.meta.glob(`/src/routes/**/+*(page.ts|page.md|layout.ts)x`, {
    eager: true,
  }),
  server: import.meta.glob(`/src/routes/**/+*(server|schema).(ts|mdx)`, {
    eager: true,
  }),
};

export default createApp(supabase(), {
  routes,
  basePath: '/api',
  docsPath: '/docs',
});
