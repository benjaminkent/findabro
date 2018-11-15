import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './App.css'

import Header from './Components/SubComponents/Header'
import Footer from './Components/SubComponents/Footer'
import MainPage from './Components/MainPage'
import UserEdit from './Components/UserEdit'
import UserProfile from './Components/UserProfile'
import AboutPage from './Components/AboutPage'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/edit" component={UserEdit} />
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
