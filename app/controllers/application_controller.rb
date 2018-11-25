class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  def fallback_index_html
    if Rails.env.production?
      render :file => "public/index.html", layout: false
    else
      redirect_to "/admin"
    end
  end

  private

  def authenticate!
    redirect_to :root unless current_user
  end

  def current_user
    return nil if request.headers["Authorization"].blank?
    token = request.headers["Authorization"].split(" ").last
    return nil if token.blank?
    begin
      payload, header = *JSONWebToken.verify(token)
      User.from_auth_hash(payload)
    rescue JWT::VerificationError
      nil
    end
  end
end
