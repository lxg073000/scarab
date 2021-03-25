FactoryBot.define do
  factory :google_route do
    userId { 1 }
    origin { "MyString" }
    destination { "MyString" }
    waypoints { "MyString" }
    string_array { "MyString" }
    travelMode { "MyString" }
  end
end
