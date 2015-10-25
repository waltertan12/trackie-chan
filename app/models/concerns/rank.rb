require 'active_support/concern'

module FeedRank
  extend ActiveSupport::Concern

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