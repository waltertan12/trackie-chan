json.extract!(
  track,
  :id,
  :title,
  :track_url,
  :user_id,
)

json.type "Track"

json.username track.user.username