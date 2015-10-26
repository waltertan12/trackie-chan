# Creating users
## Random Users
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
  username: "Wet",
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

## Real tracks
pc_music_tag = Tag.create(name: "pc music")

beautiful = Track.create!(
  title: "Beautiful",
  description: "more beep boop",
  user_id: a_g_cook.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/A.%20G.%20Cook%20-%20Beautiful.mp3"
)

beautiful.taggings.create!(tag: pc_music_tag)

beautiful_rustie_remix = Track.create!(
  title: "Beautiful (Rustie Edit)",
  description: "beep boop",
  user_id: a_g_cook.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/A.%20G.%20Cook%20-%20Beautiful%20(Rustie%20Edit).mp3"
)

beautiful_rustie_remix.taggings.create(tag: pc_music_tag)

your_drums_your_love = Track.create!(
  title: "Your Drums, Your Love",
  description: "drums and love",
  user_id: alunageorge.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/AlunaGeorge%20-%20Your%20Drums,%20Your%20Love.mp3"
)

drone_tag = Tag.create!(name: "drone")
indie_tag = Tag.create!(name: "indie")

my_girls = Track.create!(
  title: "My Girls",
  description: "why didn't his get a 10 on pitchfork?",
  user_id: animal_collective.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Animal%20Collective%20-%20My%20Girls.mp3"
)

my_girls.taggings.create!(tag: drone_tag)
my_girls.taggings.create!(tag: indie_tag)

water_curses = Track.create!(
  title: "Water Curses",
  description: "boop",
  user_id: animal_collective.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Animal%20Collective,%20Animal%20Collective%20-%20Water%20Curses.mp3"
)

water_curses.taggings.create!(tag: drone_tag)
water_curses.taggings.create!(tag: indie_tag)

counting = Track.create!(
  title: "Counting",
  description: "ahhhyehahah",
  user_id: autre_ne_veut.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Autre%20Ne%20Veut%20-%20Counting.mp3"
)

play_by_play = Track.create!(
  title: "Play by Play",
  description: "okay",
  user_id: autre_ne_veut.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Autre%20Ne%20Veut%20-%20Play%20by%20Play.mp3"
)

math_rock_tag = Tag.create!(name: "math rock")

inchworm = Track.create!(
  title: "Inchworm",
  description: "wowbawobaow boawb",
  user_id: battles.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Battles%20-%20Inchworm.mp3"
)

inchworm.taggings.create!(tag: math_rock_tag)

wall_street = Track.create!(
  title: "Wall Street",
  description: "",
  user_id: battles.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Battles%20-%20Wall%20Street.mp3"
)

wall_street.taggings.create!(tag: math_rock_tag)

ice_cream = Track.create!(
  title: "Ice Cream feat. Matias Aguayo",
  description: "Bi-Rite",
  user_id: battles.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Battles%20Feat.%20Matias%20Aguayo%20-%20Ice%20Cream.mp3"
)

ice_cream.taggings.create!(tag: math_rock_tag)

kiss_kiss = Track.create!(
  title: "Kiss Kiss",
  description: "<3",
  user_id: cashmere_cat.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Cashmere%20Cat%20-%20Kiss%20Kiss.mp3"
)

mirror_maru = Track.create!(
  title: "Mirror Maru",
  description: "<3",
  user_id: cashmere_cat.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Cashmere%20Cat%20-%20Mirror%20Maru.mp3"
)

paws = Track.create!(
  title: "Paws",
  description: "<3",
  user_id: cashmere_cat.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Cashmere%20Cat%20-%20Paws.mp3"
)

secrets_and_lies = Track.create!(
  title: "Secrets + Lies",
  description: "<3",
  user_id: cashmere_cat.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Cashmere%20Cat%20-%20Secrets%20+%20Lies.mp3"
)

amanaemonesia = Track.create!(
  title: "Amanaemonesia",
  description: "From the album 'Something'",
  user_id: chairlift.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Chairlift%20-%20Amaneamonesia.mp3"
)

bruises = Track.create!(
  title: "Bruises",
  description: ":(",
  user_id: chairlift.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Chairlift%20-%20Bruises.mp3"
)

i_belong_in_your_arms = Track.create!(
  title: "I Belong In Your Arms",
  description: "From the album 'Something'",
  user_id: chairlift.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Chairlift%20-%20I%20Belong%20In%20Your%20Arms.mp3"
)

sidewalk_safari = Track.create!(
  title: "Sidewalk Safari",
  description: "From the album 'Something'",
  user_id: chairlift.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Chairlift%20-%20Sidewalk%20Safari.mp3"
)

rap_tag = Tag.create!(name: "rap")

cocoa_butter_kisses = Track.create!(
  title: "Cocoa Butter Kisses feat. Vic Mensa and Twista",
  description: "nostalgia",
  user_id: chance_the_rapper.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Chance%20The%20Rapper%20-%20Cocoa%20Butter%20Kisses%20(ft.%20Vic%20Mensa%20&%20Twista).mp3"
)

cocoa_butter_kisses.taggings.create!(tag: rap_tag)

israel = Track.create!(
  title: "Israel feat. Noname Gypsy",
  description: "No Name",
  user_id: chance_the_rapper.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Chance%20The%20Rapper%20-%20Israel%20(ft.%20Noname%20Gypsy).mp3"
)

sunday_candy = Track.create!(
  title: "Sunday Candy",
  description: "Donnie Trumpet",
  user_id: chance_the_rapper.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Donnie%20Trumpet%20&%20The%20Social%20Experiment%20-%20Sunday%20Candy%20(feat.%20Jamila%20Woods).mp3"
)

three_thousand_and_five = Track.create!(
  title: "3005",
  description: "future",
  user_id: childish_gambino.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Childish%20Gambino%20-%203005.mp3"
)

three_thousand_and_five.taggings.create!(tag: rap_tag)

retro = Track.create!(
  title: "Retro",
  description: "old",
  user_id: childish_gambino.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Childish%20Gambino%20-%20Retro%20(Rough).mp3"
)

sober = Track.create!(
  title: "3005",
  description: "",
  user_id: childish_gambino.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Childish%20Gambino%20-%20Sober.mp3"
)

telegraph_ave = Track.create!(
  title: "Telegraph Ave (Oakland by Lloyd)",
  description: "",
  user_id: childish_gambino.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Childish%20Gambino%20-%20Telegraph%20Ave%20(''Oakland%20by%20Lloyd'').mp3"
)

it = Track.create!(
  title: "iT",
  description: "Be bold like Kanye",
  user_id: christine_and_the_queens.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Christine%20and%20the%20Queens%20-%20iT.mp3"
)

paradis_perdus = Track.create!(
  title: "Paradis Perdus",
  description: "",
  user_id: christine_and_the_queens.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Christine%20and%20the%20Queens%20-%20Paradis%20perdus.mp3"
)

back_from_the_grave = Track.create!(
  title: "Back from the Grave",
  description: "spooky",
  user_id: chromatic.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Chromatics%20-%20Back%20from%20the%20Grave.mp3"
)

cherry = Track.create!(
  title: "Cherry",
  description: "you might have heard this from Schoolboy Q...",
  user_id: chromatic.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Chromatics%20-%20Cherry.mp3"
)

leave_a_trace = Track.create!(
  title: "Leave a Trace",
  user_id: chvrches.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/CHVRCHES%20-%20Leave%20A%20Trace.mp3"
)

the_mother_we_share = Track.create!(
  title: "The Mother We Share",
  user_id: chvrches.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/CHVRCHES%20-%20The%20Mother%20We%20Share.mp3"
)

everywhere = Track.create!(
  title: "Everywhere",
  description: "Broments in love",
  user_id: fleetwood_mac.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Fleetwood%20Mac%20-%20Everywhere.mp3"
)

a_dream_of_you_and_me = Track.create!(
  title: "A Dream of You and Me",
  description: "hmmmm",
  user_id: future_islands.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Future%20Islands%20-%20A%20Dream%20Of%20You%20And%20Me.mp3"
)

a_dream_of_you_and_me.taggings.create!(tag: indie_tag)

seasons = Track.create!(
  title: "Seasons (Waiting on You)",
  description: "hmmmm",
  user_id: future_islands.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Future%20Islands%20-%20Seasons%20(Waiting%20On%20You).mp3"
)

canadian_tag = Tag.create!(name: "canadian")

sovereignty = Track.create!(
  title: "Sovereignty",
  description: "post-nothing",
  user_id: japandroids.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Japandroids%20-%20Sovereignty.mp3"
)

sovereignty.taggings.create!(tag: canadian_tag)

wet_hair = Track.create!(
  title: "Wet Hair",
  description: "post-nothing",
  user_id: japandroids.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Japandroids%20-%20Wet%20Hair.mp3"
)

wet_hair.taggings.create!(tag: canadian_tag)

young_hearts_spark_fires = Track.create!(
  title: "Young Hearts Spark Fires",
  description: "post-nothing",
  user_id: japandroids.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Japandroids%20-%20Young%20Hearts%20Spark%20Fire.mp3"
)

young_hearts_spark_fires.taggings.create!(tag: canadian_tag)

demon = Track.create!(
  title: "Demon",
  description: "",
  user_id: shamir.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Shamir%20-%20Demon.mp3"
)

on_the_regular = Track.create!(
  title: "On the Regular",
  user_id: shamir.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Shamir%20-%20On%20The%20Regular.mp3"
)

rock_tag = Tag.create!(name: "rock")

sit_and_cry = Track.create!(
  title: "Sit and Cry",
  user_id: sheer_mag.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/SHEER%20MAG%20-%20Sit%20and%20Cry.mp3"
)

sit_and_cry.taggings.create!(tag: rock_tag)

what_you_want = Track.create!(
  title: "What You Want",
  user_id: sheer_mag.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/SHEER%20MAG%20-%20What%20You%20Want.mp3"
)

what_you_want.taggings.create!(tag: rock_tag)


shh_tag = Tag.create!(name: "shh")

naked = Track.create!(
  title: "Henrik the Artist - Naked",
  description: "shh",
  user_id: secret_songs.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Henrik%20the%20Artist%20-%20naked.mp3"
)

naked.taggings.create!(tag: shh_tag)

flamingo = Track.create!(
  title: "Kero Kero Bonito - Flamingo",
  description: "shh",
  user_id: secret_songs.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Kero%20Kero%20Bonito%20-%20Flamingo.mp3"
)


flamingo.taggings.create!(tag: shh_tag)

since_u_asked = Track.create!(
  title: "swim good x Merival - Since You Asked",
  user_id: secret_songs.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/swim%20good%20x%20Merival%20-%20since%20u%20asked.mp3"
)

since_u_asked.taggings.create!(tag: shh_tag)

meow_tag = Tag.create!(name: "meow")

close_your_eyes = Track.create!(
  title: "Close Your Eyes and Meow To Fluff feat. Zach De La Rocha",
  description: "Meow the Jewels",
  user_id: run_the_jewels.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Run%20The%20Jewels%20-%20Close%20Your%20Eyes%20And%20Meow%20To%20Fluff%20feat.%20Zach%20De%20La%20Rocha.mp3"
)

close_your_eyes.taggings.create!(tag: meow_tag)

meowlry = Track.create!(
  title: "Meowlry",
  description: "Meow the Jewels",
  user_id: run_the_jewels.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Run%20The%20Jewels%20-%20Meowrly.mp3"
)

meowlry.taggings.create!(tag: meow_tag)

trap_tag = Tag.create!(name: "trap")

buggn = Track.create!(
  title: "Bugg'n",
  description: "trap and stuff",
  user_id: tnght.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/TNGHT%20-%20Bugg'n.mp3"
)

buggn.taggings.create!(tag: trap_tag)

goooo = Track.create!(
  title: "Goooo",
  description: "trap and stuff",
  user_id: tnght.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/TNGHT%20-%20Goooo.mp3"
)

goooo.taggings.create!(tag: trap_tag)

still_tippin = Track.create!(
  title: "Still Tippin' (Great Fairy's Fountain Remix)",
  description: "legend of zelda",
  user_id: mike_jones.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Team%20Teamwork%20-%20Slim%20Thug%20&%20Mike%20Jones%20-%20Still%20Tippin'%20(Great%20Fairy's%20Fountain).mp3"
)

bassically = Track.create!(
  title: "Bassically",
  user_id: tei_shi.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Tei%20Shi%20-%20Bassically.mp3"
)

my_better_self = Track.create!(
  title: "My Better Self",
  user_id: tennis.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Tennis%20-%20My%20Better%20Self.mp3"
)

timothy = Track.create!(
  title: "Timothy",
  user_id: tennis.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Tennis%20-%20Timothy.mp3"
)

sad_tag = Tag.create!(name: "sad_tag")

i_already_forgot_everything_you_said = Track.create!(
  title: "I Already Forgot Everything You Said",
  description: ":(",
  user_id: the_dig.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/The%20Dig%20-%20I%20Already%20Forgot%20Everything%20You%20Said.mp3"
)

i_already_forgot_everything_you_said.taggings.create!(tag: sad_tag)

heartbeats = Track.create!(
  title: "Heartbeats",
  description: "asdjfasfs",
  user_id: the_knife.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/The%20Knife%20-%20Heartbeats.mp3"
)

pass_this_on = Track.create!(
  title: "Pass This On",
  description: "asdjfasfs",
  user_id: the_knife.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/The%20Knife%20-%20Pass%20This%20On.mp3"
)

return_to_the_moon = Track.create!(
  title: "El Vy - Return to the Moon (Political Song for Didi Bloome to Sing, with Crescendo)",
  description: "pop",
  user_id: the_national.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/EL%20VY%20-%20Return%20to%20the%20Moon%20(Political%20Song%20for%20Didi%20Bloome%20to%20Sing,%20with%20Crescendo).mp3"
)

graceless = Track.create!(
  title: "Graceless",
  description: "Are you sad yet?",
  user_id: the_national.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/The%20National%20-%20Graceless.mp3"
)

exile_vilify = Track.create!(
  title: "Exile Vilify",
  user_id: the_national.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/The%20National%20-%20Exile%20Vilify%20(From%20the%20Game%20Portal%202).mp3"
)

think_you_can_wait = Track.create!(
  title: "Think You Can Wait",
  user_id: the_national.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/The%20National%20-%20Think%20You%20Can%20Wait%20(from%20the%20Film%20Win%20Win).mp3"
)

i_need_my_girl = Track.create!(
  title: "I Need My Girl",
  description: ":(",
  user_id: the_national.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/The%20National%20-%20I%20Need%20My%20Girl.mp3"
)

i_need_my_girl.taggings.create!(tag: sad_tag)

chillwave_tag = Tag.create!(name: "chillwave")

cola = Track.create!(
  title: "Cola",
  description: "chillwavez",
  user_id: toro_y_moi.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Toro%20Y%20Moi%20-%20Cola.mp3"
)

cola.taggings.create!(tag: chillwave_tag)

rose_quartz = Track.create!(
  title: "Rose Quartz",
  description: "chillwavez",
  user_id: toro_y_moi.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Toro%20Y%20Moi%20-%20Rose%20Quartz.mp3"
)

rose_quartz.taggings.create!(tag: chillwave_tag)

so_many_details = Track.create!(
  title: "So Many Details",
  description: "chillwavez",
  user_id: toro_y_moi.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Toro%20Y%20Moi%20-%20So%20Many%20Details.mp3"
)

so_many_details.taggings.create!(tag: chillwave_tag)

pitch_black = Track.create!(
  title: "Pitch Black feat. Rome Fortune",
  description: "chillwavez",
  user_id: toro_y_moi.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Toro%20y%20Moi%20-%20Pitch%20Black%20(feat.%20Rome%20Fortune).mp3"
)

want = Track.create!(
  title: "Want feat. Washed Out",
  description: "chillest of the chillwavez",
  user_id: toro_y_moi.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Toro%20y%20Moi%20-%20Want%20(feat.%20Washed%20Out).mp3"
)

dont_wanna_be_your_girl = Track.create!(
  title: "Don't Wanna Be Your Girl",
  description: "",
  user_id: wet.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Wet%20-%20Don't%20Wanna%20Be%20Your%20Girl.mp3"
)

dreams = Track.create!(
  title: "Dreams",
  description: "heuheuheuheuh",
  user_id: wet.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Wet%20-%20Dreams.mp3"
)

jai_bu = Track.create!(
  title: "J'ai Bu",
  description: "so french",
  user_id: yelle.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Yelle%20-%20J'ai%20Bu.mp3"
)

que_veux_tu = Track.create!(
  title: "Que Veux Tu",
  description: "so french",
  user_id: yelle.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Yelle%20-%20Que%20Veux-Tu.mp3"
)

seventeen = Track.create!(
  title: "17",
  description: ":)",
  user_id: youth_lagoon.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Youth%20Lagoon%20-%2017.mp3"
)

cannons = Track.create!(
  title: "Cannons",
  description: ":)",
  user_id: youth_lagoon.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Youth%20Lagoon%20-%20Cannons.mp3"
)

daydream = Track.create!(
  title: "Daydream",
  description: ":)",
  user_id: youth_lagoon.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Youth%20Lagoon%20-%20Daydream.mp3"
)

posters = Track.create!(
  title: "Posters",
  description: ":)",
  user_id: youth_lagoon.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Youth%20Lagoon%20-%20Posters.mp3"
)

fall_back = Track.create!(
  title: "Fall Back",
  description: "String Quartet and Pop Music",
  user_id: zola_jesus.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Zola%20Jesus%20-%20Fall%20Back.mp3"
)

hikikomori = Track.create!(
  title: "Hikikomori",
  description: "String Quartet and Pop Music",
  user_id: zola_jesus.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/Zola%20Jesus%20-%20Hikikomori.mp3"
)

feelin_it = Track.create!(
  title: "Feelin' It",
  description: "Electronic Dream 2",
  user_id: araabmuzik.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/araabMUZIK%20-%20Feelin'%20It.mp3"
)

outer_limits = Track.create!(
  title: "Outer Limits",
  description: "Electronic Dream 2",
  user_id: araabmuzik.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/araabMUZIK%20-%20Outer%20Limits.mp3"
)

ryde_on_da_regular = Track.create!(
  title: "Ryde on da Regular",
  description: "cheeling",
  user_id: araabmuzik.id,
  track_url: "http://dublindonut.com/Content/Sounds/transcoded/araabMUZIK%20-%20Ryde%20On%20Da%20Regular.mp3"
)
