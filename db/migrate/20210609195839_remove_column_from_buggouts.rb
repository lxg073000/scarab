class RemoveColumnFromBuggouts < ActiveRecord::Migration[5.2]
  def change
    remove_column :buggouts, :pace, :decimal
    add_column :buggouts, :pace, :string
  end
end