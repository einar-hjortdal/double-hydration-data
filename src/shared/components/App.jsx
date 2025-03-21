import { component, useMemo, detectIsEmpty } from '@dark-engine/core'
import { Router } from '@dark-engine/web-router'
import { DataClient, DataClientProvider, InMemoryCache } from '@dark-engine/data'

import { routes } from '../routes'

const App = component(({ currentPath, dataClient, api }) => {
  const client = useMemo(() => {
    if (detectIsEmpty(dataClient)) {
      return new DataClient({ api, cache: new InMemoryCache() })
    }
    return dataClient
  }, [])

  return (
    <DataClientProvider client={client}>
      <Router routes={routes} url={currentPath}>
        {slot => slot}
      </Router>
    </DataClientProvider>
  )
})

export default App
