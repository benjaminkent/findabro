import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from './Header'
import ScrollToTop from './ScrollToTop'
import Callback from './Callback'

class UserProfile extends Component {
  state = {
    profile: '',
    user: ''
  }

  componentDidMount() {
    const token = window.localStorage.getItem('id_token')
    fetch('/api/users/profile', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
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
    console.log(this.state.user)

    const textAnswers = this.state.user.profile.answers.filter(
      answer => answer.question_kind === 'text'
    )

    const imageAnswers = this.state.user.profile.answers.filter(
      answer => answer.question_kind === 'image'
    )

    return (
      <>
        <ScrollToTop />
        <Header />
        <div className="main-page-content">
          <section className="user-section">
            <div className="user-image-container">
              <div className="current-matches">
                <Link className="match-link" to="/matches">
                  <h3>Budding Brolationships</h3>
                  {/* nice to have, notification of new match */}
                  {/* <i className="fas fa-exclamation-circle notification" /> */}
                </Link>
              </div>
              <div className="arrow-edit">
                <Link className="back" to="/home">
                  <i className="fas fa-caret-left back" />
                </Link>
                <div>
                  <Link
                    to="/edit-profile"
                    className="link-no-underline user-edit"
                  >
                    <p className="edit">Edit Profile</p>
                    <i className="fas fa-user-edit edit-arrow" />
                  </Link>
                </div>
              </div>
              <div className="profile-name-container">
                <div className="profile-name-locale">
                  <p className="profile-name">{this.state.user.profile.name}</p>
                  {/* below p is where the location will go */}
                  <p />
                </div>
              </div>
              <div className="profile-image-container">
                <img
                  className="user-image"
                  src={this.state.user.profile.avatar_url}
                  alt="user"
                />
              </div>
            </div>
          </section>

          <section className="about-section">
            <div className="about-section-container">
              <h2 className="about-user">About You</h2>
              <div className="about-underline" />
              {textAnswers.map((answer, index) => {
                return (
                  <article className="about-questions" key={index}>
                    <p>{answer.question_name}</p>
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
                {imageAnswers.map((answer, index) => (
                  <img
                    key={index}
                    className="meme"
                    alt="answer"
                    src={answer.answer}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default UserProfile
