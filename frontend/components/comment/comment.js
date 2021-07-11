import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteComment } from "../../actions/comments";

const comment = ({ comment }) => {
  const dispatch = useDispatch();
  function handleDelete(commentID) {
    debugger;
    dispatch(deleteComment(commentID));
  }
  debugger;
  return (
    <div className="Comment">
      <img src={window.user_pic} alt="user-pic" className="Comment_userImg" />
      <div className="Comment_body">
        <h1 className="Comment_body_username">{comment.user.username}</h1>
        <p className="Comment_body_text">{comment.body}</p>
      </div>
      <ul className="Comment_details">
        <li className="Comment_details_date">
          {new Date(comment.created_at).toLocaleDateString()}
        </li>
        <li
          className="Comment_details_delete link accent"
          onClick={() => handleDelete(comment.id)}
        >
          Delete
        </li>
      </ul>
    </div>
  );
};

export default comment;
