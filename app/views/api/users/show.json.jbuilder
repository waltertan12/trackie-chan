json.extract!(
  @user,
  :id,
  :username,
  :email,
  :image_url,
  :created_at,
  :updated_at
)

json.tracks @user.tracks
json.is_current_user_following current_user.following?(@user)
json.followers @user.followers
json.followed  @user.following