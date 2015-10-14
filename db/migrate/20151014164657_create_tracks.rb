class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.text :description
      t.integer :user_id, null: false, index: true
      t.string :track_url, null: false
      t.string :image_url
      t.boolean :private, null: false, default: false

      t.timestamps null: false
    end
  end
end
