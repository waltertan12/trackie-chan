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

json.followers @user.followers
json.following  @user.following
json.likes @user.likes
json.playlists @user.playlists