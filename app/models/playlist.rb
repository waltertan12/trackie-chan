class Playlist < ActiveRecord::Base
  validates :user_id, :title, :image_url, presence: true
  validates :user_id, uniqueness: { scope: :title }
  
  before_save :ensure_image_url

  belongs_to :user

  def ensure_image_url
    self.image_url ||= User.find(self.user_id).image_url if self.new_record?
  end
end
