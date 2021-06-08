import React, { Component } from "react";
import UserInfo from "../user/user_profile_card";
import Activity from "../activity/activity_feed_container";
import About from "../nav/about";

export default class dashboard extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser);
    this.props.fetchRoutes();
    this.props.fetchBuggouts();
    this.props.fetchPosts();
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const posts = this.props.posts.sort(function (a, b) {
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
        return 0;
      });

      this.setState({
        posts,
      });
    }
  }

  deletePost(postID) {
    this.props.deletePost(postID);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="component-container-feed">
        <div className="dashboard-shell">
          <div className="dashboard-container">
            <section className="user-pane">
              <UserInfo
                buggouts={this.props.buggouts}
                routes={this.props.routes}
                to_activities={() => this.props.history.push("/activities")}
              />
            </section>
            <section className="activity-pane">
              {Object.entries(this.props.posts).length > 0 ? (
                this.state.posts.map((post) => (
                  <Activity
                    key={post.id}
                    post={post}
                    deletePost={this.props.deletePost}
                  />
                ))
              ) : (
                <p className="float-card post-item"></p>
              )}
            </section>
            <section className="about-pane">
              <About />
            </section>
          </div>
        </div>
      </div>
    );
  }
}
