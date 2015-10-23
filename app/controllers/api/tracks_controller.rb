class Api::TracksController < ApplicationController
  before_action :ensure_user_logged_in, except: [:show, :index]

  def index
    @tracks = Track.includes(:user, :tags, :likes, {likes: :user}, :comments)
                   .where(user_id: params[:user_id])
    render :index
  end

  def create
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
    @track = Track.includes(:tags, {tags: :taggings}).find(params[:id])

    if current_user.id == @track.user_id && @track.update(track_params)
      if params[:track][:tags] && 
         @track.tags.pluck(:name) != params[:track][:tags]

        update_tags(@track.tags.pluck(:name), 
                    params[:track][:tags], 
                    @track.id)

        @track = Track.includes(:tags, {tags: :taggings}).find(params[:id])
      end
      
      render :show
    else
      if current_user.id != @track.user_id
        render json: ["This isn't your track"], status: 422
      else
        render json: @track.errors.full_messages, status: 422
      end
    end
  end

  def show
    @track = Track.includes(:user, {user: :likings}, :tags, :likes, {likes: :user}, :comments)
                  .find(params[:id])

    if @track
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.includes(:tags).find(params[:id])

    if current_user.id == @track.user_id && @track.destroy
      render json: @track
    else
      if current_user.id != @track.user_id
        render json: ["This isn't your track"], status: 422
      else
        render json: @track.errors.full_messages, status: 422
      end
    end
  end

  private
  def track_params
    params.require(:track).permit(
      :title, 
      :description, 
      :track_url, 
      :image_url,
      :boolean,
    )
  end

  def update_tags(current_tags, new_tags, track_id)
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
        add_tag(tag_name, track_id)
      end
    end
  end

  def add_tags(tag_array, track_id)
    tag_array.each do |tag_name|
      add_tag(tag_name, track_id)
    end
  end

  def add_tag(tag_name, track_id)
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
