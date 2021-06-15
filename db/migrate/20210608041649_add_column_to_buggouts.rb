class AddColumnToActivities < ActiveRecord::Migration[5.2]
  def change
    add_column :activities, :pace, :decimal, precision: 15, scale: 2
    add_column :activities, :duration, :string
  end
end
