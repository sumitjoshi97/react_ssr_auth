// import components
import App from './App'
import Home from './pages/HomePage'
import UsersList from './pages/UsersListPage'
import NotFoundpage from './pages/NotFoundPage'

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
      },
      {
        ...NotFoundpage
      }
    ]
  }
]
