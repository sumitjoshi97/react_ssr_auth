import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>
        Home Component updated
        <button onClick={() => console.log('pressed')}>Press me</button>
      </div>
    )
  }
}

export default Home
