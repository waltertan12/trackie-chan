class CreatePlaylists < ActiveRecord::Migration
  def change
    create_table :playlists do |t|
      t.integer :user_id, null: false, index: true
      t.string :title, null: false, index: true
      t.text :description
      t.string :image_url

      t.timestamps null: false
    end
    add_index :playlists, [:user_id, :title], unique: true
  end
end
