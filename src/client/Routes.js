// import components
import Home from './pages/HomePage'
import UsersList, {loadData} from './pages/UsersListPage'

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    loadData,
    path: '/users',
    component: UsersList
  }
]
