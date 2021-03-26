class ChangeWaypointsTypeFromGoogleRoutes1 < ActiveRecord::Migration[5.2]
  def change
     change_column :google_routes, :waypoints, :string, array: true 
  end
end
