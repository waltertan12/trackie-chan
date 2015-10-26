class Api::UsersController < ApplicationController
  before_action :ensure_user_logged_in, except: [:show]

  def show
    @user = User.includes(:tracks, 
                          :followers, 
                          :following, 
                          {tracks: :tags}, 
                          :likings).find(params[:id])
    render :show
  end

  def edit
    @user = User.find(params[:id])
    render :show
  end

  def update
    @user = current_user
    p "Password confirmation"
    p params[:user][:password_confirmation].length
    p params[:user][:password_confirmation]

    p current_user.is_password?(params[:user][:password_confirmation])

    p "Password"
    p params[:user][:password].length
    p params[:user][:password]

    if params[:user][:password_confirmation].length > 0 &&
       params[:user][:password].length > 0 &&
       @user.is_password?(params[:password_confirmation])

      @user.password = params[:user][:password]
    end

    if @user.update(user_update_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.includes(:tracks, {tracks: :tags}, :likings)
                .find(params[:id])
    if @user.destroy
      flash[:success] = "Bye forever..."
      redirect_to root_url
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(
      :username, 
      :email,
      :image_url,
      :password, 
      :password_confirmation
    )
  end

  def user_update_params
    if params[:user][:password].length > 7
      if current_user.is_password?(params[:user][:password_confirmation])
        puts "Is it using the correct params?"
        user_params
      else
        nil
      end
    else
      params.require(:user).permit(:username, :email, :image_url)
    end
  end
end
