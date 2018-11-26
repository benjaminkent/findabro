class Api::ThumbsController < ApplicationController
  def up
    render json: up
  end

end

# rails logger debugger
# Rails.logger.debug "Woot!"
