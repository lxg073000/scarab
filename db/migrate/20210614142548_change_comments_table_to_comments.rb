class ChangeCommentsTableToComments < ActiveRecord::Migration[5.2]
  def change
    rename_table :comments_tables, :comments
  end
end
