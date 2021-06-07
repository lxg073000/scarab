import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class footer_white extends Component {
  render() {
    return (
      <footer className="footer white">
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
                <span
                  className="footer-link"
                  onClick={() => this.props.logout()}
                >
                  Log Out
                </span>
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
    );
  }
}
