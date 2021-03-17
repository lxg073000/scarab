import React from "react";
import { Link } from "react-router-dom";

function nav_items({ currentUser, logout }) {
  const _signedIn = !!currentUser ? (
    <div>
      <button onClick={logout}>Sign Out</button>
      <Link to="/user/:id">Edit Profile</Link>
    </div>
  ) : null;

  return (
    <div>
      <h3>Scarab Nav</h3>
      {_signedIn}
      <ul>
        <li>Logo</li>
        <li>Profile Pic</li>
      </ul>
    </div>
  );
}

export default nav_items;
