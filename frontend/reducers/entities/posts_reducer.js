import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from "../../actions/posts";
import { LOGOUT_CURRENT_USER } from "../../actions/session";

const PostsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_POSTS:
      nextState = Object.assign({}, nextState, action.posts);
      return action.posts;
    case RECEIVE_POST:
      nextState = Object.assign({}, nextState, {
        [action.post.id]: action.post,
      });
      return nextState;
    case REMOVE_POST:
      delete nextState[action.post_id.id];
      return nextState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default PostsReducer;
