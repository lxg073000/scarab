class RemoveColumnFromActivities < ActiveRecord::Migration[5.2]
  def change
    remove_column :activities, :pace, :decimal
    add_column :activities, :pace, :string
  end
end
