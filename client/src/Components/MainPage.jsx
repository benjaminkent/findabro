import React, { Component } from 'react'

import ScrollToTop from './ScrollToTop'

class MainPage extends Component {
  state = {
    profile: [],
    questions: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/users')
      .then(u => u.json())
      .then(data => {
        this.setState({ profile: data })
      })

    fetch('http://localhost:3000/api/questions')
      .then(q => q.json())
      .then(data => {
        this.setState({ questions: data })
      })
  }

  render() {
    if (this.state.profile.length === 0) {
      return (
        <>
          <div className="loading" />
        </>
      )
    } else if (this.state.questions.length === 0) {
      return (
        <>
          <div className="loading" />
        </>
      )
    }

    return (
      <>
        <ScrollToTop />
        <div className="main-page-content">
          <section className="user-section">
            <div className="user-image-container">
              <div className="current-matches">
                <h3>Budding Brolationships</h3>
                <i className="fas fa-exclamation-circle notification" />
              </div>
              <div className="name">
                <div className="name-locale">
                  <p>{this.state.profile[0].name}</p>
                  <p>{this.state.profile[0].city}</p>
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
              <h2 className="about-user">About {this.state.name}</h2>
              <div className="about-underline" />
              {this.state.questions.map(question => {
                return (
                  <article key={question.id} className="about-questions">
                    <p>{question.name}</p>
                    <p>An answer</p>
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
