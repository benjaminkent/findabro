import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

import ScrollToTop from './SubComponents/ScrollToTop'

class UserEdit extends Component {
  render() {
    return (
      <>
        <ScrollToTop />
        <div className="main-page-content">
          <section className="user-section">
            <div className="user-image-container">
              <div className="cancel-edit">
                <Link
                  to="/profile"
                  className="link-no-underline cancel-edit"
                  title="Back to the main screen"
                >
                  <i class="fas fa-arrow-left cancel-edit-back" />
                  <p>Cancel Edit</p>
                </Link>
              </div>
              <div className="edit-name-location">
                <input
                  placeholder="First Name"
                  type="text"
                  name="display-name"
                />
              </div>
              <div className="edit-name-location">
                <input
                  placeholder="Location"
                  type="text"
                  name="display-location"
                />
              </div>
              <div className="edit-image-container">
                <p className="upload-image-text">Upload an Image, Brother</p>
                <img
                  className="edit-user-image"
                  src="./images/beard.png"
                  alt="user"
                />
              </div>
            </div>
          </section>

          <section className="about-section">
            <form className="about-section-container">
              <h2 className="about-user">About You</h2>
              <p className="about-user-info">
                Answer a few questions about yourself
              </p>
              <div className="about-underline" />
              <fieldset className="about-questions">
                <p className="question">What is your favorite drink?</p>
                <div className="edit-answers">
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="drink"
                      value="whiskey"
                    />
                    <label>whiskey</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="drink"
                      value="beer"
                    />
                    <label>beer</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="drink"
                      value="wine"
                    />
                    <label>wine</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="drink"
                      value="other"
                    />
                    <label>other</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="drink"
                      value="non-drinker"
                    />
                    <label>non-drinker</label>
                  </div>
                </div>
              </fieldset>
              <article className="about-questions">
                <p className="question">What do you smoke?</p>
                <div className="edit-answers">
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="smoke"
                      value="cigarettes"
                    />
                    <label>cigarettes</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="smoke"
                      value="cigars"
                    />
                    <label>cigars</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="smoke"
                      value="vape"
                    />
                    <label>vape</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="smoke"
                      value="other"
                    />
                    <label>other</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="smoke"
                      value="non-smoker"
                    />
                    <label>non-smoker</label>
                  </div>
                </div>
              </article>
              <article className="about-questions">
                <p className="question">How do you shave?</p>
                <div className="edit-answers">
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="shave"
                      value="safety razor"
                    />
                    <label>safety razor</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="shave"
                      value="straight razor"
                    />
                    <label>straight razor</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="shave"
                      value="regular ass razor"
                    />
                    <label>regular ass razor</label>
                  </div>
                </div>
              </article>
              <article className="about-questions">
                <p className="question">Do you workout?</p>
                <div className="edit-answers">
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="workout"
                      value="often"
                    />
                    <label>often</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="workout"
                      value="sometimes"
                    />
                    <label>sometimes</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="workout"
                      value="never"
                    />
                    <label>never</label>
                  </div>
                </div>
              </article>
              <article className="about-questions">
                <p className="question">Do you have kids?</p>
                <div className="edit-answers">
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="kids"
                      value="yes"
                    />
                    <label>yes</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="kids"
                      value="no"
                    />
                    <label>no</label>
                  </div>
                </div>
              </article>
              <article className="about-questions">
                <p className="question">Do you have pets?</p>
                <div className="edit-answers">
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="pets"
                      value="dog"
                    />
                    <label>dog</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="pets"
                      value="cat"
                    />
                    <label>cat</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="pets"
                      value="reptile"
                    />
                    <label>reptile</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="pets"
                      value="other"
                    />
                    <label>other</label>
                  </div>
                </div>
              </article>
              <article className="about-questions">
                <p className="question">Do you like guns?</p>
                <div className="edit-answers">
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="guns"
                      value="yes"
                    />
                    <label>yes</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="guns"
                      value="no"
                    />
                    <label>no</label>
                  </div>
                </div>
              </article>
              <article className="about-questions">
                <p className="question">Are you single?</p>
                <div className="edit-answers">
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="single"
                      value="yes"
                    />
                    <label>yes</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="single"
                      value="no"
                    />
                    <label>no</label>
                  </div>
                </div>
              </article>
              <article className="about-questions">
                <p className="question">Do you play video games?</p>
                <div className="edit-answers">
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="video games"
                      value="often"
                    />
                    <label>often</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="video games"
                      value="sometimes"
                    />
                    <label>sometimes</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="video games"
                      value="never"
                    />
                    <label>never</label>
                  </div>
                </div>
              </article>
              <article className="about-questions">
                <p className="question">Do you play board games?</p>
                <div className="edit-answers">
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="board games"
                      value="often"
                    />
                    <label>often</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="board games"
                      value="sometimes"
                    />
                    <label>sometimes</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="board games"
                      value="never"
                    />
                    <label>never</label>
                  </div>
                </div>
              </article>
              <article className="about-questions">
                <p className="question">Do you like sports?</p>
                <div className="edit-answers">
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="sports"
                      value="yes"
                    />
                    <label>yes</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="sports"
                      value="no"
                    />
                    <label>no</label>
                  </div>
                </div>
              </article>
              <article className="about-questions">
                <p className="question">Do you like outdoor activities?</p>
                <div className="edit-answers">
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="outdoor activities"
                      value="yes"
                    />
                    <label>yes</label>
                  </div>
                  <div className="radio-edits">
                    <input
                      className="radio"
                      type="radio"
                      name="outdoor activities"
                      value="no"
                    />
                    <label>no</label>
                  </div>
                </div>
              </article>
            </form>
          </section>

          <section className="humor-section">
            <div className="meme-section-container">
              <h2 className="about-user">Sense of Humor</h2>
              <p className="about-user-info">Pick your 5 favorite memes</p>
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
                <img className="meme" src="./images/gamer.jpg" alt="meme" />
                <img className="meme" src="./images/oreo.jpg" alt="meme" />
                <img className="meme" src="./images/password.jpg" alt="meme" />
                <img className="meme" src="./images/sandwich.jpg" alt="meme" />
                <img
                  className="meme"
                  src="./images/stonehenge.jpg"
                  alt="meme"
                />
              </div>
            </div>
            <div>
              <Link className="link-no-underline" to="profile">
                <button className="submit">Submit Profile</button>
              </Link>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default UserEdit
