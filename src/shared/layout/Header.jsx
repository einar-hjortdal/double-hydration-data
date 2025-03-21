import { component } from '@dark-engine/core'
import { Link } from '@dark-engine/web-router'

const Header = component(() => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
})

export default Header
