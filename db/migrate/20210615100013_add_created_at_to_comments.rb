class AddCreatedAtToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :created_at, :datetime
  end
end
