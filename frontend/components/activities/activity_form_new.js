import React, { Component } from "react";
import RouteThumbnail from "../googleMap/route_thumbnail_container";
import { calcPace, formatTravelMode } from "../../util/conversions";

class activity_form_new extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeNames: [],
    };
  }

  componentDidMount() {
    this.props.fetchActivities();
    this.props.fetchRoutes();
  }

  submitActivity() {
    const distance = parseFloat(
      this.props.routes[this.state.google_route_id].distance
    );
    const hr = parseFloat(document.getElementById("hr-val").value / 1);
    const min = parseFloat(document.getElementById("min-val").value / 1);
    const sec = parseFloat(document.getElementById("sec-val").value / 1);

    const activity = {
      activity: {
        user_id: currentUser.id,
        google_route_id: this.state.google_route_id,
        date_completed: document.getElementById("date-val").value,
        travelMode: this.props.routes[this.state.google_route_id].travelMode,
        distance: this.props.routes[this.state.google_route_id].distance,
        title: document.getElementById("title-val").value,
        description: document.getElementById("description-val").value,
        start_time: document.getElementById("start-val").value,
        pace: calcPace(hr, min, sec, distance),
        duration: [
          parseInt(document.getElementById("hr-val").value),
          parseInt(document.getElementById("min-val").value),
          parseInt(document.getElementById("sec-val").value),
        ],
      },
    };

    this.props.createActivity(activity);
    this.props.history.push(`/activities`);
  }
  updateSelected(e) {
    this.setState({
      google_route_id: e.target.value,
    });
  }

  getPace(start, end) {}

  render() {
    const routeNames = [];
    for (const [key, value] of Object.entries(this.props.routes)) {
      routeNames.push(value);
    }

    return (
      <div className="component-container-main">
        <div className="new-activity-shell">
          <header className="activity-new">
            <h1 className="bold">Upload Activity</h1>
          </header>
          <main className="activity-details">
            <section className="left">
              <h2 className="bold">Title</h2>
              <input id="title-val" type="text" className="text" />
              <h2 className="bold">Description</h2>
              <input id="description-val" type="text" className="text" />
              <div className="time">
                <div className="time-item">
                  <h2 className="bold">Date</h2>
                  <input id="date-val" type="date" />
                </div>
                <div className="time-item">
                  <h2 className="bold">Time</h2>
                  <input id="start-val" type="time" />
                </div>
                <div className="time-item">
                  <h2 className="bold">Duration</h2>
                  <div className="flex">
                    <div className="hr">
                      <input
                        id="hr-val"
                        type="number"
                        maxLength="2"
                        placeholder="00"
                      />
                    </div>
                    <div className="min">
                      <input
                        id="min-val"
                        type="number"
                        maxLength="2"
                        placeholder="00"
                      />
                    </div>
                    <div className="sec">
                      <input
                        id="sec-val"
                        type="number"
                        maxLength="2"
                        placeholder="00"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h2
                className="button-orange"
                onClick={() => this.submitActivity()}
              >
                Save Activity
              </h2>
            </section>
            <section className="right">
              <div className="supply-route-select">
                <select
                  id="new-supply-routes"
                  name="new-supply-routes"
                  onChange={(e) => this.updateSelected(e)}
                >
                  <option value={undefined}>SELECT ROUTE</option>
                  {routeNames.map((route, idx) => (
                    <option key={idx} value={route.id}>
                      {route.name}
                    </option>
                  ))}
                </select>
                {document.getElementById("new-supply-routes") &&
                document.getElementById("new-supply-routes").value !==
                  "SELECT ROUTE" ? (
                  <>
                    <i
                      className={formatTravelMode(
                        this.props.routes[
                          document.getElementById("new-supply-routes").value
                        ].travelMode
                      )}
                    ></i>
                    <p className="">
                      {
                        this.props.routes[
                          document.getElementById("new-supply-routes").value
                        ].distance
                      }
                    </p>
                  </>
                ) : null}
              </div>

              {document.getElementById("new-supply-routes") &&
              document.getElementById("new-supply-routes").value ? (
                <RouteThumbnail
                  route={
                    this.props.routes[
                      document.getElementById("new-supply-routes").value
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

export default activity_form_new;
