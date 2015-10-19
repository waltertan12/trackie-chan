json.extract!(
  @playlist,
  :id,
  :user_id,
  :title,
  :description,
  :created_at,
  :updated_at
)

json.tracks @playlist.tracks
json.likes @playlist.likes
json.tags @playlist.tags
json.username @playlist.user.username
json.image_url @playlist.image_url