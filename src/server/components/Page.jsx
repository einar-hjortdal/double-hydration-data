import { component } from '@dark-engine/core'

import LinkedData from './LinkedData'
import Canonical from './Canonical'

const Page = component(({ currentPath }) => {
  return (
    <html lang='en'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <base href='/' />

        <Canonical currentPath={currentPath} />
        <LinkedData currentPath={currentPath} />

        <link rel='shortcut icon' href='/favicon.ico' />
        <script type='module' src='/_public/index.js' />
      </head>
      <body>
        <div id='dark-root'>___app</div>
      </body>
    </html>
  )
})

export default Page
