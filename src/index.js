import 'babel-polyfill'
import express from 'express'
import proxy from 'express-http-proxy'
import { matchRoutes } from 'react-router-config'

// import files
import renderer from './render'
import createStore from './client/store/store'
import Routes from './client/Routes'

const app = express()

// proxy the render server to api server
app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000'
      return opts
    }
  })
)
app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore(req)
  //initialize and load data into store
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve)
        })
      }
    })

  const render = () => {
    const context = {}
    const content = renderer(req, store, context)
    if (context.url) {
      return res.redirect(301, context.url)
    }

    if (context.notFound) {
      res.status(404)
    }
    //send req object to renderer
    res.send(content)
  }
  Promise.all(promises)
    .then(render)
    .catch(render)
})

// app listening to port 3000
app.listen(3000, () => console.log('Listening on port 3000'))
