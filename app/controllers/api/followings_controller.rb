class Api::FollowingsController < ApplicationController
  def create
    current_user.follow(params[:followed_id])
    render json: "Follow successful"
  end

  def destroy
    current_user.unfollow(params[:followed_id])
    render json: "Unfollow successful"
  end
end
