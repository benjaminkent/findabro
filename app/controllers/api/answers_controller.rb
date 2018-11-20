class Api::AnswersController < ApplicationController
  before_action :authenticate!, only: [:create]

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

  #   { q: 1, a: "Yes, I do in fact love cats." },

  def create
    answer = curent_user.answers.find_or_initialize_by(:question_id, params[:q])
    answer.answer = params[:a]
    answer.save!

    render json: answer
  end
end
