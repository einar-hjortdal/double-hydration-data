import { component, stringify } from '@dark-engine/core'
import { useApi, useQuery } from '@dark-engine/data'

const Home = component(() => {
  // This data will be hydrated, but the browser receives 2 text/dark-state payloads
  const api = useApi()
  const { data } = useQuery('facts', api.catsRetrieve)

  if (data) {
    return (
      <div>
        <h1>Home</h1>
        <p>{stringify(data)}</p>
      </div>
    )
  }

  return null
})

export default Home
