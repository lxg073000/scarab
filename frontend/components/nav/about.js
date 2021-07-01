import React from "react";

const about = (props) => {
  return (
    <div className="about-shell">
      <div className="about-mvps">
        <article className="mvp-item">
          <i className="fas fa-map-marked-alt"></i>
          <div className="mvp-content">
            <h2 className="bold">Google Maps Integration</h2>
            <h2>
              DOM display of maps and marking managed through Google Map APIs.
              Receives client requests and generates dynamic path for cycling,
              driving, and jogging routes.
            </h2>
            <a
              href="https://github.com/lxg073000/scarab#readme"
              rel="noreferrer"
              target="_blank"
              className="link accent bold"
            >
              Github Wiki
            </a>
          </div>
        </article>
        <article className="mvp-item">
          <i className="fas fa-server"></i>
          <div className="mvp-content">
            <h2 className="bold">Ruby/Rails Server</h2>
            <h2>
              Maintenance of backend server through Ruby Rails. Client Sessions,
              Routes, and Activities persist, have full CRUD functionality,
              relationship model associations.
            </h2>
            <a
              href="https://github.com/lxg073000/scarab#readme"
              rel="noreferrer"
              target="_blank"
              className="link accent bold"
            >
              Github Wiki
            </a>
          </div>
        </article>
        <article className="mvp-item">
          <i className="fas fa-drafting-compass"></i>
          <div className="mvp-content">
            <h2 className="bold">Responsive CSS</h2>
            <h2>
              Designed to match the functionality and appearance of Strava.com
            </h2>
            <a
              href="https://github.com/lxg073000/scarab#readme"
              rel="noreferrer"
              target="_blank"
              className="link accent bold"
            >
              Github Wiki
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default about;
