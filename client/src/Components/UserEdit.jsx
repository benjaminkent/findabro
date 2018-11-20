import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from './Header'
import ScrollToTop from './ScrollToTop'

class UserEdit extends Component {
  _submit = event => {
    event.preventDefault()
    const token = window.localStorage.getItem('id_token')

    fetch('/api/answers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        answers: { q: 1, a: 'yes' }
      })
    })
  }

  render() {
    return (
      <>
        <ScrollToTop />
        <Header />
        <div className="main-page-content">
          <section className="user-section">
            <div className="user-image-container">
              <div className="cancel-edit">
                <Link
                  to="/profile"
                  className="link-no-underline cancel-edit"
                  title="Back to the main screen"
                >
                  <p>Cancel Edit</p>
                  <i className="fas fa-ban cancel-edit-back" />
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
                <input placeholder="City" type="text" name="display-location" />
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
          <form onSubmit={this._submit}>
            <section className="about-section">
              <div className="about-section-container">
                <h2 className="about-user">About You</h2>
                <p className="about-user-info">
                  Answer a few questions about yourself
                </p>
                <div className="about-underline" />
                <fieldset className="about-questions">
                  <label htmlFor="drink" className="question">
                    What is your favorite drink?
                  </label>
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
                <fieldset className="about-questions">
                  <label htmlFor="smoke" className="question">
                    What do you smoke?
                  </label>
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
                </fieldset>
                <fieldset className="about-questions">
                  <label htmlFor="shave" className="question">
                    How do you shave?
                  </label>
                  <div className="edit-answers">
                    <div className="radio-edits">
                      <input
                        className="radio"
                        type="radio"
                        name="shave"
                        value="safety-razor"
                      />
                      <label>safety razor</label>
                    </div>
                    <div className="radio-edits">
                      <input
                        className="radio"
                        type="radio"
                        name="shave"
                        value="straight-razor"
                      />
                      <label>straight razor</label>
                    </div>
                    <div className="radio-edits">
                      <input
                        className="radio"
                        type="radio"
                        name="shave"
                        value="regular-ass-razor"
                      />
                      <label>regular ass razor</label>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="about-questions">
                  <label htmlFor="workout" className="question">
                    Do you workout?
                  </label>
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
                </fieldset>
                <fieldset className="about-questions">
                  <label htmlFor="kids" className="question">
                    Do you have kids?
                  </label>
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
                </fieldset>
                <fieldset className="about-questions">
                  <label htmlFor="pets" className="question">
                    Do you have pets?
                  </label>
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
                </fieldset>
                <fieldset className="about-questions">
                  <label htmlFor="guns" className="question">
                    Do you like guns?
                  </label>
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
                </fieldset>
                <fieldset className="about-questions">
                  <label htmlFor="single" className="question">
                    Are you single?
                  </label>
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
                </fieldset>
                <fieldset className="about-questions">
                  <label htmlFor="video-games" className="question">
                    Do you play video games?
                  </label>
                  <div className="edit-answers">
                    <div className="radio-edits">
                      <input
                        className="radio"
                        type="radio"
                        name="video-games"
                        value="often"
                      />
                      <label>often</label>
                    </div>
                    <div className="radio-edits">
                      <input
                        className="radio"
                        type="radio"
                        name="video-games"
                        value="sometimes"
                      />
                      <label>sometimes</label>
                    </div>
                    <div className="radio-edits">
                      <input
                        className="radio"
                        type="radio"
                        name="video-games"
                        value="never"
                      />
                      <label>never</label>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="about-questions">
                  <label htmlFor="board-games" className="question">
                    Do you play board games?
                  </label>
                  <div className="edit-answers">
                    <div className="radio-edits">
                      <input
                        className="radio"
                        type="radio"
                        name="board-games"
                        value="often"
                      />
                      <label>often</label>
                    </div>
                    <div className="radio-edits">
                      <input
                        className="radio"
                        type="radio"
                        name="board-games"
                        value="sometimes"
                      />
                      <label>sometimes</label>
                    </div>
                    <div className="radio-edits">
                      <input
                        className="radio"
                        type="radio"
                        name="board-games"
                        value="never"
                      />
                      <label>never</label>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="about-questions">
                  <label htmlFor="sports" className="question">
                    Do you like sports?
                  </label>
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
                </fieldset>
                <fieldset className="about-questions">
                  <label htmlFor="outdoor-activities" className="question">
                    Do you like outdoor activities?
                  </label>
                  <div className="edit-answers">
                    <div className="radio-edits">
                      <input
                        className="radio"
                        type="radio"
                        name="outdoor-activities"
                        value="yes"
                      />
                      <label>yes</label>
                    </div>
                    <div className="radio-edits">
                      <input
                        className="radio"
                        type="radio"
                        name="outdoor-activities"
                        value="no"
                      />
                      <label>no</label>
                    </div>
                  </div>
                </fieldset>
              </div>
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
                  <img
                    className="meme"
                    src="./images/break-up.jpg"
                    alt="meme"
                  />
                  <img className="meme" src="./images/gamer.jpg" alt="meme" />
                  <img className="meme" src="./images/oreo.jpg" alt="meme" />
                  <img
                    className="meme"
                    src="./images/password.jpg"
                    alt="meme"
                  />
                  <img
                    className="meme"
                    src="./images/sandwich.jpg"
                    alt="meme"
                  />
                  <img
                    className="meme"
                    src="./images/stonehenge.jpg"
                    alt="meme"
                  />
                </div>
              </div>
              <div>
                <Link className="link-no-underline" to="profile">
                  <button type="submit" className="submit">
                    Submit Profile
                  </button>
                </Link>
              </div>
            </section>
          </form>
        </div>
      </>
    )
  }
}

export default UserEdit
