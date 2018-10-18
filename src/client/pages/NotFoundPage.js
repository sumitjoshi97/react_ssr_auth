import React from 'react'

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true
  return <h1>End of Internet</h1>
}

export default { component: NotFoundPage }
