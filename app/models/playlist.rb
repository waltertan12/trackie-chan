class Playlist < ActiveRecord::Base
  validates :user_id, :title, presence: true
  validates :user_id, uniqueness: { scope: [:title] }
  
  before_save :ensure_image_url

  belongs_to :user
  has_many :playlistings
  has_many :tracks,
    through: :playlistings,
    source: :track
  has_many :likes,
    as: :likable,
    class_name: "Liking",
    foreign_key: :likable_id,
    primary_key: :id,
    dependent: :destroy
  has_many :taggings, as: :taggable
  has_many :tags, through: :taggings

  def ensure_image_url
    self.image_url ||= User.find(self.user_id).image_url if self.new_record?
  end
end
