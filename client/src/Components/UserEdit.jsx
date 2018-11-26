import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import questions from './questions.json'

import Header from './Header'
import ScrollToTop from './ScrollToTop'
import QAndA from './QAndA'
import MemeSelect from './MemeSelect'

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
        if (questionIndex < questions.length - 1) {
          this.setState({ questionIndex: questionIndex + 1 })
        } else {
          this.props.history.push('/profile')
        }
      })
  }

  render() {
    const currentQuestion = questions[this.state.questionIndex]
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
              {/* for users to be able to change their name or location */}
              {/* <div className="edit-name-location">
                <input
                  placeholder="First Name"
                  type="text"
                  name="display-name"
                />
              </div> */}
              {/* <div className="edit-name-location">
                <input
                  placeholder="Enter City"
                  type="text"
                  name="display-location"
                />
              </div> */}
              <div className="edit-profile-about">
                <h4>Let other bros know about some of the things you like!</h4>
                <p>Update your profile by answering the questions below.</p>
              </div>
              {/* if at some point users can upload their own image */}
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
          {currentQuestion.type === 'text' ? (
            <QAndA {...currentQuestion} onSubmit={this._submit} />
          ) : (
            <MemeSelect {...currentQuestion} onSubmit={this._submit} />
          )}
        </div>
      </>
    )
  }
}

export default UserEdit
