FOLLOWABLE_IDS = (7..32).to_a
LIKABLE_TRACK_IDS = (3..59).to_a

def update_rank(feed)
  source = feed.source

  rank = feed.source.user.followers.count

  now = Time.now

  total_time = now - source.created_at

  source.likes.each do |like|
    like_time = now - like.created_at
    rank += (1 - (like_time / total_time))
    p rank
  end

  feed.update(rank: rank)
end

def create_users(num_users = 25, num_likes = 15, num_follows = 10)
  num_users.times do |index|
    new_user = User.create(
      username: Faker::Internet.user_name,
      email: Faker::Internet.safe_email,
      password: "password"
    )

    LIKABLE_TRACK_IDS.sample(rand(num_likes)).each do |track_id|
      new_user.likings.create(likable_id: track_id, likable_type: "Track")
    end

    FOLLOWABLE_IDS.sample(rand(num_follows)).each do |user_id|
      new_user.following << User.find(user_id)
    end
  end
end

namespace :feed do
  desc "Update feed rank"
  task update: :environment do
    Feed.includes(user: :followers, source: :likes).each do |feed|
      update_rank(feed)
    end
  end
end

namespace :feed do
  desc "Generate 25 new users and create likes"
  task generate_users_and_likes: :environment do
    create_users
  end
end

namespace :feed do
  desc "Generate users / likes and update feed rank"
  task update_and_generate: :environment do
    create_users

    Feed.includes(user: :followers, source: :likes).each do |feed|
      update_rank(feed)
    end
  end  
end