import { component } from '@dark-engine/core'

import Header from './Header'
import Footer from './Footer'

const AppLayout = component(({ slot }) => {
  return (
    <>
      <Header />
      <main>
        {slot}
      </main>
      <Footer />
    </>
  )
})

export default AppLayout
