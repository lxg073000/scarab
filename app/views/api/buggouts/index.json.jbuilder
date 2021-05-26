@buggouts.each do |buggout|
  json.set! buggout.id do
     json.extract! buggout, :id, :user_id, :google_route_id, :title, :description, :travelMode, :date_completed, :start_time, :end_time
end
end