json.extract!(
  @track,
  :id,
  :title,
  :description,
  :track_url,
  :image_url,
  :user_id,
)

json.username @track.user.username
json.tags @track.tags

json.likes(@track.likes) do |like|
  json.partial! 'like', like: like
end