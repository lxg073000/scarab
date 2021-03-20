class Api::WaypointsController < ApplicationController
  def index
    @waypoints = Waypoint.all
    if @waypoints
      render "api/waypoints/index"
    else
      render json: @waypoints.errors.full_messages, status: 422
    end

  end

  def create
    @waypoint = Waypoint.new(waypointsParams)
    if @waypoint.save
      render "api/waypoints/show"
    else
      render json: @waypoint.errors.full_messages, status: 422
    end
  end

  private

  def waypointsParams
    params.require(:waypoint).permit(:lat, :lng, :description)
  end
end
