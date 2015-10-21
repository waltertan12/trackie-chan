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
  username: "Chance the Rapper",
  email: "chance@acidrapper.com",
  password_digest: BCrypt::Password.create("password")
)

cashmere = User.create!(
  username: "CVSHMERE CVT",
  email: "cashmere@cat.com",
  password_digest: BCrypt::Password.create("password")
)

dig = User.create!(
  username: "The Dig",
  email: "dig@me.com",
  password_digest: Bcrypt::Password.create("password")
)

toro = User.create!(
  username: "Toro y Moi",
  email: "toroandme@wow.com",
  password_digest: Bcrypt::Password.create("password")
)

mike_jones = User.create!(
  username: "Who? Mike Joooonnnessss",
  email: "mike.jones@theoneandonly.com",
  password_digest: Bcrypt::Password.create("password")
)

meow_the_jewels = User.create!(
  username: "Meow the Jewels",
  email: "rtj@cool.com",
  password_digest: Bcrypt::Password.create("password")
)

owl_city = Track.create!(
  username: "Meow the Jewels",
  email: "rtj@cool.com",
  password_digest: Bcrypt::Password.create("password")
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

israel = Track.create!(
  title: "Israel (Sparring) feat. Noname Gypsy",
  description: "levioaSAAA",
  user_id: chance.id,
  track_url: "http://70mack.co/wp-content/upload/2015/08/Chance_The_Rapper_Israel_Sparring_Ft_Noname_Gypsy.mp3"
)

sunday = Track.create!(
  title: "Sunday Candy",
  description: "candy on sunday?",
  user_id: chance.id,
  track_url: "http://dl.findmp3.mobi/178525956/donnie+trumpet+the+social+experiment+sunday+candy.mp3"
)

acid = Track.create!(
  title: "Acid Rain",
  description: "i am on acid",
  user_id: chance.id,
  track_url: "http://cdn.epitonic.com/uploads/tracks/Chance_the_Rapper_-_Acid_Rain_Produced_by_Jake_One.mp3"
)

mirror = Track.create!(
  title: "Mirror Maru",
  description: "watching rap transform from a canine dominated industry ( think Snoop Dog and DMX) to a more feline one, via Meow the Jewels and Danny Brown, confirms my existence.",
  user_id: cashmere.id,
  track_url: "http://www.controlaltdelight.com/Music/Cashmere%20Cat/Mirror%20Maru.mp3"
)

with_me = Track.create!(
  title: "With Me",
  description: "asdjfkalsfjaklsf asdf asf ajdf asdf asdfj asd fiewaie ojasdi asdjf iasjdfi oasdf jasf ha dsfj ewaueha ibcxv a!!!",
  user_id: cashmere.id,
  track_url: "b.sc.egghd.com/media/06/b3/06b3cbf6f2165402ac60f51af966220f.mp3"
)

so_many_details = Track.create!(
  title: "So Many Details",
  description: "there are many details",
  user_id: toro.id,
  track_url: "http://mp3with.co/storage/mp3/f3920e2d6f00ffe4ba6df979bc9efabc/toro-y-moi-so-many-details.mp3"
)

still_tippin = Track.create!(
  title: "Still Tippin feat The Legend of Zelda",
  description: "Is the Legend Zelda?",
  user_id: mike_jones.id,
  track_url: "http://music.layer07.com/Slim_Thug&Mike_Jones-Still_Tippin-TeamTeamworkRemix.mp3"
)

meowlry = Track.create!(
  title: "Meowlry feat. BOOTS",
  description: "meow meow meow meow meow meow meow meow meow meow meow meowmeow meow meow meow meow meowmeow meow meow meow meow meow meow meow meowmeow meow meowmeow meow meowmeow meow meowmeow meow meowmeow meow meowmeow meow meowmeow meow meowmeow meow meowmeow meow meow",
  user_id: meow_the_jewels.id,
  track_url: "http://dublindonut.com/Content/Sounds/07%20-%20Meowrly.mp3"
)

close = Track.create!(
  title: "Close Your Eyes and Meow to Fluff",
  description: "meow meow meow meow meow meow meow meow meow meow meow meowmeow meow meow meow purr meow meowmeow meow meow meow meow meow meow meow meowmeow meow meowmeow meow meow MEOW purr purpur meow meow",
  user_id: meow_the_jewels.id,
  track_url: "http://dublindonut.com/Content/Sounds/04%20-%20Close%20Your%20Eyes%20And%20Meow%20To%20Fluff%20feat.%20Zach%20De%20La%20Rocha.mp3"
)

fireflies = Track.create!(
  title: "Fireflies ;)",
  description: "woof",
  user_id: owl_city.id,
  track_url: "http://wheelweb.net/dogandcatfireflypiano.mp3"
)