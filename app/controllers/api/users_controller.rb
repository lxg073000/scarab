class Api::UsersController < ApplicationController
  def index
    @users = User.all
    puts @users
    
  end

  def show
    @user = User.find(params[:id])

  end

  def create
    @user = User.new(user_params)

    if @user.save
      log_in!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :id, :tutorial_status)
  end
  
end
