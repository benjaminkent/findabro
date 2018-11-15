class User < ApplicationRecord
  validates :name, presence: true
  validates :slug, presence: true
  validates :city, presence: true
end
