class CreateLists < ActiveRecord::Migration[6.0]
  def change
    create_table :lists do |t|
      t.string :title, null: false
      t.string :url
      t.string :email
      t.string :password
      t.string :fee, null: false
      t.text :memo
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
