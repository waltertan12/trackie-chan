class StaticPagesController < ApplicationController
  def index
    render :index
  end

  def sign_in_sign_up
    render :sign_in_sign_up
  end
end
