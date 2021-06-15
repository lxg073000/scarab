import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import WaypointsReducer from "./waypoints_reducer";
import RoutesReducer from "./routes_reducer";
import BuggoutsReducer from "./buggouts_reducer";
import PostsReducer from "./posts_reducer";
import CommentsReducer from "./comments_reducer";

const EntitiesReducer = combineReducers({
  user: UsersReducer,
  waypoints: WaypointsReducer,
  routes: RoutesReducer,
  buggouts: BuggoutsReducer,
  posts: PostsReducer,
  comments: CommentsReducer,
});

export default EntitiesReducer;
