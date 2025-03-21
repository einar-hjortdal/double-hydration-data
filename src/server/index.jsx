import Elysia from 'elysia'

import { dark } from './handlers/dark'

const port = 12100

new Elysia()
  // .get('/sitemap-dynamic.xml', ctx => sitemap(ctx))
  .get('*', ctx => dark(ctx))
  .on('start', () => console.log(`Running storefront on port ${port}`))
  .listen(port)
