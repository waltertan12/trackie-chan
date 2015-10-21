class StaticPagesController < ApplicationController
  def index
    render :index
  end

  def sign_in
    render :sign_in
  end

  def sign_up
    render :sign_up
  end
end
