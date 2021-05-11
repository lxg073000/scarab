class AddColumnToGoogleRoutes < ActiveRecord::Migration[5.2]
  def change
    add_column :google_routes, :mapOptions, :string, array: true, default: [] 
  end
end
