import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import Header from './Components/Header'
import Footer from './Components/Footer'
import MainPage from './Components/MainPage'
import UserEdit from './Components/UserEdit'
import UserProfile from './Components/UserProfile'
import AboutPage from './Components/AboutPage'
import Callback from './Components/Callback'

class App extends Component {
  state = {
    answers: []
  }

  componentDidMount() {
    fetch('/api/answers')
      .then(a => a.json())
      .then(data => {
        this.setState({ answers: data })
      })
  }

  render() {
    if (this.state.answers.length === 0) {
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
          <Callback />
          {/* <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <MainPage {...props} answers={this.state.answers} />
              )}
            />
            <Route path="/edit-profile" component={UserEdit} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/about" component={AboutPage} />
          </Switch> */}
          <Footer />
        </>
      </Router>
    )
  }
}

export default App
