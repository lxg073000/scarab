import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

class Nav_items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboard: "hide",
      training: "hide",
      explore: "hide",
      locked: "hide",
      profile: "hide",
      add: "hide",
      nav: "hide",
    };
  }

  // shouldComponentUpdate() {
  //   window.addEventListener("click", this.toggleNav());
  // }

  componentDidUpdate(prevProps) {
    const newURLPath = this.props.location !== prevProps.location;
    newURLPath ? this.toggleNav() : null;
  }

  componentDidMount() {
    this.toggleNav();
  }
  toggleNav() {
    this.props.location.pathname.includes("!")
      ? this.setState({
          nav: "hide",
        })
      : this.setState({
          nav: "reveal-nav",
        });
  }

  dropdown(control) {
    return (e) => {
      this.state[control] === "hide"
        ? this.setState({
            [control]: "show",
          })
        : this.setState({
            [control]: "hide",
          });
    };
  }

  render() {
    const { currentUser, currentPage, logout } = this.props;
    let pathname = this.props.location.pathname;

    const _sessionToggle = currentUser ? null : pathname == "/login!" ? (
      <div className="">
        <Link className="nav-btn-orange" to="/signup!">
          Sign Up
        </Link>
      </div>
    ) : (
      <div className="">
        <Link className="nav-btn" to="/login!">
          <span className="btn-white">Log In</span>
        </Link>
      </div>
    );

    const _signedIn = !!currentUser ? (
      <div className="">
        <Link className="nav-btn-orange" to={`/user/${currentUser.id}`}>
          Edit Profile
        </Link>
        <span className="nav-btn" onClick={logout}>
          Sign Out
        </span>
        <i className="fas fa-user-alt"></i>
        <i className="fas fa-plus-circle"></i>
      </div>
    ) : null;
    function formatHeadline(pathname) {
      if (pathname.includes("splash", "login", "signup")) return null;
      if (pathname.includes("route")) return <p className="nav-head">Route</p>;
      // return <p className="nav-head">{pathname}</p>;
    }

    return (
      <div className="shell">
        <div className="nav-bar">
          <div className="nav-left">
            <div className="nav-title">
              <Link className="nav-logo" to="/splash!">
                SCARAB
              </Link>
              {formatHeadline(this.props.location.pathname)}
            </div>
            <i
              className={`fas fa-search
${this.state.nav}`}
            ></i>
            <div
              className={`nav-menu-container
${this.state.nav}`}
            >
              <ul className="nav-menu">
                <Link
                  to="/splash!"
                  className="nav-menu-link"
                  onMouseEnter={this.dropdown("dashboard")}
                  onMouseLeave={this.dropdown("dashboard")}
                >
                  <li>
                    Dashboard
                    <span>
                      <i className="fas fa-chevron-down"></i>
                    </span>
                  </li>
                  <ul
                    className={`nav-menu-link dropdown ${this.state.dashboard}`}
                  >
                    <li>Supply Routes</li>
                  </ul>
                </Link>

                <Link
                  className="nav-menu-link"
                  to="/splash!"
                  onMouseEnter={this.dropdown("training")}
                  onMouseLeave={this.dropdown("training")}
                >
                  <li>
                    Training{" "}
                    <span>
                      <i className="fas fa-chevron-down"></i>
                    </span>
                  </li>

                  <ul
                    className={`nav-menu-link dropdown ${this.state.training}`}
                  >
                    <li>My Buggouts</li>
                  </ul>
                </Link>
                <Link
                  className="nav-menu-link"
                  to="/splash!"
                  onMouseEnter={this.dropdown("explore")}
                  onMouseLeave={this.dropdown("explore")}
                >
                  <li>
                    Explore
                    <span>
                      <i className="fas fa-chevron-down"></i>
                    </span>
                  </li>
                  <ul
                    className={`nav-menu-link dropdown ${this.state.explore}`}
                  >
                    <li>Community Search</li>
                    <li>Supply Search</li>
                  </ul>
                </Link>
              </ul>
            </div>
          </div>
          <div className="nav-right">
            <ul>
              {_signedIn}
              {_sessionToggle}
            </ul>
          </div>
        </div>
        <div className="baseline"></div>
      </div>
    );
  }
}

export default Nav_items;
