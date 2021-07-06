User.destroy_all
GoogleRoute.destroy_all
Activity.destroy_all
Post.destroy_all

user1 = User.create!(
  username: "Alvin",
  email: "guest@aa.com",
  password: "12345asd",
)
user2 = User.create!(
  username: "Lernard",
  email: "lernard@aa.com",
  password: "123123asd",
)

route1 = GoogleRoute.create!(
    user_id: user1.id,
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
    polyline:"cuywFxcqbMbBjAx@mClBcGfAgDb@wAL_@T@bAHd@Dp@ClAHlAJbDt@f@Pz@PNV@CNc@jAoD|C}Jz@iCz@oCxAsE`DcKt@{B",
    created_at: "2021-06-15T11:15:09.454Z"
)
route2 = GoogleRoute.create!(
    user_id: user1.id,
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
    polyline:"i}owFtbtbMzuAh{m@vvHfbg@fcAbos@wnD~~lAjiOffr@jw@dyvAryWrxtBro\zkvAp|Ffac@nrO|~d@tek@bp`Ank\teVfla@nhLpnVhu_@pj_@tbVfl`@|xPjk^~r`@naMxo\l`Rx{P|l[l{Ody~@hgs@z_e@zpOtv]fh]v|v@jbt@lfsAvv`Cf|e@jalAfiBrif@rsTbj]bjLni~AbyTfkeAt}{@zyyClkxAtzcEjz@lx_ArqHtuYtxOtmdBa_FralAmg`@je~@iaKt|]{@~oj@vnCfzc@idJre[{uAh{n@|zExerBto@lgWljLvlSwOruWb~Ihff@|zNxyp@lzU|fkB`v_@zsqC|zWbhjAdeUfkUxwOd|b@|ta@zh_AqpFz}VjxJfjBgxBhcl@jqB~ll@bgPfwi@`sTvnhAr}Nhyp@xwHny_ClkC`zg@jlG|mIb`Ptp]xyTv_q@xq`@z|d@jv_Ancu@pldAzxzAvqXvct@jbNha_@`^lgZxyFlbdA~ye@n_bAz|Kbzf@aMdm[rxB`c_AbyBjdeBlpk@xvjA|~P|c\~}Oaw@p{FbxN|lElqVfrXdQv_q@vaIrfc@rae@nyo@ntDxbl@rhAxde@vnRhkc@hhQlq[f}XvjpApwo@zfj@ytArf[vjJdeIdnFwg@|b]fkCpcdAvv@ltQcvLblIvyHrrt@{lJxyj@clBrxm@g}@dgkAujXns]svPvdY~xCfaUpkHzcg@kjWr|}AivQjweAw`BjfrAsxFhtz@wwEvsd@wnRzn\w{Dzlt@t~@tj`AalPlicDmnTlhlB`fGnahCmmQp{rA_vNn}p@`|EjeZqmGrb\_wN|wLw~_@`hj@qqz@h|cAc}D|zWiu}@p_Rsn[dlV`\ld]dcFjk{Ak~DxjmAfoMtscBueFpu^awNtmYcoEzp_@drVj{p@iuEti\_kPdgpAzlGfdh@rh}@hgmAp`Cdjn@uzUvudA_obAzveA{_p@||s@m`Rfxa@{|VvbMc~}@dql@and@vvMs|H~nSjLvgt@vbDjbt@kmOvjnA_}Rfy{Bu`H|qaBnjJjozCixQnw`ApwEj}pBg|H|jv@sqWniq@kcNzqc@dWjv^gkE~{g@uiS`f]kgK~qEebDxhOhv@jqv@laBzpq@{`DjmhAkjUzbm@ojt@|ph@sju@nil@k|a@jdKul~@vi`AqcbA`~mAwleAdu}@ql}Bfq{BkwaAnsu@e_w@vsa@q{l@xg]}dh@fr{@h{FzpzAgiAzoQudJrzCu}I~oZ|rH|ji@",
)
route3 = GoogleRoute.create!( 
    user_id: user1.id,
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
    polyline:"ensvFxrtbMfBODAE@cBNj@_FHu@ViDXeFHqDBuFC}COkDSaEYoDYsCQoAs@wEqAgHe@mCaDeP_@_CQgBm@gKOaEEiG@gCHeHFgCLoDNmCj@{Gv@cIVqBP_CDsC?cBE_BKgAWwA[kA[o@a@o@",
    created_at: "2021-06-15T12:02:50.689Z",
)
route4 = GoogleRoute.create!(
    user_id: user1.id,
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
    polyline:"w{{wFlymbM^{@Je@Dk@@YG_AWmAOa@OYU[i@e@_Ak@e@ScAWgAIw@Pe@^Yb@Qd@Oz@@dA@XLf@Tp@v@nAr@r@\Th@\t@Xf@Fh@Dp@MLG",
    created_at: "2021-06-15T12:04:04.030Z",
)

activity1 = Activity.create!(
        "user_id": user1.id,
        "google_route_id": route3.id,
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

activity2 = Activity.create!(
        "user_id": user1.id,
        "google_route_id": route1.id,
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
activity3 = Activity.create!(
        "user_id": user1.id,
        "google_route_id": route2.id,
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
activity4 = Activity.create!(
        "user_id": user1.id,
        "google_route_id": route4.id,
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
activity5 = Activity.create!(
        "user_id": user1.id,
        "google_route_id": route1.id,
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

          
post1 = Post.create!(
        "google_route_id": route3.id,
        "activity_id": activity1.id,
        "pace": "2:55",
        "duration": [
            0,
            5,
            30
        ],
        "distance": "1.89",
        "travelMode": "BICYCLING",
        "comment_id": [],
        "user_id": user1.id,
        "title": "Sunset Ride",
        "body": "Beautiful Day",
        "created_at": "2021-06-15T13:31:14.360Z",
        "username": "Alvin"
          )
post2 = Post.create!(
        "google_route_id": route2.id,
        "activity_id": activity3.id,
        "pace": "0:42",
        "duration": [
            40,
            40,
            0
        ],
        "distance": "3509.57",
        "travelMode": "DRIVING",
        "comment_id": [],
        "user_id": user1.id,
        "title": "Road Trip!",
        "body": "Made it in record time",
        "created_at": "2021-06-15T13:31:27.275Z",
        "username": "Alvin"
          )
post3 = Post.create!(
        "google_route_id": route1.id,
        "activity_id": activity2.id,
        "pace": "14:04",
        "duration": [
            0,
            13,
            30
        ],
        "distance": "0.96",
        "travelMode": "WALKING",
        "comment_id": [],
        "user_id": user1.id,
        "title": "After work Jog",
        "body": "Took it easy",
        "created_at": "2021-06-15T13:31:39.757Z",
        "username": "Alvin"
          )
post4 = Post.create!(
        "google_route_id": route4.id,
        "activity_id": activity4.id,
        "pace": "9:48",
        "duration": [
            0,
            5,
            0
        ],
        "distance": "0.51",
        "travelMode": "WALKING",
        "comment_id": [],
        "user_id": user1.id,
        "title": "Round and Round",
        "body": "Saw a duck",
        "created_at": "2021-06-15T13:31:49.568Z",
        "username": "Alvin"
          )
post5 = Post.create!(
        "google_route_id": "",
        "activity_id": "",
        "pace": "",
        "duration": "",
        "distance": "",
        "travelMode": "",
        "comment_id": [],
        "user_id": user1.id,
        "title": "Daily Affirmation",
        "body": "You miss 100% of the shots you don't take...",
        "created_at": "2021-06-15T13:33:30.071Z",
        "username": "Alvin"
)



