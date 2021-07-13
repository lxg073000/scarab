import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import RoutesReducer from "./routes_reducer";
import ActivitiesReducer from "./activites_reducer";
import PostsReducer from "./posts_reducer";
import CommentsReducer from "./comments_reducer";
import TutorialStatus from "./tutorials_reducer";

const EntitiesReducer = combineReducers({
  user: UsersReducer,
  routes: RoutesReducer,
  activities: ActivitiesReducer,
  posts: PostsReducer,
  comments: CommentsReducer,
  tutorialStatus: TutorialStatus,
});

export default EntitiesReducer;
