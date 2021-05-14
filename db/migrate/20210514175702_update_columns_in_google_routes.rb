class UpdateColumnsInGoogleRoutes < ActiveRecord::Migration[5.2]
  def change
    remove_column :google_routes, :waypoints
    add_column :google_routes, :waypoints, :string, array: true, default:[]
    add_column :google_routes, :description, :string
    add_column :google_routes, :zoom, :string
    add_column :google_routes, :center, :string
    add_column :google_routes, :distance, :string
    add_column :google_routes, :duration, :string
  end
end
