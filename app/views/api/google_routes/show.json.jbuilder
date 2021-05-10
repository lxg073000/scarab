# json.set! @user.id do 
#   json.extract! @user, :id, :username, :email, :session_token
# end
# json.image_url asset_path()

json.extract! @gRoute, :id, :origin, :destination, :waypoints, :travelMode, :user_id, :name