class Api::BuggoutsController < ApplicationController

  def index
    @buggouts = Buggout.where({user_id: current_user.id})
        if @buggouts
          render :index
        else
          render json: @buggouts.errors.full_messages, status: 422
        end
  end

  def show
     @buggout = Buggout.find(params[:id])
    if @buggout
      render :show
    else
      render json: @buggout.errors.full_messages, status: 422
    end
  end

  def create
    @buggout = Buggout.create(buggoutParams)
     if @buggout.save!
      render :show
    else
      render json: @buggout.errors.full_messages, status: 422
    end
  end

  def update
    @buggout = Buggout.find(params[:id])
    if (@buggout.user_id === current_user.id && @buggout.update(buggoutParams))
      render :show
    else
      render json: @buggout.errors.full_messages, status: 422
    end
  end

  def destroy
     @buggout = Buggout.find(params[:id])
    if (@buggout.user_id === current_user.id && @gRoute)
      @buggout.delete
      render json: @buggout, status: 200
    else
      render json: @buggout.errors.full_messages, status: 422
    end
  end

  def buggoutParams
    params.require(:buggout).permit(:google_route_id, :user_id, :title, :description, :date_completed, :start_time, :end_time)
  end
end
