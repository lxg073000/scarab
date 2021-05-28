import React from "react";

const activity_feed = ({ post, deletePost }) => {
  return (
    <div key={`${post.id}-post`} className="float-card post-item">
      <section className="post-item-heading">
        <img src={window.user_pic} alt="user_pic" />
        <div className="post-item-body">
          <h3 className="bold">{post.username}</h3>
          <h4>{new Date(post.created_at).toDateString()}</h4>
          <h1 key={`${post.id}-title`} className="post-title bold">
            {post.title}
          </h1>
          <h2 key={`${post.id}-body`} className="post-body">
            {post.body}
          </h2>
        </div>
      </section>
      <section className="post-item-main">
        <i className="button-grey far fa-thumbs-up"></i>
        <i className="button-grey far fa-comment-alt"></i>
        <i
          className="button-grey fas fa-times"
          onClick={() => deletePost(post.id)}
        ></i>
      </section>
    </div>
  );
};

export default activity_feed;
