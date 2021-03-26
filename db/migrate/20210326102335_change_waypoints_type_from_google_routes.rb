class ChangeWaypointsTypeFromGoogleRoutes < ActiveRecord::Migration[5.2]
  def change
    change_column :google_routes, :waypoints, :text, array: true 
  end
end
