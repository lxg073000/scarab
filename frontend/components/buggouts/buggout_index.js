import React, { Component } from "react";

export default class buggout_index_card extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBuggouts();
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      // this.props.fetchBuggouts();
    }
  }

  deleteBuggout(buggoutID) {
    this.props.deleteBuggout(buggoutID);
  }

  render() {
    return (
      <div className="component-container-main">
        <div className="route-index-shell">
          <section className="route-index-header">
            <div>
              <h1 className="bold">My Buggouts</h1>
              <h2
                className="button-orange"
                onClick={() => location.assign(`#/buggout/new/`)}
              >
                Create New Buggout
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
            <h2>{this.props.buggouts.length} Activities</h2>
            <div className="float-card buggout-index-card">
              <table>
                <thead>
                  <tr>
                    <th>Transportation</th>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.buggouts.map((buggout) => (
                    <tr key={`${buggout.id}-tr`}>
                      <td key={`${buggout.id}-travelMode`}>
                        {buggout.travelMode}
                      </td>
                      <td key={`${buggout.id}-date_completed`}>
                        {buggout.date_completed}
                      </td>
                      <td
                        className="accent3 link"
                        key={`${buggout.id}-title`}
                        onClick={() =>
                          location.assign(`#/buggout/${buggout.id}`)
                        }
                      >
                        {buggout.title}
                      </td>
                      <td key={`${buggout.id}-description`}>
                        {buggout.description}
                      </td>
                      <td key={`${buggout.id}-start_time`}>
                        {buggout.start_time}
                      </td>
                      <td key={`${buggout.id}-end_time`}>{buggout.end_time}</td>
                      <td
                        className="accent3 link"
                        key={`${buggout.id}-edit`}
                        onClick={() =>
                          location.assign(`#/buggout/${buggout.id}`)
                        }
                      >
                        Edit
                      </td>
                      <td
                        className="accent3 link"
                        key={`${buggout.id}-delete`}
                        onClick={() => this.deleteBuggout(buggout.id)}
                      >
                        Delete
                      </td>
                      <td className="accent3 link" key={`${buggout.id}-share`}>
                        Share
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
