class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.all
        if @comments
          render :index
        else
          render json: @comments.errors.full_messages, status: 422
        end
  end

  def show
     @comment = Comment.find(params[:id])
    if @comment
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def create
    @comment = Comment.create(commentParams)
     if @comment.save!
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if (@comment.user_id === current_user.id && @comment.update(commentParams))
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
     @comment = Comment.find(params[:id])
    if (@comment.user_id === current_user.id && @comment)
      @comment.delete
      render json: @comment, status: 200
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def commentParams
    params.require(:comment).permit(:body, :user_id, :post_user_id, :post_id, :created_at)
  end
end
