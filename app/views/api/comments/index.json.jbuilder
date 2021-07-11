@comments.each do |comment|
  json.set! comment.id do
     json.extract! comment, :id, :post_id, :body, :user, :created_at
    end
end