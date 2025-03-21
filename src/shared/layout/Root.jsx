import { component } from '@dark-engine/core'

import AppLayout from './AppLayout'

const Root = component(({ slot }) => {
  return (
    <AppLayout>
      {slot}
    </AppLayout>
  )
})

export default Root
