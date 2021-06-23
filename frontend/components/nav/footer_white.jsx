import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class footer_white extends Component {
  render() {
    return (
      <footer className="footer white">
        <div className="footer-cols">
          <div className="f1">
            <span className="logo">SCARAB</span>
            <span className="fine">©2021 Scarab</span>
          </div>
          <div className="f">
            <ul className="footer-links">
              <li>Follow</li>
              <li>
                <i className="fab fa-linkedin"></i>
                <a
                  className="footer-link"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/lernardgrigsby/"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <i className="fab fa-angellist"></i>

                <a
                  className="footer-link"
                  rel="noreferrer"
                  target="_blank"
                  href="https://angel.co/u/lernard-grigsby"
                >
                  AngelList
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
