class Answer < ApplicationRecord
  belongs_to :user
  belongs_to :question
  validates :user, presence: true
  validates :question, presence: true
  validates :answer, presence: true

  delegate :kind, to: :question, prefix: true

  # delegate is the same as below
  delegate :name, to: :question, prefix: true
  # def question_name
  #   question.name
  # end
end
