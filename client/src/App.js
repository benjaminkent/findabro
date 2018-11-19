import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import Header from './Components/Header'
import Footer from './Components/Footer'
import MainPage from './Components/MainPage'
import UserEdit from './Components/UserEdit'
import UserProfile from './Components/UserProfile'
import AboutPage from './Components/AboutPage'
// import Callback from './Components/Callback'
// import Splash from './Components/Splash'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Header />
          {/* <Splash /> */}
          {/* <Callback /> */}
          <Switch>
            <Route exact path="/" component={MainPage} />
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
