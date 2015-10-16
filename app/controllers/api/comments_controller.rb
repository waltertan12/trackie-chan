class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.includes(:user).where(track_id: params[:track_id])
    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render :create
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def edit
    
  end

  def update
    
  end

  def destroy
    @comment = Comment.find(params[:comment_id])

    if @comment.destroy
      render json: @comment
    else
      render json: @comment.errors.full_messages
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :track_id, :parent_comment_id)
  end
end
