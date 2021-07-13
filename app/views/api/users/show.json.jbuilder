# json.set! @user.id do 
#   json.extract! @user, :id, :username, :email, :session_token
# end
# json.image_url asset_path()

json.extract! @user, :id, :username, :email, :session_token, :google_routes, :activities, :tutorial_status
# json.array! @user.google_routes do |route| json.extract! route, :name, :description end