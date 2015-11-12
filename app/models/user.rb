class User < ActiveRecord::Base
  attr_reader :password
  alias_attribute :likes, :likings
  # Model validations
  validates :password, length: { minimum: 8 },
                       confirmation: true, 
                       allow_nil: true

  # validates :password_digest, presence: true

  validates :username, presence: true,
                       length: { maximum: 255 }

  validates :session_token, presence: true, 
                            uniqueness: true

  validate :valid_password

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, 
                    length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: {case_sensitive: false}

  validates :image_url, presence: true
  validates :admin, inclusion: { in: [true, false] }

  after_initialize :ensure_session_token
  after_initialize :ensure_image_url

  # Associations
  has_many :active_relationships, class_name: "Following",
                                  foreign_key: "follower_id",
                                  dependent: :destroy
  has_many :passive_relationships, class_name: "Following",
                                   foreign_key: "followed_id",
                                   dependent: :destroy
                                  
  has_many :following, through: :active_relationships, source: :followed
  has_many :followers, through: :passive_relationships, source: :follower

  has_many :tracks, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :likings, dependent: :destroy
  has_many :playlists, dependent: :destroy

  def ensure_image_url
    # if self.new_record?
      self.image_url ||= [
        "http://i.imgur.com/elhQmTE.jpg?1",
        "http://i.imgur.com/0u478vM.jpg?1",
        "http://i.imgur.com/lSIuik9.jpg?1",
        "http://i.imgur.com/nLpkVgW.jpg?1"
      ].sample 
    # end
  end

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
    if password.length > 8
      self.password_digest = BCrypt::Password.create(password)
    else
      self.errors.add(:password,
                      "Password must be greater than 8 characters")
    end
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  # Following logic
  def follow(other_user_id)
    active_relationships.create(followed_id: other_user_id)
  end
  
  def unfollow(other_user_id)
    active_relationships.find_by(followed_id: other_user_id).destroy
  end
  
  def following?(other_user)
    following.include?(other_user)
  end 

  def valid_password
    if @password_digest.nil?
      self.errors.add(:password, "Password must have at least 8 characters")
    end
  end
end