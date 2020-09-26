class AddAttrEncryptedToLists < ActiveRecord::Migration[6.0]
  def change
    add_column :lists, :encrypted_email, :string
    add_column :lists, :encrypted_email_iv, :string
    add_column :lists, :encrypted_password, :string
    add_column :lists, :encrypted_password_iv, :string
  end
end
