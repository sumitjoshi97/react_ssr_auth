import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

// import redux libraries
import { Provider } from 'react-redux'

// import routes
import Routes from './Routes'

import createStore from './store/store'
const store = createStore()

const app = (
  <Provider store={store}>
    <Router>{renderRoutes(Routes)}</Router>
  </Provider>
)

ReactDOM.hydrate(app, document.getElementById('root'))
