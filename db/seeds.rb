# Creating users
# Random Users
harry = User.create!(
  username: "boywholived",
  email: "harry.potter@hogwarts.edu",
  password_digest: BCrypt::Password.create("password")
)

hermione = User.create!(
  username: "Leviosa",
  email: "hermione.granger@hogwarts.edu",
  password_digest: BCrypt::Password.create("password")
)

draco = User.create!(
  username: "Draco",
  email: "draco.malfoy@hogwarts.edu",
  password_digest: BCrypt::Password.create("password")
)

ron = User.create!(
  username: "I am a Ginger",
  email: "ronald.weasley@hogwarts.edu",
  password_digest: BCrypt::Password.create("password")
)

elmo = User.create!(
  username: "Elmo",
  email: "elmo@sesamestreet.edu",
  password_digest: BCrypt::Password.create("password")
)

big_bird = User.create!(
  username: "Big Bird",
  email: "big.bird@sesamestreet.edu",
  password_digest: BCrypt::Password.create("password")
)

## Real Artists
a_g_cook = User.create!(
  username: "A.G. Cook",
  email: "a.g.cook@cookies.com",
  password_digest: BCrypt::Password.create("password")
)

alunageorge = User.create!(
  username: "AlunaGeorge",
  email: "aluna@george.com",
  password_digest: BCrypt::Password.create("password")
)

animal_collective = User.create!(
  username: "Animal Collective",
  email: "pandapandapdnapdnapdnabearaebraebrae@drone.com",
  password_digest: BCrypt::Password.create("password")
)

araabmuzik = User.create!(
  username: "AraabMUZIK",
  email: "araab@muzik.com",
  password_digest: BCrypt::Password.create("password")
)

autre_ne_veut = User.create!(
  username: "Autre Ne Veut",
  email: "autre.ne.veut@asdf.com",
  password_digest: BCrypt::Password.create("password")
)

battles = User.create!(
  username: "Battles",
  email: "asdfasdfad@battles.com",
  password_digest: BCrypt::Password.create("password")
)

cashmere_cat = User.create!(
  username: "CVSHMERE CVT",
  email: "cashmere@cat.com",
  password_digest: BCrypt::Password.create("password"),
  image_url: "http://i.imgur.com/Muk75L3.jpg?1"
)

chairlift = User.create!(
  username: "Chairlift",
  email: "chair@lift.com",
  image_url: "http://i.imgur.com/o6eIUdA.jpg?1",
  password_digest: BCrypt::Password.create("password")
)

chance_the_rapper = User.create!(
  username: "Chance the Rapper",
  email: "chance@acidrapper.com",
  password_digest: BCrypt::Password.create("password")
)

childish_gambino = User.create!(
  username: "Childish Gambino",
  email: "donald.gloverz@wow.mom",
  password_digest: BCrypt::Password.create("password"),
  image_url: "http://i.imgur.com/Om1G65e.jpg?1"
)

christine_and_the_queens = User.create!(
  username: "Christine and the Queens",
  email: "asfasdnfadsfque@christineandthequeens.com",
  password: "password"
)

chromatic = User.create!(
  username: "Chromatic",
  email: "chrom@tic.com",
  password_digest: BCrypt::Password.create("password")
)

chvrches = User.create!(
  username: "CHRVCHES",
  email: "iamscottish@chvrches.asfasdf",
  password: "password"
)

fleetwood_mac = User.create!(
  username: "Fleetwod Mac",
  email: "flmacdonalds@okay.wut",
  password_digest: BCrypt::Password.create("password")
)

future_islands = User.create!(
  username: "Future Islands",
  email: "futurefuturefuturefuture.islands@iamalive.com",
  password_digest: BCrypt::Password.create("password"),
  image_url: "http://i.imgur.com/A2e3a5I.jpg?1"
)

japandroids = User.create!(
  username: "Japandroids",
  email: "post@nothing.com",
  password_digest: BCrypt::Password.create("password"),
  image_url: "http://i.imgur.com/ttPfUsI.jpg"
)

mike_jones = User.create!(
  username: "Mike Jones",
  email: "mike.jones@theoneandonly.com",
  password_digest: BCrypt::Password.create("password")
)

owl_city = User.create!(
  username: "Owl City",
  email: "owl@city.com",
  password_digest: BCrypt::Password.create("password")
)

run_the_jewels = User.create!(
  username: "Run the Jewels",
  email: "rtj@runningandstuff.com",
  password_digest: BCrypt::Password.create("password"),
  image_url: "http://i.imgur.com/OdbxiCI.jpg"
)

shamir = User.create!(
  username: "Shamir",
  email: "shamir@asdfasdfasdf.skinnydude",
  password: "password"
)

sheer_mag = User.create!(
  username: "Sheer Mag",
  email: "shssermasdfasdfm@mag.com",
  password: "password"
)

secret_songs = User.create!(
  username: "Shh",
  email: "shh@secret.songs",
  password: "password",
  image_url: "http://i.imgur.com/ZYLGkXk.jpg?1"
)

tei_shi = User.create!(
  username: "Tei Shi",
  email: "teishiteishietishehtshthsthsht@teishi.shi",
  password: "password"
)

the_dig = User.create!(
  username: "The Dig",
  email: "dig@me.com",
  password_digest: BCrypt::Password.create("password")
)

the_knife = User.create!(
  username: "The Knife",
  email: "theKnfiasdfasdfasdf@gasdfad.asfasdf",
  password_digest: BCrypt::Password.create("password")
)

the_national = User.create!(
  username: "The National",
  email: "areyoucryingyet@sosad.overwhelmingdepression",
  password_digest: BCrypt::Password.create("password"),
  image_url: "http://i.imgur.com/qQ88bfI.jpg"
)

tennis = User.create!(
  username: "Tennis",
  email: "tenisntesntensitnei@tenins.tennis",
  password: "password"
)

tnght = User.create!(
  username: "TNGHT",
  email: "tnghtnghtnghtngtnghtnghtgnthng@weareyoung.com",
  password_digest: BCrypt::Password.create("password"),
  image_url: "http://i.imgur.com/ySgnZX5.jpg?1"
)

toro_y_moi = User.create!(
  username: "Toro y Moi",
  email: "toroandme@wow.com",
  password_digest: BCrypt::Password.create("password"),
  image_url: "http://i.imgur.com/iuQrQb7.jpg?1"
)

wet = User.create!(
  username: "Wet",
  email: "wet.wet.wet.wet.wet.wet.@wet.wet",
  password_digest: BCrypt::Password.create("password")
)

yelle = User.create!(
  username: "Yelle",
  email: "yelle@iamfrench.aasasdfasd",
  password_digest: BCrypt::Password.create("password")
)

youth_lagoon = User.create!(
  username: "Youth Lagoon",
  email: "youth.youth.youth.youth@lagoonnnnnnn.lagoonz",
  password_digest: BCrypt::Password.create("password"),
  image_url: "http://i.imgur.com/89qng9H.jpg?1"
)

zola_jesus = User.create!(
  username: "Zola Jesus",
  email: "emile.zola@zolajesus.wow",
  password_digest: BCrypt::Password.create("password")
)

# Creating tracks
## Random tracks
track_one = Track.create!(
  title: "Seasons (GOODGOODNOTBADBAD Remix)",
  description: "WOWOWOWOW",
  user_id: future_islands.id,
  track_url: "https://cf-media.sndcdn.com/iLfaMmSghYu1.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vaUxmYU1tU2doWXUxLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE0Nzc5MzgwODZ9fX1dfQ__&Signature=Hrv1OEzke-nvnTdbTLbKlYTlr4O6KcCYWV8mLZYYpK3o18XHf1vtpplU3e-xgyhzqd-Akku3j8mU2I-27OMITYfSsmq1eJmO~0-K5DEKBMc3EulYSqumwogdSGGIjUyMHnG-FrRz8MN9SWhGHMjUFpVKggQK8Z3WEd1qpOkgtlQCVIZYGzT0gYZlhu9gF5uA5npWF3CR5DmocZGqzVb3Hjv~LH-HJpk7gh6c8VSdqHVgNfD8D8l07MxyTAaFa53zkaPsavQkSim7q6pZwWG14wPP~FzvyNNMOuverMOP4qvY3uXONxbnC1aHwhTVKhddnowX4F78qqbRBFYyPH2rJA__&Key-Pair-Id=APKAJAGZ7VMH2PFPW6UQ"
)

dangerous_days = Track.create!(
  title: "Dangerous Days",
  description: "2 spooky 4 me",
  user_id: zola_jesus.id,
  track_url: "http://austintownhall.com/wp-content/uploads/2014/06/Zola-Jesus-Dangerous-Days.mp3"
)

bassically = Track.create!(
  title: "Bassically",
  description: "much bass",
  user_id: tei_shi.id,
  track_url: "https://ec-preview-media.sndcdn.com/preview/0/30/ZQTuXXlyBbKI.128.mp3?f10880d39085a94a0418a7e162b03d52e21adf826af17a391e1b701f3a299bfd0fe0eb48680a11ec6bc95009a4ef192a5a8697c22802cd36a64eeb6d5f3345d4852b0f4b001b8a04246ecffb31d05357ce6d"
)

lotus_eater = Track.create!(
  title: "Mura Masa - Lotus Eater",
  description: "Hmmm",
  user_id: harry.id,
  track_url: "https://ec-media.sndcdn.com/61f3WMgNEMlc.128.mp3?f10880d39085a94a0418a7ef69b03d522cd6dfee9399eeb9a522069b66fbb935804e52c76ee7efbe72d7eb09be58360e67bdeae1a6d2b492853bf0afc0a1a488dd53941638"
)

Track.create!(
  title: "Room For 1zone",
  description: "Ahhh",
  user_id: toro_y_moi.id,
  track_url: "https://ec-media.sndcdn.com/las9at2MrcTw.128.mp3?f10880d39085a94a0418a7ef69b03d522cd6dfee9399eeb9a522069b66fcb83a0b84f5d3861fca66b2ebff3059bbf0cfefb47a38917b736ac841b522c14c3c2349d9267498"
)