class Api::AnswersController < ApplicationController
  def index
    @answers = Answer.all
    render json: @answers.map { |a|
      {
        id: a.id,
        answer: a.answer,
        user: {
          id: a.user.id,
          name: a.user.name,
          city: a.user.city
        },
        question: {
          id: a.question.id,
          question: a.question.name
        }
      }
    }
  end

  def show
    @answers = Answer.find(params[:id])
    render json:  {
      id: @answers.id,
      answer: @answers.answer,
      user: {
        id: @answers.user.id,
        name: @answers.user.name,
      },
      question: {
        id: @answers.question.id,
        question: @answers.question.name
      }
    }
  end
end
