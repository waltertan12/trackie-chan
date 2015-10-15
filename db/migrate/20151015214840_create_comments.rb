class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :user_id, null: false, index: true
      t.integer :track_id, null: false, index: true
      t.integer :parent_comment_id
      
      t.timestamps null: false
    end
  end
end
