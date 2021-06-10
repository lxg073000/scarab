import React from "react";
import { formatDuration, formatTravelMode } from "../../util/conversions";

const activity_feed = ({ post, deletePost, buggout }) => {
  debugger;

  return (
    <div key={`${post.id}-post`} className="float-card post-item">
      <section className="post-item-heading">
        <div className="flex-col">
          <img src={window.user_pic} alt="user_pic" />
        </div>
        <div className="post-item-body">
          <section className="headline">
            <h3 className="bold">{post.username}</h3>
            <h4>{new Date(post.created_at).toDateString()}</h4>
            <h1 key={`${post.id}-title`} className="post-title bold">
              {post.title}
            </h1>
          </section>
          <section className="body">
            <h2 key={`${post.id}-body`} className="post-body">
              {post.body}
            </h2>
          </section>
        </div>
        {post.buggout_id ? (
          <section className="buggout-share">
            <div className="flex-col">
              <i className={`${formatTravelMode(post.travelMode)} post-bg`}></i>
              <div className="flex-col">
                <p>
                  {post.distance}
                  <span className="numeric-label">mi</span>
                </p>
                <h4>Distance</h4>
              </div>
              <div className="flex-col">
                <p>{formatDuration(post.duration)}</p>
                <h4>Duration</h4>
              </div>
              <div className="flex-col">
                <p>
                  {post.pace} <span className="numeric-label">/mi</span>
                </p>
                <h4 className="pace">Pace</h4>
              </div>
              <div
                className={`${formatTravelMode(
                  post.travelMode
                )}-post-bg-img post-background`}
              ></div>
            </div>
          </section>
        ) : null}
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
