json.array!(@comments) do |comment|
  json.extract!(
    comment,
    :body,
    :user_id,
    :track_id,
    :parent_comment_id,
    :created_at
  )
  json.username comment.user.username
end