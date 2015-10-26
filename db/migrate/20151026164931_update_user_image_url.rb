class UpdateUserImageUrl < ActiveRecord::Migration
  def change
    change_column_default :users, :image_url, nil
  end
end
