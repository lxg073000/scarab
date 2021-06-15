@comments.each do |comment|
  json.set! comment.id do
     json.extract! comment, :id, :commenter_id, :post_user_id, :body, :created_at
end
end