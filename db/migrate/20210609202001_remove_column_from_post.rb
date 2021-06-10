class RemoveColumnFromPost < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :pace, :decimal
    add_column :posts, :pace, :string
  end
end
