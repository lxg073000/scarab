import React, { Component } from "react";

export default class route_form extends Component {
  render() {
    return (
      <div className={`fullscreen-main-modal`}>
        <div className="rf-main-container">
          <div className="rf-sub-container">
            <div className="rf-content">
              <form>
                <h1 className="main-headline">My Route</h1>
                <div className="rfc-name">
                  <p className="rf-label">Route Name (required)</p>
                  <input className="rd-name-field" type="text"></input>
                </div>
                <div className="rfc-descripton">
                  <p className="rf-label">Route description</p>
                  <textarea className="rf-description" type="text" />
                </div>
                <div className="rfc-selects">
                  <div className="rf-danger">
                    <p>Danger</p>
                    <select className="danger-dropdown">
                      <option value="0">1</option>
                      <option value="1">2</option>
                      <option value="2">3</option>
                      <option value="3">4</option>
                      <option value="4">5</option>
                    </select>
                  </div>
                  <div className="rf-privacy">
                    <p>Privacy</p>
                    <select className="privacy-dropdown">
                      <option value=""></option>
                      <option value="public">PUBLIC</option>
                      <option value="colony">COLONY</option>
                      <option value="private">PRIVATE</option>
                    </select>
                  </div>
                  <button className="nav-btn-orange rf-btn">
                    Save To My Routes
                  </button>
                </div>
                <div className="rf-footer"></div>
              </form>
              <p className="rf-fp">
                Public routes are for the whole Strava community to enjoy. If
                you ever decide to delete your account, please know that public
                route you create may remain. Learn More
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
