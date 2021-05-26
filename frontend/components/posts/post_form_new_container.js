import { connect } from "react-redux";
import { fetchPosts, createPost } from "../../actions/posts";
import { fetchCurrentUserRoutes } from "../../actions/gRoute";
import PostNew from "./post_form_new";

const mapState = (state) => {
  return {
    posts: state.entities.posts,
    routes: state.entities.routes,
  };
};
const mapDispatch = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchRoutes: () => dispatch(fetchCurrentUserRoutes()),
  createPost: (post) => dispatch(createPost(post)),
});

export default connect(mapState, mapDispatch)(PostNew);
