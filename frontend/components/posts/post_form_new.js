import React, { Component } from "react";

class post_form_new extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeNames: [],
    };
  }

  submitPost() {
    const post = {
      post: {
        user_id: currentUser.id,
        username: currentUser.username,
        title: document.getElementById("new-post-title-val").value,
        body: document.getElementById("new-post-body-val").value,
      },
    };
    this.props.createPost(post);
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div className="component-container-main">
        <div className="new-post-shell">
          <header className="post-new">
            <h1 className="bold">New Post</h1>
          </header>
          <main className="post-details">
            <section className="heading">
              <div className="heading-left">
                <div className="profile-pic">
                  <img src={window.user_pic} alt="user_pic" />
                </div>
                <div className="heading-title">
                  <p>Posting As</p>
                  <h1>{currentUser.username}</h1>
                </div>
              </div>
              <div className="heading-right">
                <p
                  className="button-white"
                  onClick={() => this.props.history.push("/dashboard")}
                >
                  Discard
                </p>
                <p className="button-orange" onClick={() => this.submitPost()}>
                  Publish
                </p>
              </div>
            </section>
            <section className="post-input">
              <input
                type="text"
                id="new-post-title-val"
                className="text"
                placeholder="Add a title (optional)"
              />
              <textarea
                id="new-post-body-val"
                className="textarea"
                placeholder="What's going on?"
              />
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default post_form_new;
