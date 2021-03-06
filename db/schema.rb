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

ActiveRecord::Schema.define(version: 2021_07_12_232533) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "activities", force: :cascade do |t|
    t.integer "google_route_id"
    t.string "title"
    t.string "description"
    t.string "date_completed"
    t.string "start_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.string "travelMode"
    t.integer "duration", array: true
    t.decimal "distance"
    t.string "pace"
  end

  create_table "comments", force: :cascade do |t|
    t.string "body"
    t.integer "post_user_id"
    t.integer "post_id"
    t.datetime "created_at"
    t.integer "user_id"
  end

  create_table "google_routes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "name", null: false
    t.string "travelMode", default: "WALKING"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "waypoints", default: [], array: true
    t.string "description"
    t.string "zoom"
    t.string "center"
    t.string "distance"
    t.string "duration"
    t.string "polyline"
    t.index ["user_id"], name: "index_google_routes_on_user_id"
  end

  create_table "posts", force: :cascade do |t|
    t.integer "user_id"
    t.integer "activity_id"
    t.integer "google_route_id"
    t.integer "integer"
    t.string "pace"
    t.integer "duration", array: true
    t.decimal "distance"
    t.string "travelMode"
    t.integer "like_id", default: [], array: true
    t.string "username"
    t.string "title"
    t.string "body"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string "polyline"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "tutorial_status"
    t.index ["email"], name: "index_users_on_email"
    t.index ["username"], name: "index_users_on_username"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
