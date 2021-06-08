import React, { Component } from "react";

export default class buggout_index_card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: this.props.buggouts,
    };

    this.formatDuration = this.formatDuration.bind(this);
    this.formatTravelMode = this.formatTravelMode.bind(this);
    this.formatTime = this.formatTime.bind(this);
  }

  componentDidMount() {
    this.props.fetchBuggouts();
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      // this.props.fetchBuggouts();
      // this.sortActivities();
      this.setState({
        activities: this.props.buggouts,
      });
    }
  }

  deleteBuggout(buggoutID) {
    this.props.deleteBuggout(buggoutID);
  }

  shareBuggout(id) {
    const post = {
      post: {
        user_id: currentUser.id,
        username: currentUser.username,
        title: `I completed a ${
          document.getElementById(`${id}-travelMode`).innerHTML
        }!`,
        body: `${document.getElementById(`${id}-description`).innerHTML}`,
      },
    };
    this.props.createPost(post);
    this.props.history.push(`/dashboard`);
  }

  sortActivities_id() {
    const sortById = this.props.buggouts.sort(function (a, b) {
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
      return 0;
    });

    this.setState({
      activities: sortById,
    });
  }
  sortActivities_title() {
    const sortByTitle = this.props.buggouts.sort(function (a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      return 0;
    });

    this.setState({
      activities: sortByTitle,
    });
  }
  sortActivities_description() {
    const sortByDescription = this.props.buggouts.sort(function (a, b) {
      if (a.description.toLowerCase() < b.description.toLowerCase()) return -1;
      if (a.description.toLowerCase() > b.description.toLowerCase()) return 1;
      return 0;
    });

    this.setState({
      activities: sortByDescription,
    });
  }
  sortActivities_duration() {
    const sortByDuration = this.props.buggouts.sort(function (a, b) {
      if (a.duration < b.duration) return -1;
      if (a.duration > b.duration) return 1;
      return 0;
    });

    this.setState({
      activities: sortByDuration,
    });
  }
  sortActivities_pace() {
    const sortByPace = this.props.buggouts.sort(function (a, b) {
      if (a.pace < b.pace) return -1;
      if (a.pace > b.pace) return 1;
      return 0;
    });

    this.setState({
      activities: sortByPace,
    });
  }
  sortActivities_date_completed() {
    const sortByDate = this.props.buggouts.sort(function (a, b) {
      if (new Date(a.date_completed) < new Date(b.date_completed)) return -1;
      if (new Date(a.date_completed) > new Date(b.date_completed)) return 1;
      return 0;
    });

    this.setState({
      activities: sortByDate,
    });
  }
  sortActivities_travel_mode() {
    const sortByTravelMode = this.props.buggouts.sort(function (a, b) {
      if (a.travelMode < b.travelMode) return -1;
      if (a.travelMode > b.travelMode) return 1;
      return 0;
    });

    this.setState({
      activities: sortByTravelMode,
    });
  }

  formatDuration(durationArray) {
    console.log(durationArray);
    const formattedDuration = [];

    durationArray.forEach((dur) => {
      dur < 10
        ? formattedDuration.push("0" + dur)
        : formattedDuration.push(`${dur}`);
    });
    return formattedDuration.join(":");
  }
  formatTravelMode(travelMode) {
    console.log(travelMode);
    let formattedTravelMode = "";

    if (travelMode === "WALKING") {
      formattedTravelMode = "fas fa-running";
    } else if (travelMode === "DRIVING") {
      formattedTravelMode = "fas fa-car";
    } else {
      formattedTravelMode = "fas fa-bicycle";
    }
    return formattedTravelMode;
  }
  formatTime(startTime) {
    debugger;
    console.log(startTime);
    let formattedTime = new Date();
    formattedTime.setHours(startTime.split(":")[0]);
    formattedTime.setMinutes(startTime.split(":")[1]);
    formattedTime = formattedTime.toLocaleTimeString();

    return formattedTime;
  }

  render() {
    return (
      <div className="component-container-main">
        <div className="route-index-shell">
          <section className="route-index-header">
            <div>
              <h1 className="bold">My Activities</h1>
              <h2
                className="button-orange"
                onClick={() => this.props.history.push(`/activity`)}
              >
                Create an Activity
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
            {this.props.buggouts.length > 1 ||
            this.props.buggouts.length === 0 ? (
              <h2 onClick={() => this.sortActivities_id()} className="link">
                {this.props.buggouts.length} Activities
              </h2>
            ) : (
              <h2 onClick={() => this.sortActivities_id()} className="link">
                {this.props.buggouts.length} Activity
              </h2>
            )}

            <div className="float-card buggout-index-card">
              <table>
                <thead>
                  <tr>
                    <th
                      onClick={(e) => this.sortActivities_travel_mode()}
                      className="link button-grey"
                    >
                      Sport
                    </th>
                    <th
                      onClick={() => this.sortActivities_date_completed()}
                      className="link button-grey"
                    >
                      Date
                    </th>
                    <th
                      onClick={() => this.sortActivities_title()}
                      className="link button-grey"
                    >
                      Title
                    </th>
                    <th
                      onClick={() => this.sortActivities_description()}
                      className="link button-grey"
                    >
                      Description
                    </th>
                    <th
                      onClick={() => this.sortActivities_description()}
                      className="link button-grey"
                    >
                      Start Time
                    </th>
                    <th
                      onClick={() => this.sortActivities_duration()}
                      className="link button-grey"
                    >
                      Duration
                    </th>
                    <th
                      onClick={() => this.sortActivities_distance()}
                      className="link button-grey numeric-align"
                    >
                      Distance (mi)
                    </th>
                    <th
                      onClick={() => this.sortActivities_pace()}
                      className="link button-grey numeric-align"
                    >
                      Pace (mi / hr)
                    </th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.activities.map((buggout) => (
                    <tr key={`${buggout.id}-tr`}>
                      <td
                        key={`${buggout.id}-travelMode`}
                        id={`${buggout.id}-travelMode`}
                      >
                        <i
                          className={this.formatTravelMode(buggout.travelMode)}
                        ></i>
                      </td>
                      <td key={`${buggout.id}-date_completed`}>
                        {buggout.date_completed}
                      </td>
                      <td
                        className="accent3 link"
                        key={`${buggout.id}-title`}
                        id={`${buggout.id}-title`}
                        onClick={() =>
                          this.props.history.push(`/activity/${buggout.id}`)
                        }
                      >
                        {buggout.title}
                      </td>
                      <td
                        key={`${buggout.id}-description`}
                        id={`${buggout.id}-description`}
                      >
                        {buggout.description}
                      </td>
                      <td key={`${buggout.id}-start_time`}>
                        {this.formatTime(buggout.start_time)}
                      </td>
                      <td key={`${buggout.id}-duration`}>
                        {this.formatDuration(buggout.duration)}
                      </td>
                      <td
                        key={`${buggout.id}-distance`}
                        className="numeric-align"
                      >
                        {buggout.distance}
                      </td>
                      <td key={`${buggout.id}-pace`} className="numeric-align">
                        {buggout.pace}
                      </td>
                      <td
                        className="accent3 link"
                        key={`${buggout.id}-edit`}
                        onClick={() =>
                          this.props.history.push(
                            `/activity/${buggout.id}/edit`
                          )
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
                      <td
                        className="accent3 link"
                        key={`${buggout.id}-share`}
                        onClick={() => this.shareBuggout(buggout.id)}
                      >
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
