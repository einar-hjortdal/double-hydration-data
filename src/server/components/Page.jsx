import { component } from '@dark-engine/core'
import { DataClientProvider } from '@dark-engine/data'

import LinkedData from './LinkedData'

const Page = component(({ currentPath, dataClient }) => {
  return (
    <DataClientProvider client={dataClient}>
      <html lang='en'>
        <head>
          <meta charset='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <base href='/' />

          <LinkedData currentPath={currentPath} />

          <link rel='shortcut icon' href='/favicon.ico' />
          <script type='module' src='/_public/index.js' />
        </head>
        <body>
          <div id='dark-root'>___app</div>
        </body>
      </html>
    </DataClientProvider>
  )
})

export default Page
