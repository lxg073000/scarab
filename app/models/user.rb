class User < ApplicationRecord
  validates :username, :password_digest, :email, :session_token presence :uniqeness true
  validates :password, length: {minimum: 6}, allow_nil: true

  attr_reader :password
  before_validation :ensure_session_token

  has_many :buggouts
  has_many :trustees
  has_many :liked_buggouts
  has_many :buggouts_liked

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

  def self.find_by_credentials(username, password)
    @user = User.find_by_username(username)
    if @user && @user.is_password?(password)
      @user
    else
      nil
    end
  end


end
