import React, { Component } from 'react'

import Header from './Header'
import ScrollToTop from './ScrollToTop'

class AboutPage extends Component {
  render() {
    let imgURL = './images/wolf-logo-light-yellow.png'
    return (
      <>
        <ScrollToTop />
        <Header />
        <section>
          <div
            className="about-page-main"
            style={{
              backgroundImage: `url(${imgURL})`
            }}
          >
            <h1>About Find a Bro</h1>
            <p>
              <strong>Welcome to Find a Bro!</strong> A place for men to feel
              comfortable looking for new friends.
            </p>
            <p>
              The idea for the app came about because I moved to a new city two
              years ago and didn't know anybody other than my fiancee. I still
              have many male friends that I'm very close with. These are the
              guys I grew up and I love them like brothers. But now they live
              1,200 miles away. We don't exactly get to hang out anymore.
            </p>
            <p>
              So what the hell does a man do to make new friends? Other than at
              work, we really don't have many opportunities to meet new guys
              that could be potential friends. What do you think happens if you
              just walk up to a random dude and say, "Hey man, want to be
              bros?". He'll probably tell you to f off. I've spoken with many
              men that complain about how hard it is to make new friends, so I'm
              aiming to change that.
            </p>
            <p>
              Find a Bro will have you answer some questions about yourself, but
              most importantly pick a few memes that you think are funny. My
              best friends are my best friends mostly because we laugh at all
              the same dumb shit when we're together. That's what sets Find a
              Bro apart from other friend finder apps you may have heard of.
            </p>
            <p>
              So give it a shot! Go edit your profile, and answer some questions
              about yourself and what you find funny, then start giving dudes a
              thumbs up or thumbs down. Check in periodically on the Budding
              Brolationships link and see if guys you have given a thumbs up to,
              have also thumbs upped you! Good luck!
            </p>
          </div>
        </section>
      </>
    )
  }
}

export default AboutPage
