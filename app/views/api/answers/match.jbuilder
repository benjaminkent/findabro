json.(@user, :id, :name, :city)

json.answers @user.answers do |answer|
  json.answer answer.answer
  json.question do
    json.name answer.question_name
    json.kind answer.question_kind
  end
end