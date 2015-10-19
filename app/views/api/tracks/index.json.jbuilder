json.array!(@tracks) do |track|
  json.extract!(
    track,
    :id,
    :title,
    :description,
    :track_url,
    :image_url,
    :user_id,
  )

  json.username track.user.username
  json.tags track.tags

  json.likes(track.likes) do |like|
    json.id like.id
    json.user_id like.user_id
    json.username like.user.username
    json.image_url like.user.image_url
  end
end