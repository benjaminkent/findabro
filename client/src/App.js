import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import Header from './Components/Header'
import Footer from './Components/Footer'
import MainPage from './Components/MainPage'
import UserEdit from './Components/UserEdit'
import UserProfile from './Components/UserProfile'
import AboutPage from './Components/AboutPage'

class App extends Component {
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
      <Router>
        <>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <MainPage
                  {...props}
                  profile={this.state.profile}
                  questions={this.state.questions}
                />
              )}
            />
            <Route path="/edit-profile" component={UserEdit} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/about" component={AboutPage} />
          </Switch>
          <Footer />
        </>
      </Router>
    )
  }
}

export default App
