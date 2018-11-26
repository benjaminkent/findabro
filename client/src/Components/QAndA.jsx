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
          <section className="about-section">
            <div className="about-section-container">
              <h2 className="about-user">About You</h2>
              <p className="about-user-info">
                Answer some questions about yourself
              </p>
              <div className="about-underline" />
              <fieldset className="about-questions">
                <label className="question">{this.props.question}</label>
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
                <button
                  type="submit"
                  className="submit-answer"
                  onClick={() => {
                    this.props.onSubmit(this.props.id, this.state.answer)
                  }}
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

export default QAndA
