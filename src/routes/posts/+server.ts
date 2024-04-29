import type { Endpoint } from '@beerush/honor/supabase';
import { z } from '@beerush/honor';

const schema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
}).openapi({
  title: 'Posts',
  description: 'Posts are a collection of posts.',
});

type Post = z.infer<typeof schema>;

export default ({
  name: 'post',
  table: 'Posts',
  schema,
}) satisfies Endpoint<Post>;
