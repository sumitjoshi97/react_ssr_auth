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
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null
  })

  Promise.all(promises).then(() => {
    const context = {}

    const content = renderer(req, store, context)

    if (context.notFound) {
      res.status(404)
    }
    //send req object to renderer
    res.send(content)
  })
})

// app listening to port 3000
app.listen(3000, () => console.log('Listening on port 3000'))
