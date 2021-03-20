
  @waypoints.each do |waypoint|
    json.set! waypoint.id do
      json.extract! waypoint, :id, :description, :lat, :lng

    end  
  end
# json.waypoints do  
#   @waypoints.each do |waypoint|
#     json.set! waypoint.id do
#       json.extract! waypoint, :id, :description, :lat, :lng

#     end  
#   end
# end