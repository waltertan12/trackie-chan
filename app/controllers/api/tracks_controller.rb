class Api::TracksController < ApplicationController
  def index
    @tracks = Track.includes(:user).where(user_id: params[:user_id])
    render :index
  end

  def create
    debugger
    @track = Track.new(track_params)
    @track.user_id = current_user.id

    if @track.save
      track_id = @track.id
      add_tags(params[:track][:tags], track_id)
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

  def add_tags(tag_array, track_id)
    tag_array.each do |tag_name|
      if Tag.exists?(name: tag_name)
        tag = Tag.find_by(name: tag_name)
      else
        tag = Tag.create(name: tag_name)
      end

      Tagging.create(
          tag_id: tag.id, 
          taggable_id: track_id,
          taggable_type: "Track" 
      )
    end
  end
end
