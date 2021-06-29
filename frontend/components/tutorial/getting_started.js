import React from "react";

const getting_started = (props) => {
  return (
    <div className="float-card post-item getting-started">
      <banner className="getting-started"></banner>
      {/* <img id="getting-started" src={window.getting_started} alt="" /> */}
      <div className="getting-started-content">
        <section className="gs-header">
          <h1>Getting Started</h1>
          <h2>
            We've listed a couple of steps to help you get set up on Scarab
          </h2>
        </section>
        <section className="gs-item">
          <i
            className="far fa-arrow-alt-circle-up gs-icon"
            onClick={() => props.history.push(`/activity`)}
          ></i>
          <div className="gs-content">
            <h2 className="bold">Upload Activity</h2>
            <p className="light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              reiciendis iusto odit veniam sapiente adipisci.
            </p>
            <p className="button-orange">Create an Activity</p>
          </div>
        </section>
        <section className="gs-item">
          <i
            className="fas fa-location-arrow gs-icon"
            onClick={() => props.history.push(`/routes`)}
          ></i>
          <div className="gs-content">
            <h2 className="bold">Create a Route</h2>
            <p className="light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              reiciendis iusto odit veniam sapiente adipisci.
            </p>
            <p className="button-orange">Create a Route</p>
          </div>
        </section>
        <section className="gs-item">
          <i
            className="fas fa-location-arrow gs-icon"
            onClick={() => props.history.push(`/post`)}
          ></i>
          <div className="gs-content">
            <h2 className="bold">Create a Post</h2>
            <p className="light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              reiciendis iusto odit veniam sapiente adipisci.
            </p>
            <p className="button-orange">Create a Post</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default getting_started;
