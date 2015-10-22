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
      @results = User.includes(:tracks, 
                          :followers, 
                          :following, 
                          {tracks: :tags}, 
                          :likings)
                     .where("lower(username) ~ ?", query)
    when "tracks"
      @results = Track.includes(
                        :user, 
                        :tags, 
                        :likes, 
                        {likes: :user}, 
                        :comments
                      ).where("lower(title) ~ ?", query)

    when "playlists"
      @results = Playlist.includes(
                   :likes, 
                   :tracks, 
                   {tracks: :tags}, 
                   :user,
                   {user: :likings},
                   :tags
                 ).where("title ~ ?", query)
    else
      tag_id = Tag.where("lower(name) ~ ?", query).first
      @results = Tagging.where(tag_id: tag_id).includes(:taggable)
                        .map { |tagging| tagging.taggable } +
                 User.includes(:tracks, 
                          :followers, 
                          :following, 
                          {tracks: :tags}, 
                          :likings)
                     .where("lower(username) ~ ?", query) +
                 Track.includes(
                        :user, 
                        :tags, 
                        :likes, 
                        {likes: :user}, 
                        :comments
                      ).where("lower(title) ~ ?", query) + 
                 Playlist.includes(
                   :likes, 
                   :tracks, 
                   {tracks: :tags}, 
                   :user,
                   {user: :likings},
                   :tags
                 ).where("lower(title) ~ ?", query)

      @results.uniq!
    end
    render :search
  end
end
