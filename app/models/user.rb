class User < ApplicationRecord
  has_many :answers
  validates :name, presence: true
  validates :slug, presence: true
  validates :city, presence: true

  has_many :thumbs_made, class_name: "Thumb", inverse_of: :thumber, foreign_key: :thumber_id
  has_many :thumbs_received, class_name: "Thumb", inverse_of: :thumbee, foreign_key: :thumbee_id
  
end
