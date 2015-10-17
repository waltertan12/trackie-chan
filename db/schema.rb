# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151017225717) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string   "body",              null: false
    t.integer  "user_id",           null: false
    t.integer  "track_id",          null: false
    t.integer  "parent_comment_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "comments", ["track_id"], name: "index_comments_on_track_id", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "followings", force: :cascade do |t|
    t.integer  "follower_id", null: false
    t.integer  "followed_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "followings", ["followed_id"], name: "index_followings_on_followed_id", using: :btree
  add_index "followings", ["follower_id", "followed_id"], name: "index_followings_on_follower_id_and_followed_id", unique: true, using: :btree
  add_index "followings", ["follower_id"], name: "index_followings_on_follower_id", using: :btree

  create_table "likings", force: :cascade do |t|
    t.integer  "user_id",      null: false
    t.integer  "likable_id",   null: false
    t.string   "likable_type", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "likings", ["likable_id"], name: "index_likings_on_likable_id", using: :btree
  add_index "likings", ["likable_type"], name: "index_likings_on_likable_type", using: :btree
  add_index "likings", ["user_id", "likable_id", "likable_type"], name: "index_likings_on_user_id_and_likable_id_and_likable_type", unique: true, using: :btree
  add_index "likings", ["user_id"], name: "index_likings_on_user_id", using: :btree

  create_table "taggings", force: :cascade do |t|
    t.integer  "taggable_id"
    t.string   "taggable_type"
    t.integer  "tag_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "taggings", ["tag_id"], name: "index_taggings_on_tag_id", using: :btree
  add_index "taggings", ["taggable_id"], name: "index_taggings_on_taggable_id", using: :btree
  add_index "taggings", ["taggable_type", "taggable_id", "tag_id"], name: "index_taggings_on_taggable_type_and_taggable_id_and_tag_id", unique: true, using: :btree
  add_index "taggings", ["taggable_type"], name: "index_taggings_on_taggable_type", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "tags", ["name"], name: "index_tags_on_name", using: :btree

  create_table "tracks", force: :cascade do |t|
    t.string   "title",                       null: false
    t.text     "description"
    t.integer  "user_id",                     null: false
    t.string   "track_url",                   null: false
    t.string   "image_url"
    t.boolean  "private",     default: false, null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  add_index "tracks", ["user_id"], name: "index_tracks_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                   null: false
    t.string   "email",                                                      null: false
    t.string   "password_digest",                                            null: false
    t.string   "session_token",                                              null: false
    t.string   "image_url",       default: "http://i.imgur.com/AZuwasa.jpg", null: false
    t.datetime "created_at",                                                 null: false
    t.datetime "updated_at",                                                 null: false
    t.boolean  "admin",           default: false
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
