class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.find_by_credentials(params[:user][:email], 
                                    params[:user][:password])
    if user
      log_in_user!(user)
      redirect_to root_url
    else
      flash.now[:danger] = "Email / password combination is incorrect"
      render :new
    end
  end

  def guest
    guest_user = User.new(
      username: "guest_account",
      email: "guest_account#{rand(999999999999999)}@sesamestreet.com",
      password_digest: BCrypt::Password.create("password")
    )
    until guest_user.save
      guest_user.email = "guest_account#{rand(999999999999999)}@sesamestreet.com"
    end

    log_in_user!(guest_user)
    redirect_to root_url
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    render json: {}
  end
end
