import React, { Component } from "react";
import { formatDuration } from "../../util/conversions";

export default class activity_index_card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: [],
    };

    this.formatDuration = this.formatDuration.bind(this);
    this.formatTravelMode = this.formatTravelMode.bind(this);
    this.formatTime = this.formatTime.bind(this);
  }

  componentDidMount() {
    this.props.fetchActivities();
    let activities = {};
    this.props.activities.map(
      (activity) => (activities[activity.id] = activity)
    );
    this.setState(
      {
        activities,
      },
      this.sortActivities_id()
    );
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      let activities = {};
      this.props.activities.map(
        (activity) => (activities[activity.id] = activity)
      );
      this.setState(
        {
          activities,
        },
        this.sortActivities_id()
      );
    }
  }

  deleteActivity(activityID) {
    this.props.deleteActivity(activityID);
  }

  shareActivity(id) {
    const post = {
      post: {
        activity_id: id,
        google_route_id: this.state.activities[id].google_route_id,
        user_id: currentUser.id,
        username: currentUser.username,
        title: this.state.activities[id].title,
        body: this.state.activities[id].description,
        pace: this.state.activities[id].pace,
        duration: this.state.activities[id].duration,
        distance: this.state.activities[id].distance,
        travelMode: this.state.activities[id].travelMode,
      },
    };
    this.props.createPost(post);
    this.props.history.push(`/dashboard`);
  }

  sortActivities_id() {
    const sortById = this.props.activities.sort(function (a, b) {
      if (a.id > b.id) return -1;
      if (a.id < b.id) return 1;
      return 0;
    });

    this.setState({
      activities: sortById,
    });
  }
  sortActivities_title() {
    const sortByTitle = this.props.activities.sort(function (a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      return 0;
    });

    this.setState({
      activities: sortByTitle,
    });
  }
  sortActivities_description() {
    const sortByDescription = this.props.activities.sort(function (a, b) {
      if (a.description.toLowerCase() < b.description.toLowerCase()) return -1;
      if (a.description.toLowerCase() > b.description.toLowerCase()) return 1;
      return 0;
    });

    this.setState({
      activities: sortByDescription,
    });
  }
  sortActivities_start_time() {
    const sortByStartTime = this.props.activities.sort(function (a, b) {
      if (a.start_time < b.start_time) return -1;
      if (a.start_time > b.start_time) return 1;
      return 0;
    });

    this.setState({
      activities: sortByStartTime,
    });
  }
  sortActivities_duration() {
    const sortByDuration = this.props.activities.sort(function (a, b) {
      if (a.duration < b.duration) return -1;
      if (a.duration > b.duration) return 1;
      return 0;
    });

    this.setState({
      activities: sortByDuration,
    });
  }
  sortActivities_distance() {
    const sortByDistance = this.props.activities.sort(function (a, b) {
      if (a.distance < b.distance) return -1;
      if (a.distance > b.distance) return 1;
      return 0;
    });

    this.setState({
      activities: sortByDistance,
    });
  }
  sortActivities_pace() {
    const sortByPace = this.props.activities.sort(function (a, b) {
      if (a.pace < b.pace) return -1;
      if (a.pace > b.pace) return 1;
      return 0;
    });

    this.setState({
      activities: sortByPace,
    });
  }
  sortActivities_date_completed() {
    const sortByDate = this.props.activities.sort(function (a, b) {
      if (new Date(a.date_completed) < new Date(b.date_completed)) return -1;
      if (new Date(a.date_completed) > new Date(b.date_completed)) return 1;
      return 0;
    });

    this.setState({
      activities: sortByDate,
    });
  }
  sortActivities_travel_mode() {
    const sortByTravelMode = this.props.activities.sort(function (a, b) {
      if (a.travelMode < b.travelMode) return -1;
      if (a.travelMode > b.travelMode) return 1;
      return 0;
    });

    this.setState({
      activities: sortByTravelMode,
    });
  }

  formatDuration(durationArray) {
    const formattedDuration = [];

    durationArray.forEach((dur) => {
      dur < 10
        ? formattedDuration.push("0" + dur)
        : formattedDuration.push(`${dur}`);
    });
    return formattedDuration.join(":");
  }
  formatTravelMode(travelMode) {
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
    let formattedTime = new Date();
    formattedTime.setHours(startTime.split(":")[0]);
    formattedTime.setMinutes(startTime.split(":")[1]);
    formattedTime = formattedTime.toLocaleTimeString();

    return `${formattedTime.slice(0, -6)} ${formattedTime.slice(-2)}`;
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
            {this.props.activities.length > 1 ||
            this.props.activities.length === 0 ? (
              <h2 onClick={() => this.sortActivities_id()} className="link">
                {this.props.activities.length} Activities
              </h2>
            ) : (
              <h2 onClick={() => this.sortActivities_id()} className="link">
                {this.props.activities.length} Activity
              </h2>
            )}

            <div className="float-card activity-index-card">
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
                      onClick={() => this.sortActivities_start_time()}
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
                      Distance
                    </th>
                    <th
                      onClick={() => this.sortActivities_pace()}
                      className="link button-grey numeric-align"
                    >
                      Pace
                    </th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.activities.map((activity) => (
                    <tr key={`${activity.id}-tr`}>
                      <td
                        key={`${activity.id}-travelMode`}
                        id={`${activity.id}-travelMode`}
                      >
                        <i
                          className={this.formatTravelMode(activity.travelMode)}
                        ></i>
                      </td>
                      <td key={`${activity.id}-date_completed`}>
                        {activity.date_completed}
                      </td>
                      <td
                        className="accent3 link"
                        key={`${activity.id}-title`}
                        id={`${activity.id}-title`}
                        onClick={() =>
                          this.props.history.push(`/activity/${activity.id}`)
                        }
                      >
                        {activity.title}
                      </td>
                      <td
                        key={`${activity.id}-description`}
                        id={`${activity.id}-description`}
                      >
                        {activity.description}
                      </td>
                      <td key={`${activity.id}-start_time`}>
                        {this.formatTime(activity.start_time)}
                      </td>
                      <td key={`${activity.id}-duration`}>
                        {formatDuration(activity.duration)}
                      </td>
                      <td
                        key={`${activity.id}-distance`}
                        className="numeric-align"
                      >
                        {`${activity.distance} mi`}
                      </td>
                      <td key={`${activity.id}-pace`} className="numeric-align">
                        {`${activity.pace} / mi`}
                      </td>
                      <td
                        className="accent3 link"
                        key={`${activity.id}-edit`}
                        onClick={() =>
                          this.props.history.push(
                            `/activity/${activity.id}/edit`
                          )
                        }
                      >
                        Edit
                      </td>
                      <td
                        className="accent3 link"
                        key={`${activity.id}-delete`}
                        onClick={() => this.deleteActivity(activity.id)}
                      >
                        Delete
                      </td>
                      <td
                        className="accent3 link"
                        key={`${activity.id}-share`}
                        onClick={() => this.shareActivity(activity.id)}
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
