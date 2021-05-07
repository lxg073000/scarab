import React from "react";

export default function footer_white() {
  return (
    <div className="footer-white">
      <footer>
        <div className="footer-cols">
          <div className="f1">
            <span className="white-logo">SCARAB</span>
            <span className="fine">©2021 Strava</span>
          </div>
          <div className="f">
            <ul>
              <li>Follow</li>
              <li>
                <span className="fa-icon">
                  <i className="fab fa-instagram"></i>
                </span>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/lernardgrigsby/"
                >
                  Instagram
                </a>
              </li>
              <li>
                <span className="fa-icon">
                  <i className="fab fa-twitter"></i>
                </span>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://twitter.com/LernardGrigsby"
                >
                  Twitter
                </a>
              </li>
              <li>
                <span className="fa-icon">
                  <i className="fab fa-github"></i>
                </span>
                <a
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
      <p className="white-splash-closer">Scarab is a Strava clone</p>
    </div>
  );
}
