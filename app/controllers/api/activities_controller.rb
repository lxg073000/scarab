class Api::ActivitiesController < ApplicationController

  def index
    @activities = Activity.where({user_id: current_user.id})
        if @activities
          render :index
        else
          render json: @activities.errors.full_messages, status: 422
        end
  end

  def show
     @activity = Activity.find(params[:id])
    if @activity
      render :show
    else
      render json: @activity.errors.full_messages, status: 422
    end
  end

  def create
    @activity = Activity.create(activityParams)
     if @activity.save!
      render :show
    else
      render json: @activity.errors.full_messages, status: 422
    end
  end

  def update
    @activity = Activity.find(params[:id])
    if (@activity.user_id === current_user.id && @activity.update(activityParams))
      render :show
    else
      render json: @activity.errors.full_messages, status: 422
    end
  end

  def destroy
     @activity = Activity.find(params[:id])
    if (@activity.user_id === current_user.id && @activity)
      @activity.delete
      render json: @activity, status: 200
    else
      render json: @activity.errors.full_messages, status: 422
    end
  end

  def activityParams
    params.require(:activity).permit(:google_route_id, :user_id, :title, :description, :travelMode, :distance, :date_completed, :start_time, :pace, :created_at, :duration => [])
  end
end
