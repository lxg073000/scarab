import React from "react";

const buggout_form_new = () => {
  return (
    <div className="component-container-main">
      <div className="new-buggout-shell">
        <header className="buggout-new">
          <h1 className="bold">Upload Buggout</h1>
        </header>
        <main className="buggout-details">
          <section className="left">
            <h2 className="bold">Title</h2>
            <input type="text" className="text" />
            <h2 className="bold">Description</h2>
            <input type="text" className="text" />
            <div className="time">
              <div className="time-item">
                <h2 className="bold">Date Completed</h2>
                <input type="date" />
              </div>
              <div className="time-item">
                <h2 className="bold">Start Time</h2>
                <input type="time" />
              </div>
              <div className="time-item">
                <h2 className="bold">End Time</h2>
                <input type="time" />
              </div>
            </div>
            <h2 className="button-orange">Save Buggout</h2>
          </section>
          <section className="right">
            <div className="supply-route-select">
              <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
              <i className="fas fa-running"></i>
            </div>

            <div className="supply-route-map"></div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default buggout_form_new;
