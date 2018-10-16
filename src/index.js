import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import renderer from './render'
import createStore from './client/store/store'
import Routes from './client/Routes'

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore()

  //initialize and load data into store
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData() : null
  })

  Promise.all(promises).then(() => {
    //send req object to renderer
    res.send(renderer(req, store))
  })
})

// app listening to port 3000
app.listen(3000, () => console.log('Listening on port 3000'))
