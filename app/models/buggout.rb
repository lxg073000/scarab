class Buggout < ApplicationRecord
  validates :google_route_id, :title, :description, :date_completed, :start_time, :end_time, presence: true

  belongs_to :user
  belongs_to :google_route

end
