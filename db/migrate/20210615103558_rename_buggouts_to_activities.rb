class RenameBuggoutsToActivities < ActiveRecord::Migration[5.2]
  def change
    rename_table :buggouts, :activities
  end
end
