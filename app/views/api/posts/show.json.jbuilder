json.extract! @post, :id, :google_route_id, :activity_id, :google_route_id, :pace, :duration, :distance, :travelMode, :user_id, :title, :body, :created_at, :username
if @post.google_route 
  json.polyline @post.google_route.polyline
end
json.extract! @post.comments