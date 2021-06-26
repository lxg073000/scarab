# SCARAB
<a href="https://scarab-fsp.herokuapp.com/#/splash!">SIGN UP with Scarab</a> and map custom routes wherever your travels might take you!  Create driving, cycling, or jogging paths that compare estimated travel times against your actual traversal.  Save your progress in your Activity Log or share milestones to your Dashboard Feed.  And with a soon to be released feature, members will be able to keep the conversation going by following friends and commenting on their progress!

<img src="https://wallpaperaccess.com/full/4720771.jpg" alt="">

### Contents
- [Technologies](#technologies)
- [Features](#features)
  - Persistent Sessions
  - Dynamic Google Map Directions
  - Strava Route Activity Tracking
  - Filtered Results for Maps and Activities
  - Polished Pixel Perfect CSS
  - Responsive Breakpoints

## Technologies ##

- Google Maps JavaScript API - Handle DOM display of map and marking
- Google Directions API - Receive client request and generate dynamic path for cycling, driving, and jogging
- Google Maps Static API - Fetch static map paths to reduce billing overhead for site requests to Google Services

## Features ##
### Dynamic Route Mapping
- Google Map APIs power Strava's core functionality. To begin, a marker is added to the Google Map DOM element by clicking at a desired location.  After two markers are registered, a GoogleDirections API call is made and a path is rendered.  The path redraws dynamically with each additional marker added and can then be saved and viewed from the My Routes page.
**<img src="https://github.com/lxg073000/scarab/blob/main/readme_assets/scarab_new_route.gif" width="100%"/>**
- GoogleMap DOM element is created with event listens to receieve client input and convert to GoogleMap Markers.
**<img src="https://github.com/lxg073000/scarab/blob/main/readme_assets/cs_mapNode.png"/>**
- Markers passed to GoogleServices API and render directions for client's route.
- **<img src="https://github.com/lxg073000/scarab/blob/main/readme_assets/cs_calcRoute.png"/>**
- Client's Route, name, and description have full CRUD functionality.

### Strava Route Activity Tracking
- Clients log Activities by selecting a Route associated with their travel.  Uploaded Activities are logged with a title, description, date, time, and duration.
- The Pace per mile is calculated and can be sorted within the index for easy viewing.
### Polished Pixel Perfect CSS
- Original Vanilla CSS / SASS written provide the App's frontend with styling heavily inspired by Strava's production site
- Google Map features and landmarks styled to match App
