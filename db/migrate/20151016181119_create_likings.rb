class CreateLikings < ActiveRecord::Migration
  def change
    create_table :likings do |t|
      t.integer :user_id, null: false, index: true
      t.integer :likable_id, null: false, index: true
      t.string :likable_type, null: false, index: true
      
      t.timestamps null: false
    end
    add_index :likings, [:user_id, :likable_id, :likable_type] ,unique: true
  end
end
