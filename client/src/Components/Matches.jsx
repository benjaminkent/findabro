import React, { Component } from 'react'

import ScrollToTop from './ScrollToTop'
import Header from './Header'
import Callback from './Callback'

class Matches extends Component {
  state = {
    matches: ''
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
      <>
        <ScrollToTop />
        <Header />
        <h1 className="matches-headline">
          These are the bros you've matched with!
        </h1>
        {/* {
          this.state.match.map()
        } */}
        <div className="matches">
          <img
            className="match-image"
            src={this.state.matches[0].avatar_url}
            alt="profile"
          />
          <div className="match-name-email">
            <p className="match-name">{this.state.matches[0].name}</p>
            {/* nice to have, add messaging */}
            {/* <p className="match-name">Send a Message to ...</p> */}
          </div>
        </div>
      </>
    )
  }
}

export default Matches
