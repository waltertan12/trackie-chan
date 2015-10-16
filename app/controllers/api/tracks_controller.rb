class Api::TracksController < ApplicationController
  def index
    @tracks = Track.includes(:user).where(user_id: params[:user_id])
    render :index
  end

  def create
    @track = Track.new(track_params)
    @track.user_id = current_user.id
    
    if @track.save
      render :create
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def edit
    render :edit
  end

  def update
    @track = Track.find(params[:id])

    if @track.save
      render json: @track
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def show
    @track = Track.includes(:comments).find(params[:id])

    if @track
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.find(params[:id])

    if @track.destroy
      render json: @track
    else
      render json: @track.errors.full_messages
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
