class CreateGoogleRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :google_routes do |t|
      t.integer :userId, null: false
      t.string :name, null: false
      t.string :origin, null: false
      t.string :destination, null: false
      t.string :waypoints, array: true, default: []
      t.string :travelMode, default: "WALKING"

      t.timestamps
    end
    add_index :google_routes, :userId
  end
end
