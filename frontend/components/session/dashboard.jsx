import React, { Component } from "react";
import Tutorial from "../tutorial/getting_started";
import UserInfo from "../user/user_profile_card";
import Activity from "../activity/activity_feed";
import About from "../nav/about";
import { merge } from "lodash";

export default class dashboard extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    // this.props.fetchUser(this.props.currentUser);
    // this.props.fetchTutorialStatus();
    this.props.fetchActivities();
    this.props.fetchRoutes();
    this.props.fetchComments();
    this.props.fetchPosts().then(() => {
      let posts = merge([], this.props.posts).sort(function (a, b) {
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
        return 0;
      });

      this.setState({
        posts,
      });
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      let posts = merge([], this.props.posts).sort(function (a, b) {
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
        return 0;
      });

      this.setState({
        posts,
      });
    }
    if (prevProps.comments.length !== this.props.comments.length) {
      this.props.fetchPosts().then(() => {
        let posts = merge([], this.props.posts).sort(function (a, b) {
          if (a.id > b.id) return -1;
          if (a.id < b.id) return 1;
          return 0;
        });

        this.setState({
          posts,
        });
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
    debugger;
    return (
      <div className="component-container-feed">
        <div className="dashboard-shell">
          <div className="dashboard-container">
            <section className="user-pane">
              <UserInfo
                activities={this.props.activities}
                routes={this.props.routes}
                to_activities={() => this.props.history.push("/activities")}
              />
            </section>
            <section className="activity-pane">
              <Tutorial
                history={this.props.history}
                toggleTutorial={(tutorialStatus) =>
                  this.props.toggleTutorial(tutorialStatus)
                }
                tutorialStatus={this.props.tutorialStatus}
              />

              {this.state.posts.map((post) => (
                <Activity
                  key={post.id}
                  post={post}
                  route={
                    post.google_route_id
                      ? this.props.routes[post.google_route_id]
                      : null
                  }
                  activity={this.props.activities}
                  deletePost={this.props.deletePost}
                />
              ))}
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
