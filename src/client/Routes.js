import React from 'react'
import { Route } from 'react-router-dom'

// import components
import Home from './components/Home'
import UsersList from './components/UsersList'

export default () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={UsersList} />
    </>
  )
}
