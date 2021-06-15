class CreateCommentsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :comments_tables do |t|
      t.string :body
      t.integer :commenter_id
      t.integer :post_user_id
      t.integer :post_id
    end
  end
end
