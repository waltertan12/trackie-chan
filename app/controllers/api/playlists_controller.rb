class Api::PlaylistsController < ApplicationController
  def show
    @playlist = Playlist.includes(:likes, :tracks, :user).find(params[:id])
    render :show
  end
end
