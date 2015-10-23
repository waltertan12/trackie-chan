Feed.includes(:user, {user: :followers}, {user: :following}).all.feed_items.each do |feed_item|
  source = feed_item.source
  rank = source.user.followers.count + source.likes.count
  feed_item.update(updated_at: source.updated_at, rank: rank)
end