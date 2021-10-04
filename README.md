# SCARAB
<a href="https://scarab-fsp.herokuapp.com/#/splash!">SIGN UP with Scarab</a> and map custom routes wherever your travels might take you!  Create driving, cycling, or jogging paths that compare estimated travel times against your actual traversal.  Save your progress in your Activity Log or share milestones to your Dashboard Feed.  And with a soon to be released feature, members will be able to keep the conversation going by following friends and commenting on their progress!



### Contents
- [Technologies](#technologies)
- [Features](#features)
  - Persistent Sessions
  - Dynamic Google Map Directions
  - Scarab Route Activity Tracking
  - Filtered Results for Maps and Activities
  - Polished Pixel Perfect CSS
  - Responsive Breakpoints

<h2 id="technologies">Technologies</h2>


- Google Maps JavaScript API - Handle DOM display of map and marking
- Google Directions API - Receive client request and generate dynamic path for cycling, driving, and jogging
- Google Maps Static API - Fetch static map paths to reduce billing overhead for site requests to Google Services

<h2 id="features">Features</h2>

<h3>Dynamic Route Mapping</h3>

- Google Map APIs power Scarab's core functionality. To begin, a marker is added to the Google Map DOM element by clicking at a desired location.  After two markers are registered, a GoogleDirections API call is made and a path is rendered.  The path redraws dynamically with each additional marker added and can then be saved and viewed from the My Routes page.
- **<img src="https://github.com/lxg073000/scarab/blob/main/readme_assets/scarab_new_route.gif" width="100%" list-style="none"/>**
- GoogleMap DOM element is created with event listens to receieve client input and convert to GoogleMap Markers.
- **<img src="https://github.com/lxg073000/scarab/blob/main/readme_assets/cs_mapNode.png" width="100%" list-style="none"/>**
- Markers passed to GoogleServices API and render directions for client's route.
- **<img src="https://github.com/lxg073000/scarab/blob/main/readme_assets/cs_calcRoute.png" width="100%" list-style="none"/>**

<h3>Scarab Route Activity Tracking</h3>

- Clients log Activities by selecting a Route associated with their travel.  Uploaded Activities are logged with a title, description, date, time, and duration.
- The Pace per mile is calculated and can be sorted within the index for easy viewing.

<h3>Polished Pixel Perfect CSS</h3>

- Original Vanilla CSS / SASS written provide the App's frontend with styling inspired by Strava's production site
- Google Map features and landmarks styled to match App
