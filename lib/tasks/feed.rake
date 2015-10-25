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

namespace :feed do
  desc "Update feed rank"
  task update: :environment do
    Feed.includes(user: :followers, source: :likes).each do |feed|
      update_rank(feed)
    end
  end
end