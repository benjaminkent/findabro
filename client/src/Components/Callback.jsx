import React, { Component } from 'react'

class Callback extends Component {
  render() {
    return (
      <div className="loading-container">
        <p className="loading">loading...</p>
        <img
          className="loading-image"
          src="./images/cat-lasers.gif"
          alt="loading"
        />
      </div>
    )
  }
}

export default Callback
