class StaticPagesController < ApplicationController
  def index
    if current_user
      
    else
      render :index
    end
  end
end
