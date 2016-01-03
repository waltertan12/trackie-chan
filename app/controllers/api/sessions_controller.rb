class Api::SessionsController < ApplicationController
  def create
    p params
    @user = User.find_by_credentials(params[:user][:email], 
                                     params[:user][:password])
    if @user
      log_in_user!(@user)
      render :show
    else
      render json: @user.errors.full_messages
    end
  end
end