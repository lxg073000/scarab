import React from "react";
import Comment from "../comment/comment_form_new";
import { formatDuration, formatTravelMode } from "../../util/conversions";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../../actions/comments";
import { encodeOptions, options } from "../../util/map_options";

const activity_feed = ({ post, deletePost }) => {
  const comments = useSelector((state) => state.entities.comments);
  const dispatch = useDispatch(fetchComments());

  return (
    <div key={`${post.id}-post`} className="float-card post-item">
      <section className="post-item-heading">
        <div className="flex-col">
          <img className="user-pic" src={window.user_pic} alt="user_pic" />
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
        {post.activity_id ? (
          <section className="activity-share">
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
      {post.polyline ? (
        <img
          className="activity-map"
          src={`https://maps.googleapis.com/maps/api/staticmap
?size=628x262
&${encodeOptions(options)}path=color:0xfc4d02ff|weight:3|enc:${
            post.polyline
          }&key=${window.googleAPIKey}`}
          alt=""
        />
      ) : null}

      <section className="post-item-main">
        {/* <input
          type="text"
          className="comment-field shrink"
          id={`comment-field-${post.id}`}
        /> */}
        <Comment
          post={post}
          comments={comments}
          dispatch={dispatch}
          // handleSubmit={(e, comment) => handleComment(e, comment)}
        />

        <i
          className="button-grey far fa-thumbs-up"
          onClick={(e) => e.target.classList.toggle("selected")}
        ></i>
        <i
          className="button-grey far fa-comment-alt"
          onClick={() =>
            document
              .getElementById(`comment-field-${post.id}`)
              .classList.toggle("grow")
          }
        ></i>
        <i
          className="button-grey fas fa-times"
          onClick={() => deletePost(post.id)}
        ></i>
      </section>
    </div>
  );
};

export default activity_feed;
