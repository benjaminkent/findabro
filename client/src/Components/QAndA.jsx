import React, { Component } from 'react'

class QAndA extends Component {
  state = {
    answer: ''
  }

  setAnswer = event => {
    this.setState({ answer: event.target.value })
  }

  render() {
    return (
      <>
        <div>
          <fieldset className="about-questions">
            <label htmlFor="drink" className="question">
              {this.props.question}
            </label>
            {this.props.answers.map(answer => (
              <div className="edit-answers" key={answer}>
                <div className="radio-edits">
                  <label>
                    <input
                      className="radio"
                      type="radio"
                      checked={this.state.answer === answer}
                      value={answer}
                      onChange={this.setAnswer}
                    />
                    {answer}
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
            this.props.onSubmit(this.props.id, this.state.answer)
          }}
        >
          Submit Answer
        </button>
      </>
    )
  }
}

export default QAndA
