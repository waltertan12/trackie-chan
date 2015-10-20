class Api::PlaylistsController < ApplicationController
  def show
    @playlist = Playlist.includes(:likes, :tracks, :user).find(params[:id])
    render :show
  end

  def user_playlists
    @playlists = Playlist.where(user_id: params[:user_id])
    render :user_playlists
  end

  def update
    # @track = Track.find(params[:track_id])
    @playlisting = Playlisting.new(track_id: params[:track_id], 
                                   playlist_id: params[:playlist_id])
    if @playlisting.save
      @playlist = Playlist.find(params[:playlist_id])
      render :update
    else
      render json: @playlisting.errors.full_messages
    end
  end
end
