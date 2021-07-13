class AddTutorialStatusToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :tutorial_status, :boolean
  end
end
