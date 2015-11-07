class Api::SearchesController < ApplicationController
  def search
    query = params[:query]
    query.downcase!

    case params[:options]
    when "tags"
      tag_id = Tag.where("lower(name) ~ ?", query).first

      @results = Tagging.where(tag_id: tag_id).includes(:taggable)
                        .map { |tagging| tagging.taggable }
    when "users"
      @results = User.includes(:followers)
                     .joins("LEFT OUTER JOIN followings ON users.id = followings.followed_id")
                     .group("users.id")
                     .order("count(users.id) desc")
                     .where("lower(username) ~ ?", query)
    when "tracks"
      @results = Track.includes(:user)
                      .joins("LEFT OUTER JOIN likings ON likings.likable_id = tracks.id")
                      .where("lower(title) ~ ?", query)
                      .group("tracks.id")
                      .order("count(tracks.id) desc")
                      # .where("likings.likable_type = 'Track'")

    when "playlists"
      @results = Playlist.includes(:tracks, :user, :likes)
                         .joins("LEFT OUTER JOIN likings ON likings.likable_id = playlists.id")
                         .group("playlists.id")
                         .order("count(playlists.id) desc")
                         .where("lower(title) ~ ?", query)
                         # .where("likings.likable_type = 'Playlist'")
    else
      tag_id = Tag.where("lower(name) ~ ?", query).first
      @results = Tagging.where(tag_id: tag_id).includes(:taggable)
                        .map { |tagging| tagging.taggable } +
                 User.where("lower(username) ~ ?", query) +
                 Track.includes(
                        :user
                      ).where("lower(title) ~ ?", query) + 
                 Playlist.includes(
                   :tracks, 
                   :user,
                 ).where("title ~ ?", query)

      @results.uniq!
    end
    render :search
  end
end
