import React, { Component } from "react";

export default class buggout_index_card extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBuggouts();
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
            <div className="float-card">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date Completed</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                  </tr>
                </thead>
                {this.props.buggouts.map((buggout) => (
                  <tbody key={`${buggout.id}-tbody`}>
                    <tr key={`${buggout.id}-tr`}>
                      <td key={`${buggout.id}-title`}>{buggout.title}</td>
                      <td key={`${buggout.id}-description`}>
                        {buggout.description}
                      </td>
                      <td key={`${buggout.id}-date_completed`}>
                        {buggout.date_completed}
                      </td>
                      <td key={`${buggout.id}-start_time`}>
                        {buggout.start_time}
                      </td>
                      <td key={`${buggout.id}-end_time`}>{buggout.end_time}</td>
                      <td className="accent link" key={`${buggout.id}-edit`}>
                        Edit
                      </td>
                      <td className="accent link" key={`${buggout.id}-delete`}>
                        Delete
                      </td>
                      <td className="accent link" key={`${buggout.id}-share`}>
                        Share
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
