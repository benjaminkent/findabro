class Api::UsersController < ApplicationController
  before_action :authenticate!

  def index
    @users = User.all
    render json: @users
  end

  def show
    @users = User.find(params[:id])
    render json: @users
  end

  def profile
    @user = current_user
  end

  def matches
    own_thumbs = current_user.thumbs_made.where(is_up: true).map(&:thumbee_id)
    @match_users = Thumb.where(thumbee: current_user, thumber_id: own_thumbs).map(&:thumber)
    render json: @match_users
  end
end
