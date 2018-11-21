import React, { Component } from 'react'

import memes from './memes.json'

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
          <fieldset className="meme-questions">
            <label className="meme-collection">{this.props.collection}</label>
            {this.props.answers.map(meme => (
              <div className="edit-answers">
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
          </fieldset>
        </div>
        <button
          type="submit"
          className="submit-answer"
          onClick={() => {
            this.props.onSubmit(this.props.id, this.state.selected)
          }}
        >
          Submit Answer
        </button>
      </>
    )
  }
}

export default MemeSelect
