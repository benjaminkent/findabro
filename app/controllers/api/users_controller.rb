class Api::UsersController < ApplicationController
  # before_action :authenticate!

  def index
    @users = User.all
    render json: @users
  end

  def show
    @users = User.find(params[:id])
    render json: @users
  end

  def profile
    render json: current_user
  end
end
