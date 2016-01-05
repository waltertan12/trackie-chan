class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], 
                                     params[:user][:password])
    if @user
      log_in_user!(@user)
      render :show
    else
      render json: ['Password and/or email is incorrect'], status: 422
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    render json: {lol: 'haha'}
  end
end