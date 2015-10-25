class Liking < ActiveRecord::Base
  validates :user_id, :likable_id, :likable_type, presence: true
  validates :user_id, uniqueness: { scope: [:likable_id, :likable_type] }

  belongs_to :likable, 
    polymorphic: true, 
    foreign_key: :likable_id, 
    primary_key: :id
  belongs_to :user

  after_save do |like|
    feed = Feed.includes(user: :followers, source: :likes,)
               .find_by(source_id: like.likable_id, 
                        source_type: like.likable_type)

    if feed
      update_rank(feed)
    end
  end

  def update_rank(feed)
    source = feed.source

    rank = feed.source.user.followers.count

    now = Time.now

    total_time = now - source.created_at

    source.likes.each do |like|
      like_time = now - like.created_at
      rank += (1 - (like_time / total_time))
      p rank
    end

    feed.update(rank: rank)
  end
end
