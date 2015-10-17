class Tagging < ActiveRecord::Base

  validates :tag_id, :taggable_id, :taggable_type, presence: true
  validates :tag_id, uniqueness: { scope: [:taggable_type, :taggable_id] }

  belongs_to :tag
  belongs_to :taggable, polymorphic: true
end
