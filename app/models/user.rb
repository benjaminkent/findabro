class User < ApplicationRecord
  has_many :answers
  validates :name, presence: true
  validates :slug, presence: true
  validates :city, presence: true

  has_many :thumbs_made, class_name: "Thumb", inverse_of: :thumber, foreign_key: :thumber_id
  has_many :thumbs_received, class_name: "Thumb", inverse_of: :thumbee, foreign_key: :thumbee_id

  def self.from_auth_hash(payload)
    User.find_or_create_by(email: payload["email"]) do |user|
      user.avatar_url = payload["picture"]
      user.name = payload["given_name"]
    end
  end
end
