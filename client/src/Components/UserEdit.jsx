import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import questions from './questions.json'

import Header from './Header'
import ScrollToTop from './ScrollToTop'
import QAndA from './QAndA'

class UserEdit extends Component {
  state = {
    questionIndex: 0
  }

  _submit = (id, answer) => {
    const token = window.localStorage.getItem('id_token')

    fetch('/api/answers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ q: id, a: answer })
    })
      .then(r => r.json())
      .then(data => {
        const { questionIndex } = this.state
        // TODO, add if to guard for last question, then direct to other screen
        if (questionIndex < questions.length - 1) {
          this.setState({ questionIndex: questionIndex + 1 })
        } else {
          this.props.history.push('/profile')
        }
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
              {/* <div className="edit-name-location">
                <input
                  placeholder="First Name"
                  type="text"
                  name="display-name"
                />
              </div> */}
              <div className="edit-name-location">
                <input
                  placeholder="Enter City"
                  type="text"
                  name="display-location"
                />
              </div>
              {/* <div className="edit-image-container">
                <p className="upload-image-text">Upload an Image, Brother</p>
                <img
                  className="edit-user-image"
                  src="./images/beard.png"
                  alt="user"
                />
              </div> */}
            </div>
          </section>
          <section className="about-section">
            <div className="about-section-container">
              <h2 className="about-user">About You</h2>
              <p className="about-user-info">
                Answer a few questions about yourself
              </p>
              <div className="about-underline" />
              <QAndA
                {...questions[this.state.questionIndex]}
                onSubmit={this._submit}
              />
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
                <button type="submit" className="submit">
                  Submit Profile
                </button>
              </Link>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default UserEdit
