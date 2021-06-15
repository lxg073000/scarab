class User < ApplicationRecord
  validates :username, :password_digest, :email, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true
  attr_reader :password
  
  before_validation :ensure_session_token

  has_many :google_routes
  has_many :activities
  has_many :trustees
  has_many :liked_activities
  has_many :activities_liked
  has_one_attached :profile_picture

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64
    self.save!
    self.session_token
  end

  def self.find_by_credentials(email, password)
    @user = User.find_by_email(email)
    if @user && @user.is_password?(password)
      @user
    else
      nil
    end
  end


end
