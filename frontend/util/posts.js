export const API_fetchPosts = () =>
  $.ajax({
    method: "GET",
    url: "/api/posts",
  });
export const API_createPost = (post) =>
  $.ajax({
    method: "POST",
    url: `/api/posts`,
    data: post,
  });
export const API_updatePost = function (post) {
  return $.ajax({
    method: "PATCH",
    url: `/api/posts/${post.post.id}`,
    data: post,
  });
};
export const API_deletePost = function (post_id) {
  return $.ajax({
    method: "DELETE",
    url: `/api/posts/${post_id}`,
  });
};
