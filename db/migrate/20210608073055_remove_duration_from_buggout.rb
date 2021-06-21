class RemoveDurationFromBuggout < ActiveRecord::Migration[5.2]
  def change
    remove_column :buggouts, :duration, :string
    add_column :buggouts, :duration, :integer, array:true
    add_column :buggouts, :distance, :decimal
  end
end