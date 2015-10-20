class Api::FeedsController < ApplicationController
  FEED_LIMIT = 10

  def dashboard_feed
    ids = current_user.following.pluck(:id)

    @feed = Feed.includes(:user, :source)
                .where(user_id: ids)
                .order(updated_at: :desc)
                .limit(FEED_LIMIT)
    render :feed
  end

  def explore_feed
    @feed = Feed.includes(:user, :source).all.limit(FEED_LIMIT)
    render :feed
  end
end
