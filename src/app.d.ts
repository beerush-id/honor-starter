import {} from 'hono';
import { RestDriver } from '@beerush/honor';

declare module 'hono' {
  interface Env {
    Variables: {
      remote: RestDriver;
    };
    Bindings: {
      HS_API_SECRET: string;
      HS_API_SESSION_DURATION: string;
      HS_SUPABASE_URL: string;
      HS_SUPABASE_KEY: string;
    };
  }
}
