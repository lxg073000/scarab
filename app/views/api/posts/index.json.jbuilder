@posts.each do |post|
  json.set! post.id do
     json.extract! post, :id, :google_route_id, :activity_id, :google_route_id, :pace, :duration, :distance, :travelMode, :user_id, :title, :body, :created_at, :username
     
     if post.google_route 
       json.polyline post.google_route.polyline
     end
     json.set! :comments do
       post.comments.each do |comment|
        json.set! comment.id do
          json.id comment.id
          json.body comment.body
          json.created_at comment.created_at
          json.user comment.user
        end
      end
    end
  end
end