# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.destroy_all
Waypoint.destroy_all

guest = User.create!(
  username: "guest",
  email: "guest@AA.com",
  password: "password123",
)
guest = User.create!(
  username: "lxg073000",
  email: "lxg073000@gmail.com",
  password: "go_student_go",
)

appAcademy = Waypoint.create!(
  lat: 40.73643250966783, 
  lng: -73.99377074412097,
  description: "App Academy"
)
unionSquarePark = Waypoint.create!( 
  lat: 40.7358926917223,
  lng: -73.99051847696211,
  description: "Union Square Park"
)
empireStateBuilding = Waypoint.create!( 
  lat: 40.74920997089295,
  lng: -73.98556184796365,
  description: "Empire State Building"
)
highLine = Waypoint.create!( 
  lat: 40.74975215884578,
  lng: -74.00483546264266,
  description: "The High Line"
)



