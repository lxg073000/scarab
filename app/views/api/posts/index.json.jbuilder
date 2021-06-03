@posts.each do |post|
  json.set! post.created_at do
     json.extract! post, :id, :comment_id, :user_id, :title, :body, :created_at, :username
end
end
# (@posts.sort_by{|post| post[:title]}).each do |post|
#   json.set! post.id do
#      json.extract! post, :id, :comment_id, :user_id, :title, :body, :created_at, :username
# end
# end

# json.array! (@posts.sort_by{|post| post[:created_at]}) do |post|
#   json.set! post.id do
#     json.extract! post, :id, :comment_id, :user_id, :title, :body, :created_at, :username
#   end
# end