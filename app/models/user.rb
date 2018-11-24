class User < ApplicationRecord
  has_many :answers, dependent: :destroy
  
  validates :name, presence: true

  has_many :thumbs_made, dependent: :destroy, class_name: "Thumb", inverse_of: :thumber, foreign_key: :thumber_id
  has_many :thumbs_received, dependent: :destroy, class_name: "Thumb", inverse_of: :thumbee, foreign_key: :thumbee_id

  def self.from_auth_hash(payload)
    user = User.find_or_create_by(email: payload["email"]) do |user|
      user.name = payload["given_name"]
      user.avatar_url = payload["picture"]
      user.email = payload["email"]
    end
    
    user.update(avatar_url: payload["picture"], name: payload["given_name"])

    user
  end
end
