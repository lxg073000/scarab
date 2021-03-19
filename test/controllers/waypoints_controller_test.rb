require 'test_helper'

class WaypointsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get waypoints_index_url
    assert_response :success
  end

  test "should get create" do
    get waypoints_create_url
    assert_response :success
  end

end
