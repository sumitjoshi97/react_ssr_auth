// import components
import App from './App'
import Home from './pages/HomePage'
import UsersList, { loadData } from './pages/UsersListPage'

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true
      },
      {
        ...UsersList,
        path: '/users'
      }
    ]
  }
]
