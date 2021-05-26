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
      plus: "hide",
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
            [control]: "",
          })
        : this.setState({
            [control]: "hide",
          });
    };
  }

  logout() {
    let loggoutBtn = document.getElementsByClassName("lob")[0];
    loggoutBtn.classList.add("hide");
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
          <ul className={`lob dropdown-menu-right ${this.state.profile}`}>
            <li onClick={() => this.logout()}>Log Out</li>
          </ul>
        </div>
        <div
          className="nav-menu-link"
          onMouseEnter={this.dropdown("plus")}
          onMouseLeave={this.dropdown("plus")}
        >
          <i className="fas fa-plus"></i>
          <ul className={`dropdown-menu-right ${this.state.plus}`}>
            <li onClick={() => location.assign(`#/buggout/new`)}>
              New Buggout
            </li>
            <li onClick={() => location.assign(`#/routes`)}>
              New Supply Route
            </li>
            <li onClick={() => location.assign(`#/post/new`)}>
              New Post
            </li>
          </ul>
        </div>
      </div>
    ) : null;
    function formatHeadline(pathname) {
      if (pathname.includes("splash", "login", "signup")) return null;
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
                  <li onClick={() => location.assign(`#/dashboard/`)}>
                    Dashboard
                    <i className="fas fa-chevron-down"></i>
                  </li>
                  <ul className={`dropdown-menu-left ${this.state.dashboard}`}>
                    <li onClick={() => location.assign(`#/dashboard`)}>
                      My Activity
                    </li>
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

                  <ul className={`dropdown-menu-left ${this.state.training}`}>
                    <li onClick={() => location.assign(`#/buggouts`)}>
                      My Buggouts
                    </li>
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
