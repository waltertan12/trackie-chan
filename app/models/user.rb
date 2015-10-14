class User < ActiveRecord::Base
  attr_reader :password
  # Model validations
  validates :password, length: { minimum: 8 },
                       confirmation: true, 
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

  after_initialize :ensure_session_token

  # Associations
  has_many :active_relationships, class_name: "Following",
                                  foreign_key: "follower_id",
                                  dependent: :destroy
  has_many :passive_relationships, class_name: "Following",
                                   foreign_key: "followed_id",
                                   dependent: :destroy
                                  
  has_many :following, through: :active_relationships, source: :followed
  has_many :followers, through: :passive_relationships, source: :follower

  has_many :tracks

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
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