json.extract!(
  @comment,
  :id,
  :body,
  :user_id,
  :track_id,
  :parent_comment_id,
  :created_at
)
json.username @comment.user.username