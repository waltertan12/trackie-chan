# Schema Information

## user
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
image_url       | string    | not null

## following
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
follower_id     | integer   | not null, foreign key (references user), indexed
following_id    | integer   | not null, foreign key (references user), indexed

## track
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
title         | string    | not null
description   | text      | 
user_id       | integer   | not null, foreign key (references users), indexed
track_url     | string    | not null
transcode_url | string    | not null
image_url     | string    | not null
private       | boolean   | not null, default: false
file_size     | float     | not null
plays         | integer   | not null

## tag
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tag_name    | string    | not null

## tagging
column name   | data type | details
--------------|-----------|----------
id            | integer   | not null, primary key
taggable_id   | integer   | not null, foreign key (references taggable object), indexed, unique [taggable_id, taggable_type, tag_id]
taggable_type | string    | not null
tag_id        | integer   | not null, foreign key (references tags), indexed

## comments
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
body              | text      | not null
user_id           | integer   | not null, foreign key (references user), indexed
track_id          | integer   | not null, foreign key (references a track), indexed
parent_comment_id | integer   | indexed

## liking
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, foreign key (references user), indexed
likable_id    | integer   | not null, foreign key (references likable object), indexed, unique [likable_type, likable_id, user_id]
likable_type  | string    | not null

## playlist
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references user), indexed
title       | string    | not null
description | text      | not null

## playlisting
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id     | integer   | not null, foreign key (references track), indexed, unique [playlist_id]
playlist_id | integer   | not null, foreign key (references playlist), indexed

## feedings
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, foreign key (references users), indexed true
source_id     | integer   | not null, foreign key (references source object), indexed true
source_type   | string    | not null, indexed, unique [user_id, source_id, source_type]
rank          | float     | not null