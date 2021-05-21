import React, { Component } from "react";
import Footer from "../nav/footer_white";
import { Link } from "react-router-dom";
// import WaypointManager from "../../util/waypoint_manager";
import Route from "./route_showcard_container";

export default class route_index_card extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCurrentUserRoutes(this.props.match.params.user_id);
  }

  componentDidUpdate(prevProps) {
    // console.log(prevProps);
    // console.log(this.props);
    if (prevProps.match.params.user_id !== this.props.match.params.user_id) {
      this.props.fetchCurrentUserRoutes(this.props.match.params.user_id);
    }
  }

  render() {
    return (
      <div className="route-index-shell">
        <section className="route-index-header">
          <div>
            <h1 className="bold">My Routes</h1>
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
          <div className="route-index-items">
            {this.props.routes.map((route, idx) => (
              <Route route={route} key={idx} />
            ))}
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
