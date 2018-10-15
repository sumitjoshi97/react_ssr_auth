import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'

// import components
import Home from './client/components/Home'

const app = express()

app.get('/', (req, res) => {
  const content = renderToString(<Home />)
  res.send(content)
})

// app listening to port 3000
app.listen(3000, () => console.log('Listening on port 3000'))
