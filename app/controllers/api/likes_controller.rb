class Api::LikesController < ApplicationController
  def user_index
    @likes = Liking.includes(:likable, {likable: :user}).where(user_id: params[:user_id])
    render :index
  end
end
