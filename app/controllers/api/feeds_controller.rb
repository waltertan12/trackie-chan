class Api::FeedsController < ApplicationController
  FEED_LIMIT = 10

  def dashboard_feed
    ids = current_user.following.pluck(:id)

    @feed = Feed.includes(:user, :source, {source: :tags}, {source: :likes})
                .where(user_id: ids)
                .order(updated_at: :desc)
                .limit(FEED_LIMIT)
    render :feed
  end

  def explore_feed
    @feed = Feed.includes(
                  :user,
                  {user: :tracks},
                  :source, 
                  {source: :tags},
                  {source: :likes}
                )
                .where(
                  'updated_at >= :five_days_ago',
                  :five_days_ago  => Time.now - 5.days
                )
                .all
                .order(rank: :desc)
                .limit(FEED_LIMIT)
    render :feed
  end
end