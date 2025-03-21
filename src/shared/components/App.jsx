import { component } from '@dark-engine/core'
import { Router } from '@dark-engine/web-router'

import { routes } from '../routes'

const App = component(({ currentPath }) => {
  return (
    <Router routes={routes} url={currentPath}>
      {slot => slot}
    </Router>
  )
})

export default App
