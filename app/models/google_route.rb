class GoogleRoute < ApplicationRecord
  validates :user_id, :name, :travelMode, presence: true

  belongs_to :user
  has_many :activities, dependent: :destroy
  # has_and_belongs_to_many :post, foreign_key: "google_route_id"

end
