import Root from './layout/Root'
import Home from './pages/Home'
import Contact from './pages/Contact'

export const routes = [
  {
    path: '/',
    component: Root,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'contact',
        component: Contact
      }
    ]
  }
]
