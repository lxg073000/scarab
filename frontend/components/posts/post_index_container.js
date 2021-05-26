import { connect } from "react-redux";
import {
  deletePost,
  fetchPosts,
  updatePost,
} from "../../actions/posts";
import PostIndex from "./post_index";

const mapState = (state) => {
  return {
    posts: Object.values(state.entities.posts),
  };
};
const mapDispatch = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: (postID) => dispatch(deletePost(postID)),
  updatePost: (post) => dispatch(updatePost(post)),
});

export default connect(mapState, mapDispatch)(PostIndex);
