import React, { Component } from 'react'

class MemeSelect extends Component {
  state = {
    selected: ''
  }

  setAnswer = event => {
    this.setState({ selected: event.target.value })
  }

  render() {
    return (
      <>
        <div>
          <section className="humor-section">
            <div className="meme-section-container">
              <h2 className="about-user">Sense of Humor</h2>
              <p className="about-user-info">Choose your favorite meme</p>
              <div className="about-underline" />
              <fieldset className="meme-questions">
                <label className="meme-collection">{this.props.question}</label>
                {this.props.answers.map(meme => (
                  <div className="edit-answers" key={meme}>
                    <div className="radio-edits">
                      <label className="meme-label">
                        <input
                          className="radio radio-meme"
                          type="radio"
                          checked={this.state.selected === meme}
                          value={meme}
                          onChange={this.setAnswer}
                        />
                        <img className="meme-select" src={meme} alt="meme" />
                      </label>
                    </div>
                  </div>
                ))}
                <button
                  type="submit"
                  className="submit-answer"
                  onClick={() => {
                    this.props.onSubmit(this.props.id, this.state.selected)
                  }}
                  title="Submit this answer"
                >
                  Submit Answer
                </button>
              </fieldset>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default MemeSelect
