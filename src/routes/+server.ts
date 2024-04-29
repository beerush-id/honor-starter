import { type ReadHandler } from '@beerush/honor';

export default (async (c) => {
  return {
    message: 'Hello, World!',
  };
}) satisfies ReadHandler;
