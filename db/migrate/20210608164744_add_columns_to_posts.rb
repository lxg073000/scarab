class AddColumnsToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :buggout_id, :integer
    add_column :posts, :google_route_id, :integer
    add_column :posts, :pace, :decimal, precision: 15, scale: 2
    add_column :posts, :duration, :integer, array:true
    add_column :posts, :distance, :decimal
  end
end
