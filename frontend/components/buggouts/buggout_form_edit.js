import React, { Component } from "react";
import RouteThumbnail from "../googleMap/route_thumbnail_container";

class buggout_form_edit extends Component {
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
      end_time: "",
    };
  }

  componentDidMount() {
    this.props.fetchBuggouts();
    this.props.fetchRoutes();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        ...this.props.buggouts[this.props.match.params.activity_id],
      });
    }
  }

  updateBuggout() {
    const buggout = {
      buggout: {
        id: this.state.id,
        user_id: this.state.user_id,
        google_route_id: this.state.google_route_id,
        date_completed: document.getElementById("edit-date-val").value,
        travelMode: this.props.routes[this.state.google_route_id].travelMode,
        title: document.getElementById("edit-title-val").value,
        description: document.getElementById("edit-description-val").value,
        start_time: document.getElementById("edit-start-val").value,
        end_time: document.getElementById("edit-end-val").value,
      },
    };
    this.props.updateBuggout(buggout);
    this.setState({}, this.props.history.push("/activities/"));
  }

  updateSelected(e) {
    this.setState({
      google_route_id: e.target.value,
    });
  }

  render() {
    const routeNames = [];
    for (const [key, value] of Object.entries(this.props.routes)) {
      routeNames.push(value);
    }

    return (
      <div className="component-container-main">
        <div className="new-buggout-shell">
          <header className="buggout-new">
            <h1 className="bold">Edit Activity</h1>
          </header>
          <main className="buggout-details">
            <section className="left">
              <h2 className="bold">Title</h2>
              <input
                id="edit-title-val"
                type="text"
                className="text"
                defaultValue={this.state.title}
              />
              <h2 className="bold">Description</h2>
              <input
                id="edit-description-val"
                type="text"
                className="text"
                defaultValue={this.state.description}
              />
              <div className="time">
                <div className="time-item">
                  <h2 className="bold">Date Completed</h2>
                  <input
                    id="edit-date-val"
                    type="date"
                    defaultValue={this.state.date_completed}
                  />
                </div>
                <div className="time-item">
                  <h2 className="bold">Start Time</h2>
                  <input
                    id="edit-start-val"
                    type="time"
                    defaultValue={this.state.start_time}
                  />
                </div>
                <div className="time-item">
                  <h2 className="bold">End Time</h2>
                  <input
                    id="edit-end-val"
                    type="time"
                    defaultValue={this.state.end_time}
                  />
                </div>
              </div>
              <div className="buttons-div">
                <h2
                  className="button-orange"
                  onClick={() => this.updateBuggout()}
                >
                  Update Activity
                </h2>
                <h2
                  className="button-white"
                  onClick={() => this.props.history.push("/activities")}
                >
                  Discard Changes
                </h2>
              </div>
            </section>
            <section className="right">
              <div className="supply-route-select">
                <select
                  id="edit-supply-routes"
                  name="supply-routes"
                  value={this.state.google_route_id.toString()}
                  onChange={(e) => this.updateSelected(e)}
                >
                  <option value={undefined}>SELECT ROUTE</option>
                  {routeNames.map((route, idx) => (
                    <option key={idx} value={route.id}>
                      {route.name}
                    </option>
                  ))}
                </select>
                {document.getElementById("edit-supply-routes") ? (
                  <i
                    className={
                      document
                        .getElementById("edit-supply-routes")
                        .value.split(",")[1]
                    }
                  ></i>
                ) : null}
              </div>

              {document.getElementById("edit-supply-routes") &&
              document.getElementById("edit-supply-routes").value ? (
                <RouteThumbnail
                  route={
                    this.props.routes[
                      document.getElementById("edit-supply-routes").value
                    ]
                  }
                />
              ) : null}
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default buggout_form_edit;
