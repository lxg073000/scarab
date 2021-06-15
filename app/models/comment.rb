class Comment < ApplicationRecord
  validates :body, :post_id, :commenter_id, :post_user_id, presence: true

  belongs_to :post
  has_many :likes
  has_many :comments

end
