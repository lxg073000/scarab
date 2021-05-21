import React from "react";

const about = (props) => {
  return (
    <div className="about-shell">
      <div className="about-mvps">
        <article className="mvp-item">
          <i className="fas fa-map-marked-alt"></i>
          <div className="mvp-content">
            <h2 className="bold">Google Map APIs</h2>
            <h2>
              Intergrate Google Maps API to build Routes. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Assumenda adipisci porro
              possimus hic quo iusto.
            </h2>
            <a href="" className="link accent bold">
              Github Wiki
            </a>
          </div>
        </article>
        <article className="mvp-item">
          <i className="fas fa-server"></i>
          <div className="mvp-content">
            <h2 className="bold">Ruby/Raise CRUD</h2>
            <h2>
              Maintain a backend server through Ruby Rails to achieve CRUD
              actions as well as relationship model associations
            </h2>
            <a href="" className="link accent bold">
              Github Wiki
            </a>
          </div>
        </article>
        <article className="mvp-item">
          <i className="fas fa-drafting-compass"></i>
          <div className="mvp-content">
            <h2 className="bold">Responsive CSS</h2>
            <h2>
              Designed media queries to match the functionality and appearance
              of Strava.com
            </h2>
            <a href="" className="link accent bold">
              Github Wiki
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default about;
