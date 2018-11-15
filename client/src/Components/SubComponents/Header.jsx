import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="logo">
            <Link to="/">
              <img
                src="./images/wolf-logo.png"
                className="logo-image"
                alt="wolf logo"
              />
            </Link>
            <div className="logo-words-container">
              <h1 className="logo-upper">Find a Bro</h1>
              <p className="logo-lower">Expand Your Wolfpack</p>
            </div>
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
              title="Edit Your Profile"
              className="header-anchor"
            >
              <i className="fas fa-user" />
            </Link>
          </div>
        </header>
      </>
    )
  }
}

export default Header
