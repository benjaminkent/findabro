class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.all
    render json: @questions
  end

  def show
    @questions = Question.find(params[:id])
    render json: @questions
  end
end
