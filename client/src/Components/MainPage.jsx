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

    const textAnswers = this.state.user.answers.filter(
      answer => answer.question.kind === 'text'
    )

    const imageAnswers = this.state.user.answers.filter(
      answer => answer.question.kind === 'image'
    )

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
                  {/* this p is where the city will go */}
                  <p />
                </div>
                {/* <p className="match">{this.state.match}% Match</p> */}
              </div>
              <div className="image-container">
                <img
                  className="user-image"
                  src={this.state.user.avatar_url}
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
              {textAnswers.map((answer, index) => {
                return (
                  <article key={index} className="about-questions">
                    <p>{answer.question.name}</p>
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
                {imageAnswers.map((image, index) => {
                  return (
                    <img
                      key={index}
                      className="meme"
                      src={image.answer}
                      alt="meme"
                    />
                  )
                })}
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default MainPage
