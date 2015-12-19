json.extract!(
  user,
  :id,
  :username,
  :email,
  :image_url,
  :created_at,
  :updated_at
)

json.type "User"

json.tracks user.tracks

# json.followers user.followers
# json.following  user.following
json.likes user.likes

following = user.following.map do |f|
  {
    id: f.id, 
    username: f.username, 
    image_url: f.image_url, 
    email: f.email
  }
end

followers = user.followers.map do |f|
  {
    id: f.id, 
    username: f.username, 
    image_url: f.image_url, 
    email: f.email
  }
end

json.following following
json.followers followers


# json.array!(user.followers) do |follower|
  # json.id follower.id
  # json.username follower.username
# end

# json.array!(user.following) do |user|
#   json.id user.id
#   json.username user.username
# end