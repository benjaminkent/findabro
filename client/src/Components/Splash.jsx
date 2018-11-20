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
          <h1 className="splash-header">Welcome to Find a Bro.</h1>
          <img
            className="splash-logo"
            src="./images/mustard-wolf.png"
            alt="wolf logo"
          />
          <h2 className="splash-informative">
            A place for men to make new friends.
          </h2>
          <p className="splash-welcome">
            Just log in, answer a few questions about yourself, and find a new
            bro!
          </p>
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
