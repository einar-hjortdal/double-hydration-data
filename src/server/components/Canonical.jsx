import { component } from '@dark-engine/core'

import { config } from '../../shared/config'

const Canonical = component(({ currentPath }) => {
  const currentUrl = `${config.baseUrl}${currentPath}`
  return (
    <>
      <link rel='canonical' href={currentUrl} />
    </>
  )
})

export default Canonical
