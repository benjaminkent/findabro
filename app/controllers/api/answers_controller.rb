class Api::AnswersController < ApplicationController
  def index
    @answers = Answer.all
    render json: @answers.map { |a|
      {
        id: a.user.id,
          info:{
            name: a.user.name,
            city: a.user.city,
            question: a.question.name,
            answer: a.answer,
            auth: a.user.auth_id
          }
      }
    }
  end

  def match
    @user = User.order("RANDOM()").first
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
