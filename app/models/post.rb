class Post < ApplicationRecord
  validates :user_id, :username, :title, :body presence: true

  belongs_to :user
  has_many :likes
  has_many :comments

end
