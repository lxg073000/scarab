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

  logout() {
    let shown = document.getElementsByClassName("show")[0];
    shown.classList.add("hide");
    shown.classList.remove("show");
    this.props.logout();
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
      <div>
        <div
          className="nav-menu-link"
          onMouseEnter={this.dropdown("profile")}
          onMouseLeave={this.dropdown("profile")}
        >
          <img src={window.user_pic} alt="user_pic" />
          <i className="fas fa-chevron-down"></i>
          <ul className={`nav-menu-item dropdown end ${this.state.profile}`}>
            <li onClick={() => this.logout()}>Log Out</li>
          </ul>
        </div>
        <div className="nav-menu-link">
          <i className="fas fa-plus"></i>
        </div>
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

            <div
              className={`nav-menu-container
${this.state.nav}`}
            >
              <ul className="nav-menu">
                <ul
                  className="nav-menu-link"
                  onMouseEnter={this.dropdown("dashboard")}
                  onMouseLeave={this.dropdown("dashboard")}
                >
                  <li onClick={() => location.assign(`#/onboarding/`)}>
                    Dashboard
                    <i className="fas fa-chevron-down"></i>
                  </li>
                  <ul
                    className={`nav-menu-item dropdown ${this.state.dashboard}`}
                  >
                    <li
                      onClick={() =>
                        location.assign(`#/supply_routes/${currentUser.id}`)
                      }
                    >
                      Supply Routes
                    </li>
                  </ul>
                </ul>

                <ul
                  className="nav-menu-link"
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
                    className={`nav-menu-item dropdown ${this.state.training}`}
                  >
                    <li>My Buggouts</li>
                  </ul>
                </ul>
              </ul>
            </div>
          </div>
          <div className="nav-right">
            {_signedIn}
            {_sessionToggle}
          </div>
        </div>
        <div className="baseline"></div>
      </div>
    );
  }
}

export default Nav_items;
