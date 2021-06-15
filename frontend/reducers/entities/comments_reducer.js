import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
} from "../../actions/comments";
import { LOGOUT_CURRENT_USER } from "../../actions/session";

const PostsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      nextState = Object.assign({}, nextState, action.comments);
      return action.comments;
    case RECEIVE_COMMENT:
      nextState = Object.assign({}, nextState, {
        [action.comment.id]: action.comment,
      });
      return nextState;
    case REMOVE_COMMENT:
      delete nextState[action.comment_id.id];
      return nextState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default PostsReducer;
