import React from "react";
import { formatDuration, formatTravelMode } from "../../util/conversions";

const activity_feed = ({ post, deletePost, buggout }) => {
  debugger;

  return (
    <div key={`${post.id}-post`} className="float-card post-item">
      <section className="post-item-heading">
        <div className="flex-col">
          <img src={window.user_pic} alt="user_pic" />
          {/* <i className={`${formatTravelMode(post.travelMode)}`}></i> */}
        </div>
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
        {post.buggout_id ? (
          <section className="buggout-share">
            <div className="flex">
              <div className="flex-col">
                {`${post.distance} mi`}
                <h4>Distance</h4>
              </div>
              <div className="flex-col">
                {formatDuration(post.duration)}
                <h4>Duration</h4>
              </div>
              <div className="flex-col">
                {post.pace}
                <h4>Pace</h4>
              </div>
              <div className="flex-col">
                {/* {buggout ? (
                  <i className={`${formatTravelMode(buggout.travelMode)}`}></i>
                ) : null} */}
                <h4>Sport</h4>
              </div>
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
