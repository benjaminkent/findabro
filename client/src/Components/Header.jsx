import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Auth from '../auth/auth.js'

const auth = new Auth()

class Header extends Component {
  _logout = () => {
    auth.logout()
  }

  render() {
    return (
      <>
        <header className="header">
          <div className="logo">
            <Link to="/home">
              <img
                src="./images/wolf-logo.png"
                className="logo-image"
                alt="wolf logo"
              />
            </Link>
            <Link className="logo-words" to="/home">
              <div className="logo-words-container">
                <h1 className="logo-upper">Find a Bro</h1>
                <p className="logo-lower">Expand Your Wolfpack</p>
              </div>
            </Link>
          </div>
          <div className="directions">
            <Link
              to="/about"
              title="About Find a Bro"
              className="header-anchor"
            >
              <i className="fas fa-question-circle" />
            </Link>
            <Link
              to="/profile"
              title="View Your Profile"
              className="header-anchor"
            >
              <i className="fas fa-user" />
            </Link>
            <Link to="/" title="Log out" className="header-anchor">
              <i onClick={this._logout} className="fas fa-sign-out-alt" />
            </Link>
          </div>
        </header>
      </>
    )
  }
}

export default Header
