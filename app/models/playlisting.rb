class Playlisting < ActiveRecord::Base
  validates :track_id, presence: true, uniqueness: { scope: :playlist_id}
  validates :playlist_id, presence: true

  belongs_to :track
  belongs_to :playlist
end