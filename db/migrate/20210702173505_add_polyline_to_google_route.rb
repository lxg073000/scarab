class AddPolylineToGoogleRoute < ActiveRecord::Migration[5.2]
  def change
    add_column :google_routes, :polyline, :string
  end
end
