import { hydrateRoot } from '@dark-engine/platform-browser'

import App from '../shared/components/App'
import { api } from '../shared/api'

hydrateRoot(document.getElementById('dark-root'), <App api={api} />)
