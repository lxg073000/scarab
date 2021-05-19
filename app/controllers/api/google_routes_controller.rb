class Api::GoogleRoutesController < ApplicationController
  # def index
  #   @gRoutes = GoogleRoute.all
  #   if @gRoutes
  #     render "api/google_routes/index"
  #   else
  #     render json: @gRoutes.errors.full_messages, status: 422
  #   end
  # end

  def index
    if params[:user_id]
      @gRoutes = GoogleRoute.where({user_id: params[:user_id]})
        if @gRoutes
          render "api/google_routes/index"
        else
          render json: @gRoutes.errors.full_messages, status: 422
        end
    else 
      @gRoutes = GoogleRoute.all
      if @gRoutes
        render "api/google_routes/index"
      else
        render json: @gRoutes.errors.full_messages, status: 422
      end
    end 
  end
  
  def create
    @gRoute = GoogleRoute.create(routeParams)

    if @gRoute.save!
      render :show
    else
      render json: @gRoute.errors.full_messages, status: 422
    end
  end

  def update
    @gRoute = GoogleRoute.find(params[:id])
    if (@gRoute.user_id === current_user.id && @gRoute.update(routeParams))
      render :show
    else
      render json: @gRoute.errors.full_messages, status: 422
    end
  end

  def show
    @gRoute = GoogleRoute.find(params[:id])
    if @gRoute
      render "api/google_routes/show"
    else
      render json: @gRoute.errors.full_messages, status: 422
    end
  end

  def staticMap
     
     
  end

  def destroy
    @gRoute = GoogleRoute.find(params[:id])
    if (@gRoute.user_id === current_user.id && @gRoute)
      @gRoute.delete
      render json: @gRoute, status: 200
    else
      render json: @gRoute.errors.full_messages, status: 422
    end
  end

  private

  def routeParams
    params.require(:google_route).permit(:id, :user_id, :name, :description, :duration, :distance, :travelMode, :center, :zoom, :waypoints => [])
  end

end