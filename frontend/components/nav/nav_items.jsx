import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

class Nav_items extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, currentPage, logout } = this.props;
    let pathname = this.props.location.pathname;

    const _sessionToggle = currentUser ? null : pathname == "/login" ? (
      <div>
        <Link className="nav-btn" to="/signup">
          <span className="btn-white">Sign Up</span>
        </Link>
      </div>
    ) : (
      <div>
        <Link className="nav-btn" to="/login">
          <span className="btn-white">Log In</span>
        </Link>
      </div>
    );

    const _signedIn = !!currentUser ? (
      <div>
        <Link className="nav-btn-orange" to={`/user/${currentUser.id}`}>
          Edit Profile
        </Link>
        <span className="nav-btn" onClick={logout}>
          Sign Out
        </span>
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
              <Link className="nav-logo" to="/splash">
                SCARAB
              </Link>
              {formatHeadline(this.props.location.pathname)}
            </div>
            <i className="fas fa-search"></i>
            <div className="nav-menu-container">
              <ul className="nav-menu">
                <Link className="nav-menu-link">
                  <li>Dashboard</li>
                  <i className="fas fa-chevron-down"></i>
                </Link>
                <Link className="nav-menu-link">
                  <li>Training</li>
                  <i className="fas fa-chevron-down"></i>
                </Link>
                <Link className="nav-menu-link">
                  <li>Explore</li>
                  <i className="fas fa-chevron-down"></i>
                </Link>
                <Link className="nav-menu-link">
                  <li>LOCKED</li>
                  <i className="fas fa-chevron-down"></i>
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
      </div>
    );
  }
}

export default Nav_items;
