class ChangeColumnInGoogleRoutes < ActiveRecord::Migration[5.2]
  def change
    remove_column :google_routes, :waypoints
    add_column :google_routes, :waypoints, :decimal, array: true, default:[]
  end
end
