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
    time = Time.now.to_i
    @user = User.new(
      username: "guest_account#{time}",
      email: "guest_account#{time}#{rand(100)}@sesamestreet.com",
      password: "password"
    )

    until @user.save
      time = Time.now.to_i
      @user.username = "guest_account#{time}"
      @user.email = "guest_account#{time}#{rand(100)}@sesamestreet.com"
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