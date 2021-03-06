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

ActiveRecord::Schema.define(version: 2018_11_21_194904) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "question_id"
    t.string "answer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["question_id"], name: "index_answers_on_question_id"
    t.index ["user_id"], name: "index_answers_on_user_id"
  end

  create_table "questions", force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "kind"
  end

  create_table "thumbs", force: :cascade do |t|
    t.bigint "thumber_id"
    t.bigint "thumbee_id"
    t.boolean "is_up"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["thumbee_id"], name: "index_thumbs_on_thumbee_id"
    t.index ["thumber_id"], name: "index_thumbs_on_thumber_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.string "city"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "avatar_url"
    t.string "email"
  end

  add_foreign_key "answers", "questions"
  add_foreign_key "answers", "users"
  add_foreign_key "thumbs", "users", column: "thumbee_id"
  add_foreign_key "thumbs", "users", column: "thumber_id"
end
