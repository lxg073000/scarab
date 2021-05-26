import React, { Component } from "react";

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
        google_route_id: document
          .getElementById("supply-routes")
          .value.split(",")[1],
        date_completed: document.getElementById("date-val").value,
        travelMode: document
          .getElementById("supply-routes")
          .value.split(",")[0],
        title: document.getElementById("title-val").value,
        description: document.getElementById("description-val").value,
        start_time: document.getElementById("start-val").value,
        end_time: document.getElementById("end-val").value,
      },
    };
    this.props.createBuggout(buggout);
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
            <h1 className="bold">Upload Buggout</h1>
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
                Save Buggout
              </h2>
            </section>
            <section className="right">
              <div className="supply-route-select">
                <select id="supply-routes" name="supply-routes">
                  <option value="SELECT ROUTE">SELECT ROUTE</option>
                  {routeNames.map((route, idx) => (
                    <option key={idx} value={`${route.travelMode},${route.id}`}>
                      {route.name}
                    </option>
                  ))}
                </select>
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

              <div className="supply-route-map"></div>
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default buggout_form_new;
