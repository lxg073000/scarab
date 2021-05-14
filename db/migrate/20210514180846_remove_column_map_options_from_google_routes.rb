class RemoveColumnMapOptionsFromGoogleRoutes < ActiveRecord::Migration[5.2]
  def change
    remove_column :google_routes, :mapOptions
  end
end
