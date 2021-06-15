class DeleteWaypoints < ActiveRecord::Migration[5.2]
  def change
    drop_table :waypoints
  end
end
