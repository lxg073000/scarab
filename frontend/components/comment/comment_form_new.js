import { useSelector, useDispatch } from "react-redux";
import { createComment } from "../../actions/comments";
import React, { useState } from "react";

const Comment = ({ post, comments }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.currentUser.id);
  const [body, setBody] = useState("");

  function handleSubmit(e, body, post_id, post_user_id) {
    e.preventDefault();
    const comment = {
      body,
      commenter_id: currentUser,
      post_id,
      post_user_id,
    };
    dispatch(createComment({ comment }));
    setBody("");
  }

  return (
    <form
      id={`comment-field-${post.id}`}
      className="comment-form shrink"
      onSubmit={(e) => handleSubmit(e, body, post.id, post.user_id)}
    >
      <input
        className="comment-field"
        type="text"
        onChange={(e) => setBody(e.target.value)}
        value={body}
      />
    </form>
  );
};

export default Comment;
