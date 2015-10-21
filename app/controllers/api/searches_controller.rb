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
      @results = User.where("lower(username) ~ ?", query)
    when "tracks"
      @results = Track.where("lower(title) ~ ?", query)
    when "playlists"
      @results = Playlist.where("title ~ ?", query)
    else
      tag_id = Tag.where("lower(name) ~ ?", query).first
      @results = Tagging.where(tag_id: tag_id).includes(:taggable)
                        .map { |tagging| tagging.taggable } +
                 User.includes(:tracks, :likings, :following, :followers)
                     .where("lower(username) ~ ?", query) +
                 Track.includes(:user, :tags, :likes, :taggings)
                      .where("lower(title) ~ ?", query) + 
                 Playlist.includes(:user, :tags, :likes, :taggings)
                         .where("lower(title) ~ ?", query)

      @results.uniq!
    end
    render :search
  end
end
