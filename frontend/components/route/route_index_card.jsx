import React, { Component } from "react";
import Route from "./route_showcard_container";

export default class route_index_card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: Object.values(this.props.routes),
      filter: "",
    };

    this.filterRoutes = this.filterRoutes.bind(this);
    this.filterRoutes = this.filterRoutes.bind(this);
  }

  componentDidMount() {
    this.props.fetchCurrentUserRoutes(this.props.match.params.user_id);
    this.setState({
      routes: {
        ...Object.values(this.props.routes),
      },
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.user_id !== this.props.match.params.user_id) {
      this.props.fetchCurrentUserRoutes(this.props.match.params.user_id);
    }
  }

  filterRoutes(travelMode) {
    let filtered = this.props.routes.filter(
      (activity) => activity.travelMode === travelMode
    );

    filtered = Object.values(filtered);

    this.setState({
      routes: {
        ...filtered,
      },
    });
  }

  filterResults(filter) {
    switch (filter) {
      case "WALKING":
        this.props.fetchCurrentUserRoutes_walking(
          this.props.match.params.user_id
        );
        this.setState({
          filter: "WALKING",
        });
        break;
      case "BICYCLING":
        this.props.fetchCurrentUserRoutes_bicycling(
          this.props.match.params.user_id
        );
        this.setState({
          filter: "BICYCLING",
        });
        break;
      case "DRIVING":
        this.props.fetchCurrentUserRoutes_driving(
          this.props.match.params.user_id
        );
        this.setState({
          filter: "DRIVING",
        });
        break;
      default:
        this.props.fetchCurrentUserRoutes(this.props.match.params.user_id);
        this.setState({
          filter: "",
        });
        break;
    }
  }

  render() {
    return (
      <div className="component-container-main">
        <div className="route-index-shell">
          <section className="route-index-header">
            <div>
              <h1 className="bold">My Routes</h1>
              <h2
                className="button-orange"
                onClick={() => this.props.history.push(`/routes/`)}
              >
                Create New Route
              </h2>
            </div>
            <div>
              <p>
                Learn more about me by visiting my{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://lernardgrigsby.github.io/"
                >
                  {" "}
                  <span className="link accent3">personal portfolio.</span>
                </a>{" "}
              </p>
              <img src={window.device_routes} alt="" className="" />
            </div>
          </section>
          <section className="route-index-routes">
            <div className="route-filters">
              <h2
                className={`button bold neutral ${
                  this.state.filter === "" ? "selected-accent" : null
                }`}
                onClick={() => this.filterResults()}
              >
                All
              </h2>
              <h2
                className={`button bold neutral ${
                  this.state.filter === "BICYCLING" ? "selected-accent" : null
                }`}
                onClick={() => this.filterResults("BICYCLING")}
              >
                Cycling
              </h2>
              <h2
                className={`button bold neutral ${
                  this.state.filter === "DRIVING" ? "selected-accent" : null
                }`}
                onClick={() => this.filterResults("DRIVING")}
              >
                Driving
              </h2>
              <h2
                className={`button bold neutral ${
                  this.state.filter === "WALKING" ? "selected-accent" : null
                }`}
                onClick={() => this.filterResults("WALKING")}
              >
                Running
              </h2>
            </div>
            <div className="route-index-items">
              {Object.values(this.props.routes).map((route, idx) => (
                <Route route={route} key={idx} />
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }
}
