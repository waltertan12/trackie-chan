json.extract!(
    @like,
    :id,
    :likable_id,
    :user_id
  )
  json.likable_type @like.likable_type.downcase
  json.title @like.likable.title
  json.artist_id @like.likable.user.id
  json.artist @like.likable.user.username