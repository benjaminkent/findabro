json.profile do
  json.(@user, :name, :avatar_url)

  json.answers @user.answers, :id, :answer, :question_name, :question_kind
end