class AddColumnToPostsDebug < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :activity_id, :integer
    remove_column :posts, :buggout_id, :integer
  end
end
