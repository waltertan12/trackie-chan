class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false, 
                          index: true
      t.string :email,    null: false, 
                          index: true, 
                          unique: true
      t.string :password_digest, null: false 
      t.string :session_token,   null: false, 
                                 index: true, 
                                 unique: true
      t.string :image_url, null: false, 
                           default: "http://i.imgur.com/AZuwasa.jpg?1/"

      t.timestamps null: false
    end
  end
end
