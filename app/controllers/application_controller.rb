class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?
  # before_filter :set_access_control_headers

  # def set_access_control_headers
  #   headers['Access-Control-Allow-Origin'] = '*'
  # end  

  def log_in_user!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def ensure_user_logged_in
    unless logged_in?
      flash[:danger] = "Please log in or sign up"
      render json: "Not logged in error", status: 422
    end
  end

  def admin_user?
    unless current_user.admin?
      flash[:danger] = "You are not an admin. Don't do that."
      redirect_to root_url
    end
  end
end
