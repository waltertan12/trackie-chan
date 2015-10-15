class Api::TracksController < ApplicationController
  def create
    @track = Track.new(track_params)
    @track.user_id = current_user.id
    if @track.save
      render :create
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def show
    @track = Track.find(params[:id])
    if @track
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  private
  def track_params
    params.require(:track).permit(
      :title, 
      :description, 
      :track_url, 
      :image_url,
      :boolean
    )
  end
end
