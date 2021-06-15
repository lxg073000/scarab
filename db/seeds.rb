User.destroy_all
GoogleRoute.destroy_all
Activity.destroy_all
Post.destroy_all

User.create!(
  username: "Alvin",
  email: "guest@aa.com",
  password: "12345asd",
)
User.create!(
  username: "Lernard",
  email: "lernard@aa.com",
  password: "123123asd",
)

GoogleRoute.create!(
    id: 1,
    user_id: 1,
    name: "Nine to Five",
    description: "9th to 5th Avenue ;)",
    waypoints: [
        "40.76893071931956, -73.9846566772461",
        "40.7603496625335, -73.9743569946289"
    ],
    travelMode: "WALKING",
    distance: "0.96 mi",
    duration: "19 min",
    center: "40.764735,-73.9797",
    zoom: "16",
    created_at: "2021-06-15T11:15:09.454Z"
)
GoogleRoute.create!(
    id: 2,
    user_id: 1,
    name: "Best Coast to West Coast",
    description: "Stop home to see Mom",
    waypoints: [
        "40.719030344425974, -73.99983831624616",
        "30.218706763380627, -97.74142650357608",
        "37.776021066300984, -122.51926315849492"
    ],
    travelMode: "DRIVING",
    distance: "3509.57 mi",
    duration: "52 hr 25 min",
    center: "35.632727,-98.25666",
    zoom: "5",
    created_at: "2021-06-15T11:57:32.570Z",
)
GoogleRoute.create!( 
    id: 3,
    user_id: 1,
    name: "Coney Island Express",
    description: "Beach Day",
    waypoints: [
        "40.5733042465577, -74.00254949801983",
        "40.57509707945788, -73.9687751221043"
    ],
    travelMode: "BICYCLING",
    distance: "1.89 mi",
    duration: "10 min",
    center: "40.574105,-73.98571",
    zoom: "15",
    created_at: "2021-06-15T12:02:50.689Z",
)
GoogleRoute.create!(
    id: 4,
    user_id: 1,
    name: "Central Park Oval",
    description: "Laps at the Great Lawn",
    waypoints: [
        "40.78026834926073, -73.967757661833",
        "40.78146398564737, -73.96514430747963",
        "40.78170141631918, -73.96772725621572",
        "40.78043230929511, -73.96789557937623"
    ],
    travelMode: "WALKING",
    distance: "0.51 mi",
    duration: "10 min",
    center: "40.78133,-73.966565",
    zoom: "18",
    created_at: "2021-06-15T12:04:04.030Z",
)

Activity.create!(
        "id": 1,
        "user_id": 1,
        "google_route_id": 3,
        "title": "Sunset Ride",
        "description": "Beautiful Day",
        "travelMode": "BICYCLING",
        "distance": "1.89",
        "date_completed": "2021-04-05",
        "start_time": "17:45",
        "pace": "2:55",
        "duration": [
            0,
            5,
            30
        ],
        "created_at": "2021-06-15T13:13:41.647Z"
          )

Activity.create!(
        "id": 2,
        "user_id": 1,
        "google_route_id": 1,
        "title": "After work Jog",
        "description": "Took it easy",
        "travelMode": "WALKING",
        "distance": "0.96",
        "date_completed": "2021-06-11",
        "start_time": "17:15",
        "pace": "14:04",
        "duration": [
            0,
            13,
            30
        ],
        "created_at": "2021-06-15T13:15:14.402Z"
          )
Activity.create!(
        "id": 3,
        "user_id": 1,
        "google_route_id": 2,
        "title": "Road Trip!",
        "description": "Made it in record time",
        "travelMode": "DRIVING",
        "distance": "3509.57",
        "date_completed": "2021-06-01",
        "start_time": "10:00",
        "pace": "0:42",
        "duration": [
            40,
            40,
            0
        ],
        "created_at": "2021-06-15T13:16:56.384Z"
          )
Activity.create!(
        "id": 4,
        "user_id": 1,
        "google_route_id": 4,
        "title": "Round and Round",
        "description": "Saw a duck",
        "travelMode": "WALKING",
        "distance": "0.51",
        "date_completed": "2021-06-15",
        "start_time": "14:00",
        "pace": "9:48",
        "duration": [
            0,
            5,
            0
        ],
        "created_at": "2021-06-15T13:17:40.200Z"
          )
Activity.create!(
        "id": 5,
        "user_id": 1,
        "google_route_id": 1,
        "title": "Work hard play hard!",
        "description": "SPRINTTTT BABY",
        "travelMode": "WALKING",
        "distance": "0.96",
        "date_completed": "2021-06-12",
        "start_time": "17:15",
        "pace": "2:52",
        "duration": [
            0,
            2,
            45
        ],
        "created_at": "2021-06-15T13:23:50.817Z"
          )

          
Post.create!(
        "id": 1,
        "google_route_id": 3,
        "activity_id": 1,
        "pace": "2:55",
        "duration": [
            0,
            5,
            30
        ],
        "distance": "1.89",
        "travelMode": "BICYCLING",
        "comment_id": [],
        "user_id": 1,
        "title": "Sunset Ride",
        "body": "Beautiful Day",
        "created_at": "2021-06-15T13:31:14.360Z",
        "username": "Alvin"
          )
Post.create!(
        "id": 2,
        "google_route_id": 2,
        "activity_id": 3,
        "pace": "0:42",
        "duration": [
            40,
            40,
            0
        ],
        "distance": "3509.57",
        "travelMode": "DRIVING",
        "comment_id": [],
        "user_id": 1,
        "title": "Road Trip!",
        "body": "Made it in record time",
        "created_at": "2021-06-15T13:31:27.275Z",
        "username": "Alvin"
          )
Post.create!(
        "id": 3,
        "google_route_id": 1,
        "activity_id": 2,
        "pace": "14:04",
        "duration": [
            0,
            13,
            30
        ],
        "distance": "0.96",
        "travelMode": "WALKING",
        "comment_id": [],
        "user_id": 1,
        "title": "After work Jog",
        "body": "Took it easy",
        "created_at": "2021-06-15T13:31:39.757Z",
        "username": "Alvin"
          )
Post.create!(
        "id": 5,
        "google_route_id": 4,
        "activity_id": 4,
        "pace": "9:48",
        "duration": [
            0,
            5,
            0
        ],
        "distance": "0.51",
        "travelMode": "WALKING",
        "comment_id": [],
        "user_id": 1,
        "title": "Round and Round",
        "body": "Saw a duck",
        "created_at": "2021-06-15T13:31:49.568Z",
        "username": "Alvin"
          )
Post.create!(
        "id": 6,
        "google_route_id": "",
        "activity_id": "",
        "pace": "",
        "duration": "",
        "distance": "",
        "travelMode": "",
        "comment_id": [],
        "user_id": 1,
        "title": "Daily Affirmation",
        "body": "You miss 100% of the shots you don't take...",
        "created_at": "2021-06-15T13:33:30.071Z",
        "username": "Alvin"
)



