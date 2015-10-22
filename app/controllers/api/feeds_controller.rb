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
                ).all.limit(FEED_LIMIT)
    render :feed
  end
end
