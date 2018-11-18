import React, { Component } from 'react'

import ScrollToTop from './ScrollToTop'

class MainPage extends Component {
  render() {
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
                  <p>{this.props.answers[0].info.name}</p>
                  <p>{this.props.answers[0].info.city}</p>
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
              <h2 className="about-user">
                About {this.props.answers[0].info.name}
              </h2>
              <div className="about-underline" />
              {this.props.answers.map(answer => {
                return (
                  <article key={answer.id} className="about-questions">
                    <p>{answer.info.question}</p>
                    <p>{answer.info.answer}</p>
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
