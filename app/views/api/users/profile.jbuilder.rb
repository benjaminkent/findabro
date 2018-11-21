json.profile do
  json.array! @user.answers do |answer|
    json.extract! answer, :id, :answer
    json.user do
      json.extract! answer.user, :name, :avatar_url
    end
  end
end