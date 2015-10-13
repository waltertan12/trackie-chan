class UsersController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      log_in_user!(@user)
      flash[:success] = "Welcome, #{@user.user_name}"
      redirect_to root_url
    else
      flash.now[:danger] = @user.errors.full_messages
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(
      :username, 
      :email, 
      :password, 
      :password_confirmation
    )
  end
end
