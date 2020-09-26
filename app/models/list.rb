class List < ApplicationRecord

  belongs_to :user

  with_options presence: true do
    validates :title
    validates :fee
    validates :user_id
  end

  attr_encrypted :email, key: 'This is a key that is 256 bits!!'
  attr_encrypted :password, key: 'This is a key that is 256 bits!!'
  
end
