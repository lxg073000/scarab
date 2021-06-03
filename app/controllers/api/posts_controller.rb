class Api::PostsController < ApplicationController

  def index
    @posts = Post.where({user_id: current_user.id}).order("created_at desc")
        if @posts
          render :index
        else
          render json: @posts.errors.full_messages, status: 422
        end
  end

  def show
     @post = Post.find(params[:id])
    if @post
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def create
    @post = Post.create(postParams)
     if @post.save!
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
    if (@post.user_id === current_user.id && @post.update(postParams))
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
     @post = Post.find(params[:id])
    if (@post.user_id === current_user.id && @post)
      @post.delete
      render json: @post, status: 200
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def postParams
    params.require(:post).permit(:username, :comment_id, :user_id, :title, :body, :like_id => [], :comment_id => [])
  end
end
