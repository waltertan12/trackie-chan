json.extract!(
  @user,
  :id,
  :username,
  :email,
  :image_url,
  :created_at,
  :updated_at,
  :password_digest,
  :session_token
)