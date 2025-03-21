import { join } from 'bun:path'
import { renderToString } from '@dark-engine/platform-server'
import { DataClient, InMemoryCache } from '@dark-engine/data'

import { api } from '../../shared/api'
import App from '../../shared/components/App'
import Page from '../components/Page'

const renderApp = async (currentPath, dataClient) => {
  return await renderToString(<App currentPath={currentPath} dataClient={dataClient} />)
}

const renderPage = async (currentPath, dataClient) => {
  return await renderToString(<Page currentPath={currentPath} dataClient={dataClient} />)
}

const darkResponse = async (elysiaContext) => {
  const currentPath = elysiaContext.path
  const dataClient = new DataClient({ api, cache: new InMemoryCache() })
  try {
    const app = await renderApp(currentPath, dataClient)
    const page = await renderPage(currentPath, dataClient)
    const body = `<!DOCTYPE html>${page.replace('___app', app)}`
    elysiaContext.set.headers['Content-Type'] = 'text/html;charset=utf-8'
    return body
  } catch (err) {
    console.error(err)
  }
}

export const dark = (elysiaContext) => {
  if (process.env.BUN_ENV === 'production' || elysiaContext.path === '/') {
    return darkResponse(elysiaContext)
  }

  const absolutePath = join(process.cwd(), 'build/browser', elysiaContext.path)
  const file = Bun.file(absolutePath)
  if (file.size === 0) {
    return darkResponse(elysiaContext)
  }

  return file
}
