import express from 'express'
import renderer from './render'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(renderer())
})

// app listening to port 3000
app.listen(3000, () => console.log('Listening on port 3000'))

//react-ssr-api.herokuapp.com/