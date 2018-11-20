import React, { Component } from 'react'

import Header from './Header'
import Callback from './Callback'
import ScrollToTop from './ScrollToTop'

class MainPage extends Component {
  state = {
    profile: '',
    user: null
  }

  componentDidMount() {
    fetch('/api/answers/match')
      .then(a => a.json())
      .then(data => {
        this.setState({ user: data })
      })

    if (this.props.auth.isAuthenticated()) {
      this.props.auth.getProfile((err, profile) => {
        this.setState({ profile, err })
      })
    }
  }

  render() {
    if (!this.state.user) {
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
        <div className="main-page-content">
          <section className="user-section">
            <div className="user-image-container">
              <div className="current-matches">
                <h3>Budding Brolationships</h3>
                <i className="fas fa-exclamation-circle notification" />
              </div>
              <div className="name">
                <div className="name-locale">
                  <p>{this.state.user.name}</p>
                  <p>{this.state.user.city}</p>
                </div>
                {/* <p className="match">{this.state.match}% Match</p> */}
              </div>
              <div className="image-container">
                <img
                  className="user-image"
                  src="./images/shuffle.jpeg"
                  alt="user"
                />
              </div>
              <div className="thumbs">
                <i className="fas fa-thumbs-down" />
                <i className="fas fa-thumbs-up" />
              </div>
            </div>
          </section>

          <section className="about-section">
            <div className="about-section-container">
              <h2 className="about-user">About {this.state.user.name}</h2>
              <div className="about-underline" />
              {this.state.user.answers.map(answer => {
                return (
                  <article key={answer.id} className="about-questions">
                    <p>{answer.question}</p>
                    <p>{answer.answer}</p>
                  </article>
                )
              })}
            </div>
          </section>

          <section className="humor-section">
            <div className="meme-section-container">
              <h2 className="about-user">Sense of Humor</h2>
              <div className="about-underline" />
              <div className="meme-image-container">
                <img className="meme" src="./images/vampire.jpg" alt="meme" />
                <img
                  className="meme"
                  src="./images/always-sunny.jpg"
                  alt="meme"
                />
                <img
                  className="meme"
                  src="./images/bank-account.jpg"
                  alt="meme"
                />
                <img
                  className="meme"
                  src="./images/google-loser.png"
                  alt="meme"
                />
                <img className="meme" src="./images/break-up.jpg" alt="meme" />
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default MainPage
