import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

class AboutPage extends Component {
  render() {
    let imgURL = './images/wolf-logo-light-yellow.png'
    return (
      <>
        <section>
          <div
            className="about-page-main"
            style={{
              backgroundImage: `url(${imgURL})`
            }}
          >
            <h1>About Find a Bro</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              doloribus, fugiat explicabo a ducimus tenetur ut sit veritatis
              excepturi labore assumenda ratione cumque necessitatibus corporis
              natus nesciunt blanditiis eligendi?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              doloribus, fugiat explicabo a ducimus tenetur ut sit veritatis
              excepturi labore assumenda ratione cumque necessitatibus corporis
              natus nesciunt blanditiis eligendi?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              doloribus, fugiat explicabo a ducimus tenetur ut sit veritatis
              excepturi labore assumenda ratione cumque necessitatibus corporis
              natus nesciunt blanditiis eligendi?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              doloribus, fugiat explicabo a ducimus tenetur ut sit veritatis
              excepturi labore assumenda ratione cumque necessitatibus corporis
              natus nesciunt blanditiis eligendi?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              doloribus, fugiat explicabo a ducimus tenetur ut sit veritatis
              excepturi labore assumenda ratione cumque necessitatibus corporis
              natus nesciunt blanditiis eligendi?
            </p>
          </div>
        </section>
      </>
    )
  }
}

export default AboutPage
