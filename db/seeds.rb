# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

harry = User.create!(
  username: "boywholived",
  email: "harry.potter@hogwarts.edu",
  password_digest: BCrypt::Password.create("password")
)

hermione = User.create!(
  username: "flimflamthezimzam",
  email: "hermione.granger@hogwarts.edu",
  password_digest: BCrypt::Password.create("password")
)

draco = User.create!(
  username: "simmerthezimmer",
  email: "draco.malfoy@hogwarts.edu",
  password_digest: BCrypt::Password.create("password")
)

ron = User.create!(
  username: "cornerthedorner",
  email: "ronald.weasley@hogwarts.edu",
  password_digest: BCrypt::Password.create("password")
)

play_by_play = Track.create!(
  title: "Autre ne Veut - Play by Play",
  description: "WOWOWOWOW",
  user_id: harry.id,
  track_url: "/media/walter/Storage/Music/Autre Ne Veut/Autre Ne Veut - Anxiety (V0)/01 - Play by Play.mp3",
)