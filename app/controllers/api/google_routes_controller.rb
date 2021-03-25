class Api::GoogleRoutesController < ApplicationController
  def create
    @gRoute = Google_Route.new(gRoute_params)

    if @gRoute.save
      render "api/google_routes/show"
    else
      render json: @gRoute.errors.full_messages, status: 422
    end
  end

  private

  def gRoute_params
    params.require(:google_route).permit(:userId, :name, :origin, :destination, :waypoints, :travelMode)
  end

end