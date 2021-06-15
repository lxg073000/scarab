@gRoutes.each do |route|
  json.set! route.id do
     json.extract! route, :id, :user_id, :name, :description, :waypoints, :travelMode, :distance, :duration, :center, :zoom, :created_at, :activities
end
end