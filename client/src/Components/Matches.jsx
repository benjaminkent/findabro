import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ScrollToTop from './ScrollToTop'
import Header from './Header'
import Callback from './Callback'

class Matches extends Component {
  state = {
    matches: '',
    currentUser: ''
  }

  componentDidMount() {
    const token = window.localStorage.getItem('id_token')
    fetch('/api/users/matches', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then(a => a.json())
      .then(data => {
        this.setState({ matches: data })
      })

    if (this.props.auth.isAuthenticated()) {
      this.props.auth.getProfile((err, profile) => {
        this.setState({ profile, err })
      })
    }

    fetch('/api/users/profile', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then(a => a.json())
      .then(data => {
        this.setState({ currentUser: data })
      })

    if (this.props.auth.isAuthenticated()) {
      this.props.auth.getProfile((err, profile) => {
        this.setState({ profile, err })
      })
    }
  }

  render() {
    if (!this.state.matches) {
      return (
        <>
          <Callback />
        </>
      )
    }
    return (
      <div className="matches-container">
        <ScrollToTop />
        <Header />
        <h1 className="matches-headline">
          These are the bros you've matched with!
        </h1>
        <Link className="back" to="/home">
          <i className="fas fa-caret-left match-back" />
        </Link>
        {this.state.matches.map((match, index) => {
          return (
            <div className="matches" key={index}>
              <img
                className="match-image"
                src={match.avatar_url}
                alt="profile"
              />
              <div className="match-name-email">
                <p className="match-name">{match.name}</p>
                {/* nice to have, add messaging */}
                <a href={`mailto:${match.email}`} className="match-message">
                  <p onClick={this._message} className="match-message">
                    Send {match.name} an email!
                  </p>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Matches
