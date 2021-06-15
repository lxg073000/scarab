import { combineReducers } from "redux";
import SessionErrorsReducer from "./session_errors_reducer";
import GoogleRouteErrors from "./google_route_errors_reducer";
import ActivityErrors from "./activity_errors_reducer";
import PostErrors from "./post_errors_reducer";
import CommentErrors from "./comment_errors_reducer";

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  googleRoute: GoogleRouteErrors,
  activity: ActivityErrors,
  post: PostErrors,
  comment: CommentErrors,
});

export default ErrorsReducer;
