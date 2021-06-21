class AddColumnToBuggout < ActiveRecord::Migration[5.2]
  def change
    add_column :buggouts, :travelMode, :string
  end
end