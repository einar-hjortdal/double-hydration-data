import { join } from 'bun:path'
import { renderToString } from '@dark-engine/platform-server'

import App from '../../shared/components/App'
import Page from '../components/Page'

const renderApp = async (currentPath) => {
  return await renderToString(<App currentPath={currentPath} />)
}

const renderPage = async (currentPath) => {
  return await renderToString(<Page currentPath={currentPath} />)
}

const darkResponse = async (elysiaContext) => {
  const currentPath = elysiaContext.path
  try {
    const app = await renderApp(currentPath)
    const page = await renderPage(currentPath)
    const body = `<!DOCTYPE html>${page.replace('___app', app)}`
    elysiaContext.set.headers['Content-Type'] = 'text/html;charset=utf-8'
    return body
  } catch (err) {
    console.error(err)
  }
}

export function dark (elysiaContext) {
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
