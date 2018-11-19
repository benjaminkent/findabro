import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import './App.css'

import Auth from './auth/auth'
import history from './auth/history'

import Header from './Components/Header'
import Footer from './Components/Footer'
import MainPage from './Components/MainPage'
import UserEdit from './Components/UserEdit'
import UserProfile from './Components/UserProfile'
import AboutPage from './Components/AboutPage'
import Callback from './Components/Callback'
import Splash from './Components/Splash'

const auth = new Auth()

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication()
  }
}

class App extends Component {
  render() {
    return (
      <Router history={history} component={App}>
        <>
          <Header />
          <Switch>
            <Route path="/edit-profile" component={UserEdit} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/about" component={AboutPage} />
            <Route
              exact
              path="/"
              render={props => <Splash auth={auth} {...props} />}
            />
            <Route
              path="/home"
              render={props => <MainPage auth={auth} {...props} />}
            />
            <Route
              path="/callback"
              render={props => {
                handleAuthentication(props)
                return <Callback {...props} />
              }}
            />
          </Switch>
          <Footer />
        </>
      </Router>
    )
  }
}

export default App
