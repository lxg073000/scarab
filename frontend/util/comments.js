export const API_fetchComments = () =>
  $.ajax({
    method: "GET",
    url: "/api/comments",
  });
export const API_createComment = function (comment) {
  return $.ajax({
    method: "POST",
    url: `/api/comments`,
    data: comment,
  });
};
export const API_updateComment = function (comment) {
  return $.ajax({
    method: "PATCH",
    url: `/api/comments/${comment.comment.id}`,
    data: comment,
  });
};
export const API_deleteComment = function (comment_id) {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${comment_id}`,
  });
};
