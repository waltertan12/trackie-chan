class Tag < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  has_many :taggings
  # has_many :tagged_things, through: :taggings, source: :taggable
  has_many :tracks, through: :taggings, source: :taggable, source_type: Track
  has_many :playlists, through: :taggings, source: :taggable, source_type: Playlist
  def tagged_things
    tracks + playlists
  end
end
