import { combineReducers } from 'redux'

// import reducers
import userReducer from './userReducer'
import authReducer from './authReducer'
import adminsReducer from './adminsReducer'

// export reducers
export default combineReducers({
  users: userReducer,
  auth: authReducer,
  admins: adminsReducer
})
