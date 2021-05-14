class RemoveOrginAndDestinationFromGoogleRoutes < ActiveRecord::Migration[5.2]
  def change
    remove_column :google_routes, :origin
    remove_column :google_routes, :destination
  end
end
