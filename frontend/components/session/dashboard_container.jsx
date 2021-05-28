import { connect } from "react-redux";
import {
  clearSessionErrors,
  receiveCurrentUser,
  fetchUser,
} from "../../actions/session";
import Dashboard from "./dashboard";
import { fetchRoutes } from "../../actions/gRoute";
import { fetchBuggouts } from "../../actions/buggouts";
import { fetchPosts, deletePost } from "../../actions/posts";

const mapState = (state) => {
  return {
    currentUser: state.session.currentUser,
    buggouts: Object.values(state.entities.buggouts),
    routes: Object.values(state.entities.routes),
    posts: Object.values(state.entities.posts),
  };
};
const mapDispatch = (dispatch) => ({
  fetchUser: (userID) => dispatch(fetchUser(userID)),
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: (postID) => dispatch(deletePost(postID)),
  fetchRoutes: () => dispatch(fetchRoutes()),
  fetchBuggouts: () => dispatch(fetchBuggouts()),
  receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(mapState, mapDispatch)(Dashboard);
