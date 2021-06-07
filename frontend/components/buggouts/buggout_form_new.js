import React, { Component } from "react";
import RouteThumbnail from "../googleMap/route_thumbnail_container";

class buggout_form_new extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeNames: [],
    };
  }

  componentDidMount() {
    this.props.fetchBuggouts();
    this.props.fetchRoutes();
  }

  submitBuggout() {
    const buggout = {
      buggout: {
        user_id: currentUser.id,
        google_route_id: this.state.google_route_id,
        date_completed: document.getElementById("date-val").value,
        travelMode: this.props.routes[this.state.google_route_id].travelMode,
        title: document.getElementById("title-val").value,
        description: document.getElementById("description-val").value,
        start_time: document.getElementById("start-val").value,
        end_time: document.getElementById("end-val").value,
      },
    };
    this.props.createBuggout(buggout);
    this.props.history.push(`/activities`);
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
            <h1 className="bold">Upload Activity</h1>
          </header>
          <main className="buggout-details">
            <section className="left">
              <h2 className="bold">Title</h2>
              <input id="title-val" type="text" className="text" />
              <h2 className="bold">Description</h2>
              <input id="description-val" type="text" className="text" />
              <div className="time">
                <div className="time-item">
                  <h2 className="bold">Date Completed</h2>
                  <input id="date-val" type="date" />
                </div>
                <div className="time-item">
                  <h2 className="bold">Start Time</h2>
                  <input id="start-val" type="time" />
                </div>
                <div className="time-item">
                  <h2 className="bold">End Time</h2>
                  <input id="end-val" type="time" />
                </div>
              </div>
              <h2
                className="button-orange"
                onClick={() => this.submitBuggout()}
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
                  <p
                    className={
                      document.getElementById("new-supply-routes").value
                    }
                  >
                    {
                      this.props.routes[
                        document.getElementById("new-supply-routes").value
                      ].travelMode
                    }
                  </p>
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

export default buggout_form_new;
