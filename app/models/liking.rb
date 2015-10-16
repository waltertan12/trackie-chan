class Liking < ActiveRecord::Base
  validates :user_id, :likable_id, :likable_type, presence: true
  validates :user_id, uniqueness: { scope: [:likable_id, :likable_type] }

  belongs_to :likable, 
    polymorphic: true, 
    foreign_key: :likable_id, 
    primary_key: :id
  belongs_to :user
end
