class Track < ActiveRecord::Base
  validates :title, :user_id, :track_url, presence: true
  validates :private, inclusion: { in: [true, false] }
  validates :track_url, presence: true, allow_nil: true
  
  before_save :ensure_image_url

  belongs_to :user
  has_many :comments

  def ensure_image_url
    self.image_url ||= User.find(self.user_id).image_url if self.new_record?
  end
end
