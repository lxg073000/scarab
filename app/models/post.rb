class Post < ApplicationRecord
  validates :user_id, :username, :body, presence: true

  belongs_to :user
  has_many :likes
  has_many :comments

end
