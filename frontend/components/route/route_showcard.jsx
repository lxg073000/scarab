import React, { Component } from "react";
import Footer from "../nav/footer_white";
import { Link } from "react-router-dom";

export default class route_showcard extends Component {
  render() {
    return (
      <div className="fullscreen-main">
        <div className="primary-main">
          <div className="main-primary-content">
            <div className="onboard-modal-form main-container">
              <h1 className="main-headline">Route Name</h1>
              <h3 className="main-content">Route description</h3>
            </div>
          </div>

          <div className="main-sidebar">
            <div className="profile-container">
              <div className="insert-box">
                <h1> Route Stats</h1>
              </div>
            </div>
            <div className="trip-container"></div>
            <div className="trip-container">
              <h3> Share this Route With Friends</h3>
              <Link className="main-form-btn" to={`/routes`}>
                Share
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
