# render json: {
#   id: @user.id,
#   answers: @user.answers.includes(:question),
#   name: @user.name,
#   city: @user.city,
# }

json.(@user, :id, :name, :city)

json.answers @user.answers do |answer|
  json.answer answer.answer
  json.question answer.question.name
end