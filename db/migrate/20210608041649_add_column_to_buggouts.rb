class AddColumnToBuggouts < ActiveRecord::Migration[5.2]
  def change
    add_column :buggouts, :pace, :decimal, precision: 15, scale: 2
    add_column :buggouts, :duration, :string
  end
end
