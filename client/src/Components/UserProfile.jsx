import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

import ScrollToTop from './SubComponents/ScrollToTop'

class UserProfile extends Component {
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
              <Link className="back" to="/">
                <i className="fas fa-caret-left back" />
              </Link>
              <div className="profile-name-container">
                <div className="profile-name-locale">
                  <p className="profile-name">Sample</p>
                  <p>St. Pete, FL</p>
                </div>
                <div className="user-edit">
                  <Link to="/edit" className="link-no-underline">
                    <p className="edit">Edit Profile</p>
                  </Link>
                  <i class="fas fa-arrow-right edit-arrow" />
                </div>
              </div>
              <div className="profile-image-container">
                <img
                  className="user-image"
                  src="./images/user-image.jpg"
                  alt="user"
                />
              </div>
            </div>
          </section>

          <section className="about-section">
            <div className="about-section-container">
              <h2 className="about-user">About Sample</h2>
              <div className="about-underline" />
              <article className="about-questions">
                <p>What do you like to drink?</p>
                <p>Whiskey, Beer, Wine</p>
              </article>
              <article className="about-questions">
                <p>Do you smoke?</p>
                <p>Sometimes</p>
              </article>
              <article className="about-questions">
                <p>What do you smoke?</p>
                <p>Cigars</p>
              </article>
              <article className="about-questions">
                <p>How do you shave?</p>
                <p>Safety Razor</p>
              </article>
              <article className="about-questions">
                <p>Do you workout?</p>
                <p>Often</p>
              </article>
              <article className="about-questions">
                <p>Do you have kids?</p>
                <p>No</p>
              </article>
              <article className="about-questions">
                <p>Do you have pets?</p>
                <p>Dog</p>
              </article>
              <article className="about-questions">
                <p>Do you like guns?</p>
                <p>Yes</p>
              </article>
              <article className="about-questions">
                <p>Are you single?</p>
                <p>No</p>
              </article>
              <article className="about-questions">
                <p>Do you play video games?</p>
                <p>Sometimes</p>
              </article>
              <article className="about-questions">
                <p>Do you play board games?</p>
                <p>No</p>
              </article>
              <article className="about-questions">
                <p>Do you like sports?</p>
                <p>Yes</p>
              </article>
              <article className="about-questions">
                <p>Do you like outdoor activities?</p>
                <p>Yes</p>
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

export default UserProfile
