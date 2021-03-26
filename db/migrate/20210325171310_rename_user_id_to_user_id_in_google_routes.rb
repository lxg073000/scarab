class RenameUserIdToUserIdInGoogleRoutes < ActiveRecord::Migration[5.2]
  def change
    rename_column :google_routes, :userId, :user_id
  end
end
