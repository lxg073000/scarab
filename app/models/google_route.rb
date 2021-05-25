class GoogleRoute < ApplicationRecord
  validates :user_id, :name, :travelMode, presence: true
  # validates :waypoints, presence: true, allow_nil: true

  belongs_to :user
  has_many :buggouts
end
