class User < ActiveRecord::Base
  attr_reader :password

  validates :password, length: { minimum: 8 }, 
                       allow_nil: true

  validates :password_digest, presence: true

  validates :username, presence: true,
                       length: { maximum: 255 }

  validates :session_token, presence: true, 
                            uniqueness: true

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, 
                    length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: {case_sensitive: false}

  validates :image_url, presence: true
  validates :admin, inclusion: { in: [true, false] }

  before_create :ensure_session_token

  def self.find_by_credentials(user_name, password)
    user = User.find_by(user_name: user_name)
    user if user && user.is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_token
    self.save!
  end

  def generate_token
    SecureRandom::urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= generate_token
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end