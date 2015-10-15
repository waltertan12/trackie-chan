json.extract!(
  @track,
  :title,
  :description,
  :track_url,
  :image_url,
  :user_id,
  :private
)

json.username @track.user.username