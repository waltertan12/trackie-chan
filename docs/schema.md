# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
image_url       | string    | not null

## followings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
follower_id     | integer   | not null, foreign key (references user), indexed
following_id    | integer   | not null, foreign key (references user), indexed

## songs
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
title         | string    | not null
description   | text      | 
user_id       | integer   | not null, foreign key (references users), indexed
song_url      | string    | not null
transcode_url | string    | not null
image_url     | string    | not null
private       | boolean   | not null, default: false
file_size     | float     | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tag_name    | string    | not null

## taggings
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
parent_comment_id | integer   | indexed

## commentings
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
commentable_id    | integer   | not null, foreign key (references commentable object), indexed
commentable_type  | string    | not null
comment_id        | integer   | not null, foreign key (references comment), indexed

## likings
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, foreign key (references user), indexed
likable_id    | integer   | not null, foreign key (references likable object), indexed, unique [likable_type, likable_id, user_id]
likable_type  | string    | not null

## playlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references user), indexed
title       | string    | not null
description | text      | not null

## playlistings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
song_id     | integer   | not null, foreign key (references song), indexed, unique [playlist_id]
playlist_id | integer   | not null, foreign key (references playlist), indexed