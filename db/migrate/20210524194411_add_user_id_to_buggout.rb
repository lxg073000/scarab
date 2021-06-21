class AddUserIdToBuggout < ActiveRecord::Migration[5.2]
  def change
    add_column :buggouts, :user_id, :integer
  end
end