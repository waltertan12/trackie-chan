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

  def guest
    @user = User.new(
      username: "guest_account#{Time.now.to_i}",
      email: "guest_account#{Time.now.to_i}#{rand(100)}@sesamestreet.com",
      password_digest: BCrypt::Password.create("password")
    )

    until @user.save
      @user.email = "guest_account#{Time.now.to_i}#{rand(100)}@sesamestreet.com"
    end

    (7..39).to_a.sample(5).each do |id| 
      @user.following << User.find(id)
    end

    log_in_user!(@user)
    render :show
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    render json: {lol: 'haha'}
  end
end