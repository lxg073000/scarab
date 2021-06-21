class CreateBuggouts < ActiveRecord::Migration[5.2]
  def change
    create_table :buggouts do |t|
      t.integer :google_route_id
      t.string :title
      t.string :description
      t.string :date_completed
      t.string :start_time
      t.string :end_time
      
      t.timestamps
    end
  end
end