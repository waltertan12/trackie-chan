json.extract!(
  playlist,
  :id,
  :user_id,
  :title,
  :description,
  :created_at,
  :updated_at
)

json.tracks(playlist.tracks) do |track|
  json.partial! "api/tracks/track", track: track
end

json.likes playlist.likes
json.tags playlist.tags
json.username playlist.user.username
json.image_url playlist.image_url

json.likes(playlist.likes) do |like|
  json.partial! 'api/tracks/like', like: like
end