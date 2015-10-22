class Api::PlaylistsController < ApplicationController
  before_action :ensure_user_logged_in, except: [:show, :user_playlists]

  def show
    @playlist = Playlist.includes(
                  :likes, 
                  :tracks, 
                  {tracks: :tags}, 
                  :user,
                  {user: :likings},
                  :tags
                ).find(params[:id])
    render :show
  end

  def add_track_to_playlist
    @playlisting = Playlisting.new(track_id: params[:track_id],
                                    playlist_id: params[:playlist_id])
    @playlist = Playlist.find(params[:playlist_id])

    if current_user.id == @playlist.user_id && @playlisting.save
      render :show
    else
      render json: @playlisting.error.full_messages, status: 422
    end
  end

  def remove_track_from_playlist
    @playlisting = Playlisting.find(track_id: params[:track_id],
                                    playlist_id: params[:playlist_id])
    @playlist = Playlist.find(params[:playlist_id])

    if current_user.id == @playlist.user_id && @playlisting.destroy
      render :show
    else
      render json: @playlisting.error.full_messages, status: 422
    end
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user_id = current_user.id

    if @playlist.save
      add_tags(params[:tags], @playlist.id) if params[:tags]
      add_track(@playlist.id, params[:track_id]) if params[:track_id]

      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def user_playlists
    @playlists =  Playlist.includes(
                    :likes, 
                    :tracks, 
                    {tracks: :tags}, 
                    :user,
                    {user: :likings},
                    :tags
                  ).where(user_id: params[:user_id])
    render :user_playlists
  end

  def update
    @playlist = Playlist.includes(
                          :likes, 
                          :tracks, 
                          {tracks: :tags}, 
                          :user,
                          {user: :likings},
                          :tags
                        ).find(params[:id])

    if current_user.id == @playlist.user_id && 
       @playlist.update(playlist_params)

      if params[:playlist][:tags] && 
         @playlist.tags.pluck(:name) != params[:playlist][:tags]

        update_tags(@playlist.tags.pluck(:name), 
                    params[:playlist][:tags], 
                    @playlist.id)

        @playlist = Playlist.includes(:tags, {tags: :taggings})
                            .find(params[:id])
      end

      render :show
    else
      if current_user.id != @playlist.user_id
        render json: ["This isn't your playlist"], status: 422
      else
        render json: @playlist.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])

    if current_user.id == @playlist.user_id && @playlist.destroy
      render json: {id: @playlist.id, user_id: @playlist.user_id}
    else
      if current_user.id != @playlist.user_id
        render json: ["This isn't your playlist"], status: 422
      else
        render json: @playlist.errors.full_messages, status: 422
      end
    end
  end

  private
  def playlist_params
    params.require(:playlist).permit(
      :title, 
      :description
    )
  end

  def update_tags(current_tags, new_tags, playlist_id)
    # Check if we need to remove tags
    current_tags.each do |tag_name|
      unless new_tags.include?(tag_name)
        tag = Tag.find_by(name: tag_name)
        Tagging.find_by(tag_id: tag.id).destroy
      end
    end

    # Check if we need to add tags
    new_tags.each do |tag_name|
      unless current_tags.include?(tag_name)
        add_tag(tag_name, playlist_id)
      end
    end
  end

  def add_tags(tag_array, playlist_id)
    tag_array.each do |tag_name|
      add_tag(tag_name, playlist_id)
    end
  end

  def add_tag(tag_name, playlist_id)
    if Tag.exists?(name: tag_name)
      tag = Tag.find_by(name: tag_name)
    else
      tag = Tag.create(name: tag_name)
    end

    Tagging.create(
        tag_id: tag.id, 
        taggable_id: playlist_id,
        taggable_type: "Playlist" 
    )
  end

  def add_track(playlist_id, track_id)
    Playlisting.create(playlist_id: playlist_id, track_id: track_id)
  end
end
