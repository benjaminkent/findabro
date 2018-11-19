import React, { Component } from 'react'
import Auth from '../auth/auth.js'

const auth = new Auth()

class Splash extends Component {
  _login = () => {
    auth.login()
  }

  render() {
    return (
      <div className="splash-body">
        <main className="splash-main">
          <h1 className="splash-header">
            Welcome to the coolest app in the world
          </h1>
          <p className="splash-welcome">Have a blast here, friend!</p>
          <div>
            <button onClick={this._login} className="login">
              Log In
            </button>
          </div>
        </main>
      </div>
    )
  }
}

export default Splash
