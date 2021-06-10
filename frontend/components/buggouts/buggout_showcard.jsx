import React, { Component } from "react";
import RouteThumbnail from "../googleMap/route_thumbnail_container";

export default class buggout_index_card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      user_id: "",
      google_route_id: "",
      date_completed: "",
      travelMode: "",
      title: "",
      description: "",
      start_time: "",
      pace: "",
    };
  }

  componentDidMount() {
    this.props.fetchBuggouts();
    this.props.fetchRoutes();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        ...this.props.buggouts[this.props.match.params.activity],
      });
    }
  }

  render() {
    return (
      <div className="component-container-main">
        <div className="new-buggout-shell">
          <header className="buggout-new">
            {this.props.routes[this.state.google_route_id] ? (
              <h1 className="bold">{`Your Activity on ${
                this.props.routes[this.state.google_route_id].name
              }`}</h1>
            ) : (
              <h1 className="bold">{`Your Activity on...`}</h1>
            )}
          </header>
          <main className="buggout-details">
            <section className="left">
              <h2 className="bold">Title</h2>
              <input
                id="title-val"
                type="text"
                className="text"
                defaultValue={this.state.title}
                disabled
              />
              <h2 className="bold">Description</h2>
              <input
                id="description-val"
                type="text"
                className="text"
                defaultValue={this.state.description}
                disabled
              />
              <div className="time">
                <div className="time-item">
                  <h2 className="bold">Date</h2>
                  <input
                    id="date-val"
                    type="date"
                    defaultValue={this.state.date_completed}
                    disabled
                  />
                </div>
                <div className="time-item">
                  <h2 className="bold">Time</h2>
                  <input
                    id="start-val"
                    type="time"
                    defaultValue={this.state.start_time}
                    disabled
                  />
                </div>
                <div className="time-item">
                  <h2 className="bold">Pace</h2>
                  <input
                    id="pace-val"
                    type="text"
                    value={`${this.state.pace} / mi`}
                    disabled
                  />
                </div>
              </div>
              <div className="buttons-div">
                <h2
                  className="button-orange"
                  onClick={() =>
                    this.props.history.push(`/activity/${this.state.id}/edit`)
                  }
                >
                  Edit Activity
                </h2>
                <h2
                  className="button-white"
                  onClick={() => this.props.history.push(`/activities`)}
                >
                  Cancel
                </h2>
              </div>
            </section>
            <section className="right">
              <div className="supply-route-select">
                {document.getElementById("supply-routes") ? (
                  <i
                    className={
                      document
                        .getElementById("supply-routes")
                        .value.split(",")[1]
                    }
                  ></i>
                ) : null}
              </div>

              {this.state.google_route_id &&
              this.state.google_route_id !== "" ? (
                <RouteThumbnail
                  route={this.props.routes[this.state.google_route_id]}
                />
              ) : null}
            </section>
          </main>
        </div>
      </div>
    );
  }
}
