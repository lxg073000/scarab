class GoogleRoute < ApplicationRecord
  validates: :userId, :name, :origin, :destination, :waypoints, :travelMode, presence: true

  has_one :user
end
