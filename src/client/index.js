import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// import redux libraries
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

// import routes
import Routes from './Routes'

// import reduxer
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(thunk))

const app = (
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
)

ReactDOM.hydrate(app, document.getElementById('root'))
