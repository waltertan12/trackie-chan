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
      render "static_pages/sign_in"
    end
  end

  def guest
    guest_user = User.new(
      username: "guest_account#{Time.now.to_i}",
      email: "guest_account#{Time.now.to_i}#{rand(100)}@sesamestreet.com",
      password_digest: BCrypt::Password.create("password")
    )

    until guest_user.save
      guest_user.email = "guest_account#{Time.now.to_i}#{rand(100)}@sesamestreet.com"
    end

    (7..39).to_a.sample(5).each do |id| 
      guest_user.following << User.find(id)
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
