import React from 'react'
import { Route } from 'react-router-dom'

// import components
import Home from './components/Home'

export default () => {
  return (
    <>
      <Route exact path="/" component={Home} />
    </>
  )
}
