import 'babel-polyfill'
import express from 'express'
import renderer from './render'
import createStore from './client/store/store'

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore()

  //initialize and load data into store

  //send req object to renderer
  res.send(renderer(req, store))
})

// app listening to port 3000
app.listen(3000, () => console.log('Listening on port 3000'))

//react-ssr-api.herokuapp.com/