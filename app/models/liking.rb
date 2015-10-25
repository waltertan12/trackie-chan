class Liking < ActiveRecord::Base
  validates :user_id, :likable_id, :likable_type, presence: true
  validates :user_id, uniqueness: { scope: [:likable_id, :likable_type] }

  belongs_to :likable, 
    polymorphic: true, 
    foreign_key: :likable_id, 
    primary_key: :id
  belongs_to :user

  after_save do |like|
    feed = Feed.includes(source: :likes,).find_by(source_id: like.likable_id, 
                        source_type: like.likable_type)

    if feed
      rank = like.likable.user.followers.count + 
             like.likable.likes.count

      feed.update(updated_at: track.updated_at, rank: rank)
    end
  end
end
