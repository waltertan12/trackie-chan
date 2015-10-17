class Tag < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  has_many :taggings
  has_many :tracks, through: :taggings, source: :taggable, source_type: Track 
end
