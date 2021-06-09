class Buggout < ApplicationRecord
  validates :google_route_id, :user_id, :title, :description, :travelMode, :date_completed, :start_time,  presence: true

  belongs_to :user
  belongs_to :google_route

end
