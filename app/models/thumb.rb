class Thumb < ApplicationRecord
  belongs_to :thumbee, class_name: "User"
  belongs_to :thumber, class_name: "User"
end
