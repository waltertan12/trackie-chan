class UsersController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      log_in_user!(@user)
      flash[:success] = "Welcome, #{@user.username}"
      redirect_to root_url
    else
      flash.now[:danger] = @user.errors.full_messages
      render "static_pages/sign_up"
    end
  end

  def popular
    all = User.includes(:followers).all.
    all.sort do |user_one, user_two|
      user_one.followers.count <=> user_two.followers.count
    end.take(8)
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
