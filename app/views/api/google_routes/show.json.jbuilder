# json.set! @user.id do 
#   json.extract! @user, :id, :username, :email, :session_token
# end
# json.image_url asset_path()

json.extract! @gRoute, :id, :user_id, :name, :description, :waypoints, :travelMode, :distance, :duration, :center, :zoom 