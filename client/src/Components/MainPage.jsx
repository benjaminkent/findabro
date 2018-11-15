import React, { Component } from 'react'

import ScrollToTop from './SubComponents/ScrollToTop'

class MainPage extends Component {
  state = {
    name: 'Sample Bro',
    location: 'St. Pete, FL',
    match: '100',
    drink: 'Whiskey, Beer, Wine',
    smoke: 'Sometimes',
    smokeType: 'Cigars',
    shave: 'Safety Razor',
    workout: 'Often',
    kids: 'No',
    pets: 'Dog',
    guns: 'Yes',
    single: 'No',
    videoGames: 'Sometimes',
    boardGames: 'No',
    sports: 'Yes',
    outdoor: 'Yes'
  }

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
                  <p>{this.state.name}</p>
                  <p>{this.state.location}</p>
                </div>
                <p className="match">{this.state.match}% Match</p>
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
              <article className="about-questions">
                <p>What do you like to drink?</p>
                <p>{this.state.drink}</p>
              </article>
              <article className="about-questions">
                <p>Do you smoke?</p>
                <p>{this.state.smoke}</p>
              </article>
              <article className="about-questions">
                <p>What do you smoke?</p>
                <p>{this.state.smokeType}</p>
              </article>
              <article className="about-questions">
                <p>How do you shave?</p>
                <p>{this.state.shave}</p>
              </article>
              <article className="about-questions">
                <p>Do you workout?</p>
                <p>{this.state.workout}</p>
              </article>
              <article className="about-questions">
                <p>Do you have kids?</p>
                <p>{this.state.kids}</p>
              </article>
              <article className="about-questions">
                <p>Do you have pets?</p>
                <p>{this.state.pets}</p>
              </article>
              <article className="about-questions">
                <p>Do you like guns?</p>
                <p>{this.state.guns}</p>
              </article>
              <article className="about-questions">
                <p>Are you single?</p>
                <p>{this.state.single}</p>
              </article>
              <article className="about-questions">
                <p>Do you play video games?</p>
                <p>{this.state.videoGames}</p>
              </article>
              <article className="about-questions">
                <p>Do you play board games?</p>
                <p>{this.state.boardGames}</p>
              </article>
              <article className="about-questions">
                <p>Do you like sports?</p>
                <p>{this.state.sports}</p>
              </article>
              <article className="about-questions">
                <p>Do you like outdoor activities?</p>
                <p>{this.state.outdoor}</p>
              </article>
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
