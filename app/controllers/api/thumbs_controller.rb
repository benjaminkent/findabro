class Api::ThumbsController < ApplicationController
  def up
    render json: up
  end

  def down
    render json:down
  end

end

# rails logger debugger
# Rails.logger.debug "Woot!"
