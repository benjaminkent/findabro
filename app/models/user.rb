class User < ApplicationRecord
  has_many :answers
  validates :name, presence: true
  validates :slug, presence: true
  validates :city, presence: true
end
