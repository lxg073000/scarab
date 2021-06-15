class RemoveDurationFromActivity < ActiveRecord::Migration[5.2]
  def change
    remove_column :activities, :duration, :string
    add_column :activities, :duration, :integer, array:true
    add_column :activities, :distance, :decimal
  end
end
