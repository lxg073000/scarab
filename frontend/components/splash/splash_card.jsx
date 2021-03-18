import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class splash_card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const demoUser = {
      username: "guest",
      email: "guest@AA.com",
      password: "password123",
    };
    return (
      <div className="splash-container">
        <h2>The #1 Source for Survivors</h2>
        <div className="splash-content">
          <div className="left-col">
            <img src={window.splash_0} />
          </div>
          <div className="right-col">
            <Link className="splash-btn" to="/login">
              Log In
            </Link>
            <Link className="splash-btn" to="/signup">
              Sign Up
            </Link>
            <div className="or-baseline">
              <p className="splash-or">or</p>
            </div>
            <span
              className="splash-demo"
              onClick={() => this.props.login(demoUser)}
            >
              Demo Login
            </span>
          </div>
        </div>
        <footer>
          <div className="footer-cols">
            <div className="f1">
              <span className="logo">SCARAB</span>
              <span className="copy">©2021 Strava</span>
            </div>
            <div className="f">
              <ul>
                <li>Follow</li>
                <li>
                  <span className="fa-icon">
                    <i className="fab fa-facebook-f"></i>
                  </span>
                  Facebook
                </li>
                <li>
                  <span className="fa-icon">
                    <i className="fab fa-instagram"></i>
                  </span>
                  Instagram
                </li>
                <li>
                  <span className="fa-icon">
                    <i className="fab fa-twitter"></i>
                  </span>
                  Twitter
                </li>
              </ul>
            </div>
            <div className="f">
              <ul>
                <li>Get Started</li>
                <li>Sign Up</li>
                <li>Log In</li>
                <li>Log In As Guest</li>
              </ul>
            </div>
            <div className="f">
              <ul>
                <li>Get Started</li>
                <li>Sign Up</li>
                <li>Log In</li>
                <li>Log In As Guest</li>
              </ul>
            </div>
          </div>
        </footer>
        <p className="splash-closer">Scarab is a Strava clone</p>
      </div>
    );
  }
}
