json.extract!(
  playlist,
  :id,
  :user_id,
  :title,
)

json.type "Playlist"

json.tracks(playlist.tracks) do |track|
  json.partial! "api/tracks/basic_track", track: track
end

json.username playlist.user.username
json.image_url playlist.image_url