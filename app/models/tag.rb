class Tag < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  has_many :taggings
  has_many :tracks, through: :taggings, source: :taggable, source_type: Track 
  has_many :playlists, through: :taggings, source: :taggable, source_type: Playlist 
end
