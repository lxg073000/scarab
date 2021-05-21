import React, { Component } from "react";

export default class buggout_index_card extends Component {
  render() {
    return (
      <div className="component-container-main">
        <div className="route-index-shell">
          <section className="route-index-header">
            <div>
              <h1 className="bold">My Buggouts</h1>
              <h2
                className="button-orange"
                onClick={() => location.assign(`#/routes/`)}
              >
                Create New Route
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
            <div className="route-filters">
              <h2 className="button bold neutral">Cycling</h2>
              <h2 className="button bold neutral">Running</h2>
              <h2 className="button bold neutral">Walking</h2>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
