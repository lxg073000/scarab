@posts.each do |post|
  json.set! post.id do
     json.extract! post, :id, :google_route_id, :buggout_id, :google_route_id, :pace, :duration, :distance, :comment_id, :user_id, :title, :body, :created_at, :username
end
end