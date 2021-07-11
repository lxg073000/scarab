class Post < ApplicationRecord
  validates :user_id, :username, :body, presence: true

  belongs_to :user
  has_many :likes, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_one :activity
  belongs_to :google_route, optional: true

end
