import React, { Component } from "react";
import RouteThumbnail from "../googleMap/route_thumbnail_container";
import { calcPace, formatTravelMode } from "../../util/conversions";

class activity_form_edit extends Component {
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
      duration: "",
    };
  }

  componentDidMount() {
    this.props.fetchActivities();
    this.props.fetchRoutes();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        ...this.props.activities[this.props.match.params.activity_id],
      });
    }
  }

  updateActivity() {
    const distance = parseFloat(
      this.props.routes[this.state.google_route_id].distance
    );
    const hr = parseFloat(document.getElementById("edit-hr-val").value / 1);
    const min = parseFloat(document.getElementById("edit-min-val").value / 1);
    const sec = parseFloat(document.getElementById("edit-sec-val").value / 1);

    const activity = {
      activity: {
        id: this.state.id,
        user_id: this.state.user_id,
        google_route_id: this.state.google_route_id,
        date_completed: document.getElementById("edit-date-val").value,
        travelMode: this.props.routes[this.state.google_route_id].travelMode,
        title: document.getElementById("edit-title-val").value,
        description: document.getElementById("edit-description-val").value,
        start_time: document.getElementById("edit-start-val").value,
        pace: calcPace(hr, min, sec, distance),
        duration: [
          parseInt(document.getElementById("edit-hr-val").value),
          parseInt(document.getElementById("edit-min-val").value),
          parseInt(document.getElementById("edit-sec-val").value),
        ],
      },
    };
    this.props.updateActivity(activity);
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
        <div className="new-activity-shell">
          <header className="activity-new">
            <h1 className="bold">Edit Activity</h1>
          </header>
          <main className="activity-details">
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
                  <h2 className="bold">Date</h2>
                  <input
                    id="edit-date-val"
                    type="date"
                    defaultValue={this.state.date_completed}
                  />
                </div>
                <div className="time-item">
                  <h2 className="bold">Time</h2>
                  <input
                    id="edit-start-val"
                    type="time"
                    defaultValue={this.state.start_time}
                  />
                </div>
                <div className="time-item">
                  <h2 className="bold">Duration</h2>
                  <div className="flex">
                    <div className="hr">
                      <input
                        id="edit-hr-val"
                        type="number"
                        maxLength="2"
                        defaultValue={this.state.duration[0]}
                      />
                    </div>
                    <div className="min">
                      <input
                        id="edit-min-val"
                        type="number"
                        maxLength="2"
                        defaultValue={this.state.duration[1]}
                      />
                    </div>
                    <div className="sec">
                      <input
                        id="edit-sec-val"
                        type="number"
                        maxLength="2"
                        defaultValue={this.state.duration[2]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="buttons-div">
                <h2
                  className="button-orange"
                  onClick={() => this.updateActivity()}
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
                {document.getElementById("edit-supply-routes") &&
                document.getElementById("edit-supply-routes").value !==
                  "SELECT ROUTE" ? (
                  <>
                    <i
                      className={formatTravelMode(
                        this.props.routes[
                          document.getElementById("edit-supply-routes").value
                        ].travelMode
                      )}
                    ></i>
                    <p className="">
                      {
                        this.props.routes[
                          document.getElementById("edit-supply-routes").value
                        ].distance
                      }
                    </p>
                  </>
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

export default activity_form_edit;
