class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :taggable_id, index: true
      t.string :taggable_type, index: true
      t.integer :tag_id, index: true
      t.timestamps null: false
    end
    add_index :taggings, 
              [:taggable_type, :taggable_id, :tag_id], 
              unique: true
  end
end
