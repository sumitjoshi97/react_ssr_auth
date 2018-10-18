import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div className="center-align" style={{marginTop: '200px'}}>
        <h3>Welcome</h3>
        <p>Check my first SSR app</p> 
      </div>
    )
  }
}

export default { component: Home }
