json.array!(@tracks) do |track|
  json.extract!(
    track,
    :id,
    :title,
    :description,
    :track_url,
    :image_url
  )

  json.username track.user.username
end