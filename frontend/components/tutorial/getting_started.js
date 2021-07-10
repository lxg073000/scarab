import React from "react";

const getting_started = (props) => {
  return (
    <div id="tutorial" className="float-card post-item getting-started">
      <i
        className="button-grey fas fa-times gs-toggle"
        onClick={() => props.dismissTutorial()}
      ></i>

      <div className="banner getting-started"></div>
      {/* <img id="getting-started" src={window.getting_started} alt="" /> */}
      <div className="getting-started-content">
        <section className="gs-header">
          <h1>Getting Started</h1>
          <h2>
            We've listed a couple of steps to help you get set up on Scarab
          </h2>
        </section>
        <section className="gs-item">
          <i className="fas fa-location-arrow gs-icon"></i>
          <div className="gs-content">
            <h2 className="bold">Create a Route</h2>
            <p className="light">
              Map a driving, cycling, or jogging route. Personalize your route
              with a name and description to reference it in your Activities.
            </p>
            <p
              className="button-orange"
              onClick={() => props.history.push(`/routes`)}
            >
              Create a Route
            </p>
          </div>
        </section>
        <section className="gs-item">
          <i className="far fa-arrow-alt-circle-up gs-icon"></i>
          <div className="gs-content">
            <h2 className="bold">Upload an Activity</h2>
            <p className="light">
              Record a run of a Route from your catalog. Track your progress by
              comparing the pace per mile and share milestones to your feed.
            </p>
            <p
              className="button-orange"
              onClick={() => props.history.push(`/activity`)}
            >
              Create an Activity
            </p>
          </div>
        </section>

        <section className="gs-item">
          <i className="fas fa-file-export gs-icon"></i>
          <div className="gs-content">
            <h2 className="bold">Create a Post</h2>
            <p className="light">
              Keep the conversation going with friends. Share your thoughts on
              your progress and future challenges.
            </p>
            <p
              className="button-orange"
              onClick={() => props.history.push(`/post`)}
            >
              Create a Post
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default getting_started;
