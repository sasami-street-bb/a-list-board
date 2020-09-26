class RemoveNameFromLists < ActiveRecord::Migration[6.0]
  def change
    remove_column :lists, :email, :string
    remove_column :lists, :password, :string
  end
end
