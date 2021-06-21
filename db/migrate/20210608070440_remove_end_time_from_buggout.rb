class RemoveEndTimeFromBuggout < ActiveRecord::Migration[5.2]
  def change
    remove_column :buggouts, :end_time, :string
  end
end