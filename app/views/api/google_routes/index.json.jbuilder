@gRoutes.each do |route|
  json.set! route.id do
     json.extract! route, :origin, :destination, :waypoints, :travelMode, :user_id, :name
end
end