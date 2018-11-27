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
    own_thumbs = current_user.thumbs_made.map(&:thumbee_id) << current_user.id
    @user = User.not.where(id: own_thumbs).order("RANDOM()").first
  end

  # def match
  #   own_thumbs = current_user.thumbs_made.where(is_up: true).map(&:thumbee_id)
  #   @user = Thumb.where(thumbee: current_user, thumber_id: own_thumbs).map(&:thumber)
  #   render json: @user
  # end


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

  def create
    answer = Answer.find_or_initialize_by(question_id: params[:q], user_id: current_user.id)

    answer.update(answer: params[:a], user: current_user)

    render json: answer
  end
end
