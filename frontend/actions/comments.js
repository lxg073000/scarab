export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const CLEAR_COMMENT_ERRORS = "CLEAR_COMMENT_ERRORS";

import {
  API_fetchComments,
  API_createComment,
  API_updateComment,
  API_deleteComment,
} from "../util/comments";

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments,
});
export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment,
});
export const removeComment = (comment_id) => ({
  type: REMOVE_COMMENT,
  comment_id,
});
export const receiveCommentErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors,
});
export const clearcommentErrors = () => ({
  type: CLEAR_comment_ERRORS,
});

export const fetchComments = () =>
  function (dispatch) {
    return API_fetchComments().then(
      (comments) => dispatch(receiveComments(comments)),
      (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
    );
  };

export const createComment = (comment) =>
  function (dispatch) {
    return API_createComment(comment).then(
      (comment) => dispatch(receiveComment(comment)),
      (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
    );
  };
export const updateComment = (comment) =>
  function (dispatch) {
    return API_updateComment(comment).then(
      (comment) => dispatch(receiveComment(comment)),
      (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
    );
  };
export const deleteComment = (comment_id) =>
  function (dispatch) {
    return API_deleteComment(comment_id).then(
      (comment) => dispatch(removeComment(comment)),
      (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
    );
  };
