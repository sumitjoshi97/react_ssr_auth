import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import axios from 'axios'

// import redux libraries
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

// import routes
import Routes from './Routes'

import reducers from './reducers'

// create axios instance to prepend before every axios call
const axiosInstance = axios.create({
  baseURL: '/api'
})

// create store
const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
)

// create rendering app
const app = (
  <Provider store={store}>
    <Router>{renderRoutes(Routes)}</Router>
  </Provider>
)

// hydrate app for client side
ReactDOM.hydrate(app, document.getElementById('root'))
