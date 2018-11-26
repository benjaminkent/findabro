class Api::ThumbsController < ApplicationController
  def up
    @thumb = Thumb.find_or_initialize_by(thumb_params)
    @thumb.is_up = true
    @thumb.save!
    render json: @thumb
  end

  def down
    @thumb = Thumb.find_or_initialize_by(thumb_params)
    @thumb.is_up = false
    @thumb.save!
    render json: "down"
  end

  private

  def thumb_params
    params.require("thumb").permit(:thumber_id, :thumbee_id)
  end
end

# rails logger debugger
# Rails.logger.debug "Woot!"
