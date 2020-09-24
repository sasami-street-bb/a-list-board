class List < ApplicationRecord

  belongs_to :user

  with_options presence: true do
    validates :title
    validates :fee
    validates :user_id
  end
  
end
