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

chance = User.create!(
  username: "Chance Acid Rapper",
  email: "chance@acidrapper.com",
  password_digest: BCrypt::Password.create("password")
)

track_one = Track.create!(
  title: "Ravinswod",
  description: "WOWOWOWOW",
  user_id: harry.id,
  track_url: "http://dublindonut.com/Content/Sounds/musicplayer/ravinswod.mp3"
)

track_two = Track.create!(
  title: "Hobbes",
  description: "levioaSAAA",
  user_id: hermione.id,
  track_url: "http://dublindonut.com/Content/Sounds/musicplayer/hobbes.mp3"
)

israal = Track.create!(
  title: "Israel (Sparring) feat. Noname Gypsy",
  description: "levioaSAAA",
  user_id: chance.id,
  track_url: "http://70mack.co/wp-content/upload/2015/08/Chance_The_Rapper_Israel_Sparring_Ft_Noname_Gypsy.mp3"
)