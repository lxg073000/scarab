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
      <div className="splash-shell">
        <div className="splash-container">
          <h2 className="container-item">The #1 Source for Survivors</h2>
          <div className="container-item">
            <img src={window.splash_0} />
          </div>
          <div className="container-item">
            <Link className="splash-btn" to="/login!">
              Log In
            </Link>
            <Link className="splash-btn" to="/signup!">
              Sign Up
            </Link>
            <div className="btn-border">
              <p>or</p>
            </div>
            <span
              className="splash-demo splash-btn"
              onClick={() => this.props.login(demoUser)}
            >
              Demo Login
            </span>
          </div>
        </div>
        <footer className="footer">
          <div className="footer-cols">
            <div className="f1">
              <span className="logo">SCARAB</span>
              <span className="fine">©2021 Strava</span>
            </div>
            <div className="f">
              <ul className="footer-links">
                <li>Follow</li>
                <li>
                  <i className="fa-icon fab fa-instagram"></i>
                  <a
                    className="footer-link"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/lernardgrigsby/"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <i className="fa-icon fab fa-twitter"></i>

                  <a
                    className="footer-link"
                    rel="noreferrer"
                    target="_blank"
                    href="https://twitter.com/LernardGrigsby"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <i className="fa-icon fab fa-github"></i>

                  <a
                    className="footer-link"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/lernardgrigsby"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <div className="f">
              <ul className="footer-links">
                <li>Get Started</li>
                <li>
                  <Link className="footer-link" to="/login!">
                    Log In
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="/signup!">
                    Sign Up
                  </Link>
                </li>
                <li
                  className="footer-link"
                  onClick={() => this.props.login(demoUser)}
                >
                  Log In As Guest
                </li>
              </ul>
            </div>
            <div className="f">
              <ul className="footer-links">
                <li>Menu</li>
                <li>
                  <a
                    className="footer-link"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/lxg073000/scarab#readme"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.strava.com/"
                  >
                    Strava
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
