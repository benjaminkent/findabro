json.extract! user, :id, :name, :slug, :city, :auth_id, :created_at, :updated_at
json.url user_url(user, format: :json)
