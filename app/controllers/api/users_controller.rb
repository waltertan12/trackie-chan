class Api::UsersController < ApplicationController
  def show
    @user = User.includes(:tracks, :likings).find(params[:id])
    render :show
  end

  def edit
    @user = User.find(params[:id])
    render :edit
  end

  def update
    @user = current_user

    if @user.update(user_update_params)
      render :edit
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.find(params[:id])
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
    if params[:password]
      if current_user.is_password?(params[:password_confirmation])
        user_params
      else
        # nope
      end
    else
      params.require(:user).permit(:username, :email, :image_url)
    end
  end
end
