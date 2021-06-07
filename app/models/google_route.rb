class GoogleRoute < ApplicationRecord
  validates :user_id, :name, :travelMode, presence: true

  before_validation :ensure_travel_icon

  belongs_to :user
  has_many :buggouts

  def ensure_travel_icon

  end
end
