class CreateThumbs < ActiveRecord::Migration[5.2]
  def change
    create_table :thumbs do |t|
      t.references :thumber, foreign_key: { to_table: :users}
      t.references :thumbee, foreign_key: { to_table: :users}
      t.boolean :is_up
      t.timestamps
    end
  end
end
