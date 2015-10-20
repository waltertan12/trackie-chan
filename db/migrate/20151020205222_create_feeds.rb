class CreateFeeds < ActiveRecord::Migration
  def change
    create_table :feeds do |t|
      t.integer :user_id, null: false, index: true
      t.integer :source_id, null: false, index: true
      t.string :source_type, null: false, index: true
      t.float :rank, default: 0

      t.timestamps null: false
    end
    add_index :feeds, [:user_id, :source_id, :source_type], unique: true
  end
end
