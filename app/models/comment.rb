class Comment < ApplicationRecord
  validates :body, :post_id, :user_id, presence: true

  belongs_to :post
  # has_many :likes, dependent: :destroy
  # has_many :comments, dependent: :destroy
  belongs_to :user

end
