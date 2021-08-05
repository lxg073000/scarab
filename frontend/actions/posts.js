export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const CLEAR_POST_ERRORS = "CLEAR_POST_ERRORS";

import {
  API_fetchPosts,
  API_createPost,
  API_updatePost,
  API_deletePost,
} from "../util/posts";

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts,
});
export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post,
});
export const removePost = (post) => ({
  type: REMOVE_POST,
  post,
});
export const receivePostErrors = (errors) => ({
  type: RECEIVE_POST_ERRORS,
  errors,
});
export const clearpostErrors = () => ({
  type: CLEAR_post_ERRORS,
});

export const fetchPosts = () =>
  function (dispatch) {
    return API_fetchPosts().then(
      (posts) => dispatch(receivePosts(posts)),
      (errors) => dispatch(receivePostErrors(errors.responseJSON))
    );
  };

export const createPost = (post) =>
  function (dispatch) {
    return API_createPost(post).then(
      (post) => dispatch(receivePost(post)),
      (errors) => dispatch(receivePostErrors(errors.responseJSON))
    );
  };
export const updatePost = (post) =>
  function (dispatch) {
    return API_updatePost(post).then(
      (post) => dispatch(receivePost(post)),
      (errors) => dispatch(receivePostErrors(errors.responseJSON))
    );
  };
export const deletePost = (post_id) =>
  function (dispatch) {
    return API_deletePost(post_id).then(
      (post) => dispatch(removePost(post)),
      (errors) => dispatch(receivePostErrors(errors.responseJSON))
    );
  };
