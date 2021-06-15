class AddColumnToActivity < ActiveRecord::Migration[5.2]
  def change
    add_column :activities, :travelMode, :string
  end
end
