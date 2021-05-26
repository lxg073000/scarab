@posts.each do |post|
  json.set! post.id do
     json.extract! post, :id, :comment_id, :user_id, :title, :body, :created_at, :username
end