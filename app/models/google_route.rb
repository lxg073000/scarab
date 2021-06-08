class GoogleRoute < ApplicationRecord
  validates :user_id, :name, :travelMode, presence: true

  before_validation :ensure_travel_icon

  belongs_to :user
  has_many :buggouts
  has_and_belongs_to_many :post, foreign_key: "google_route_id"

  def ensure_travel_icon

  end
end
