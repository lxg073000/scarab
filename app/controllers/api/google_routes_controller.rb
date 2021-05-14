class Api::GoogleRoutesController < ApplicationController
  def index
    @gRoutes = GoogleRoute.all
    if @gRoutes
      render "api/google_routes/index"
    else
      render json: @gRoutes.errors.full_messages, status: 422
    end
  end
  
  def create
    @gRoute = GoogleRoute.create(routeParams)

    if @gRoute.save!
      render :show
    else
      puts @gRoute.errors.full_messages, status: 422
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
    if @gRoute
      @gRoute.delete
      render json: @gRoute, status: 200
    else
      render json: @gRoute.errors.full_messages, status: 422
    end
  end

  private

  def routeParams
    params.require(:google_route).permit(:id, :user_id, :name, :origin, :destination, :travelMode, :mapOptions=> [], :waypoints => [])
  end

end