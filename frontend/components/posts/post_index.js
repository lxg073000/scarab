import React, { Component } from "react";

export default class post_index_card extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      // this.props.fetchPosts();
    }
  }

  deletePost(postID) {
    this.props.deletePost(postID);
  }

  render() {
    return (
      <div className="component-container-main">
        <div className="route-index-shell">
          <section className="route-index-header">
            <div>
              <h1 className="bold">My Posts</h1>
              <h2
                className="button-orange"
                onClick={() => this.props.history.push(`/post`)}
              >
                Create New Post
              </h2>
            </div>
            <div>
              <p>
                Learn more about{" "}
                <span className="link accent3">sharing & exporting routes</span>{" "}
                to a variety of devices.
              </p>
              <img src={window.device_routes} alt="" className="" />
            </div>
          </section>
          <section className="route-index-routes">
            <h2>{this.props.posts.length} Activities</h2>
            <div className="float-card post-index-card">
              <table>
                <thead>
                  <tr>
                    <th>Transportation</th>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.posts.map((post) => (
                    <tr key={`${post.id}-tr`}>
                      <td key={`${post.id}-travelMode`}>{post.travelMode}</td>
                      <td key={`${post.id}-date_completed`}>
                        {post.date_completed}
                      </td>
                      <td
                        className="accent3 link"
                        key={`${post.id}-title`}
                        onClick={() =>
                          this.props.history.push(`/post/${post.id}`)
                        }
                      >
                        {post.title}
                      </td>
                      <td key={`${post.id}-description`}>{post.description}</td>
                      <td key={`${post.id}-start_time`}>{post.start_time}</td>
                      <td key={`${post.id}-end_time`}>{post.end_time}</td>
                      <td
                        className="accent3 link"
                        key={`${post.id}-edit`}
                        onClick={() =>
                          this.props.history.push(`/post/${post.id}`)
                        }
                      >
                        Edit
                      </td>
                      <td
                        className="accent3 link"
                        key={`${post.id}-delete`}
                        onClick={() => this.deletePost(post.id)}
                      >
                        Delete
                      </td>
                      <td className="accent3 link" key={`${post.id}-share`}>
                        Share
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
