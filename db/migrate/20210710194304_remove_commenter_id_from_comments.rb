class RemoveCommenterIdFromComments < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :commenter_id, :integer
  end
end
