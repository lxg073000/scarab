class GoogleRoute < ApplicationRecord
  validates :user_id, :name, :origin, :destination, :travelMode, presence: true
  # validates :waypoints, presence: true, allow_nil: true

  belongs_to :user
end
