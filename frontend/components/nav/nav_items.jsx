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
      </div>
    ) : null;

    return (
      <div className="nav-bar">
        <Link className="nav-logo" to="/splash">
          SCARAB
        </Link>
        <ul>
          {_signedIn}
          {_sessionToggle}
        </ul>
      </div>
    );
  }
}

export default Nav_items;
