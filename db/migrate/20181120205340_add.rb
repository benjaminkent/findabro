class Add < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :avatar_url, :string
    add_column :users, :email, :string
    remove_column :users, :auth_id
  end
end
