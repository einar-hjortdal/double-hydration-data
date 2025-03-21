import { hydrateRoot } from '@dark-engine/platform-browser'

import App from '../shared/components/App'

hydrateRoot(document.getElementById('dark-root'), <App />)
