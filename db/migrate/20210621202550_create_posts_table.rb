class CreatePostsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.integer :activity_id
      t.integer :google_route_id, :integer
      t.string :pace
      t.integer :duration, array:true
      t.decimal :distance
      t.string :travelMode
      t.integer :comment_id, default: [], array: true
      t.integer :like_id, default: [], array: true
      t.string :username
      t.string :title
      t.string :body
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end


