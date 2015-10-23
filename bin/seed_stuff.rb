good_ids = [5, 6, 34, 35, 36, 37, 38, 39, 40, 41]
length = good_ids.length

100.times do |num|
  new_user = User.create(
    username: "user#{num}",
    email: "awesome.user#{num}@usernumber#{num}.yey",
    password_digest: BCrypt::Password.create("password")
  )

  to_follow = good_ids.sample(rand(length))

  to_follow.each do |id|
    new_user.following << User.find(id)
  end
end