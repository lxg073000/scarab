@activities.each do |activity|
  json.set! activity.id do
     json.extract! activity, :id, :user_id, :google_route_id, :title, :description, :travelMode, :distance, :date_completed, :start_time, :pace, :duration, :google_route, :created_at
end
end