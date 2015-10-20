class Api::PlaylistsController < ApplicationController
  def show
    @playlist = Playlist.includes(:likes, :tracks, :user).find(params[:id])
    render :show
  end

  def add_track_to_playlist
    @playlisting = Playlisting.new(track_id: params[:track_id],
                                    playlist_id: params[:playlist_id])
    if @playlisting.save
      @playlist = Playlist.find(params[:playlist_id])
      render :show
    else
      render json: @playlisting.error.full_messages
    end
  end

  def remove_track_from_playlist
    @playlisting = Playlisting.find(track_id: params[:track_id],
                                    playlist_id: params[:playlist_id])
    if @playlisting.destroy
      @playlist = Playlist.find(params[:playlist_id])
      render :show
    else
      render json: @playlisting.error.full_messages
    end
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user_id = current_user.id

    if @playlist.save
      add_tags(params[:tags], @playlist.id)
      add_track(@playlist.id, params[:track_id])

      render :show
    else
      render json: @playlist.errors.full_messages
    end
  end

  def user_playlists
    @playlists = Playlist.where(user_id: params[:user_id])
    render :user_playlists
  end

  def update
    @playlisting = Playlisting.new(track_id: params[:track_id], 
                                   playlist_id: params[:playlist_id])
    if @playlisting.save
      @playlist = Playlist.find(params[:playlist_id])
      render :update
    else
      render json: @playlisting.errors.full_messages
    end
  end

  private
  def playlist_params
    params.require(:playlist).permit(
      :title, 
      :description
    )
  end

  def add_tags(tag_array, playlist_id)
    tag_array.each do |tag_name|
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
  end

  def add_track(playlist_id, track_id)
    if track_id
      Playlisting.create(playlist_id: playlist_id, track_id: track_id)
    end
  end
end
