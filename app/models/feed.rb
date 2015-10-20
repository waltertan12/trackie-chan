class Feed < ActiveRecord::Base
  validates :user_id, :source_id, :source_type, presence: true
  validates :source_id, uniqueness: { scope: :source_type }
  belongs_to :source, polymorphic: true
  belongs_to :user
end
