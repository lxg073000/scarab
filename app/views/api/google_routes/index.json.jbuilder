@gRoutes.each do |route|
  json.set! route.id do
     json.extract! route, :id, :origin, :destination, :waypoints, :travelMode, :user_id, :name, :mapOptions
end
end