# json.set! @user.id do 
#   json.extract! @user, :id, :username, :email, :session_token
# end
# json.image_url asset_path()

json.array! @users, :id, :username, :email, :session_token, :google_routes, :tutorial_status