json.extract!(
  @track,
  :id,
  :title,
  :description,
  :track_url,
  :image_url,
  :user_id,
  :likes
)

json.username @track.user.username
json.tags @track.tags

json.likes(@track.likes) do |like|
  json.id like.id
  json.user_id like.user_id
  json.username like.user.username
  json.image_url like.user.image_url
end

# json.likesz @track.likes.each do |like|
#   json.user_id like.user_id
#   json.username like.user.username
#   json.image_url like.user.image_url
# end