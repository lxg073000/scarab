import { connect } from "react-redux";
import {
  clearSessionErrors,
  receiveCurrentUser,
  fetchUser,
  dismissTutorial,
  toggleTutorial,
} from "../../actions/session";
import Dashboard from "./dashboard";
import { fetchRoutes } from "../../actions/gRoute";
import { fetchActivities } from "../../actions/activities";
import { fetchPosts, deletePost } from "../../actions/posts";
import { fetchComments, deleteComment } from "../../actions/comments";

const mapState = (state) => {
  return {
    currentUser: state.session.currentUser,
    activities: Object.values(state.entities.activities),
    routes: Object.values(state.entities.routes),
    posts: Object.values(state.entities.posts),
    comments: Object.values(state.entities.comments),
    tutorialStatus: state.entities.tutorialStatus,
  };
};
const mapDispatch = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (postID) => dispatch(deletePost(postID)),
    fetchComments: () => dispatch(fetchComments()),
    deleteComment: (commentID) => dispatch(deleteComment(commentID)),
    fetchRoutes: () => dispatch(fetchRoutes()),
    fetchActivities: () => dispatch(fetchActivities()),
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    dismissTutorial: () => dispatch(dismissTutorial()),
    toggleTutorial: (status) => dispatch(toggleTutorial(status)),
  };
};

export default connect(mapState, mapDispatch)(Dashboard);
