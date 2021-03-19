class CreateWaypoints < ActiveRecord::Migration[5.2]
  def change
    create_table :waypoints do |t|
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end
end
