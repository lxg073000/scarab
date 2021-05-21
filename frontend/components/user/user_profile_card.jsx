import React from "react";

const user_profile_card = ({ user }) => {
  return (
    <div className="profile-shell float-card">
      <img src={window.user_pic} alt="user_pic" />
      <h1 className="bold">{currentUser.username}</h1>
      <div className="profile-stats">
        <div className="profile-stat-item">
          <h3>Following</h3>
          <h1>0</h1>
        </div>
        <div className="profile-stat-item">
          <h3>Followers</h3>
          <h1>0</h1>
        </div>
        <div className="profile-stat-item">
          <h3>Activities</h3>
          <h1>0</h1>
        </div>
      </div>
      <div className="training-stats">
        <section>
          <h3>Latest Activity</h3>
          <h3 className="bold">No Acitivies...</h3>
        </section>
        <section>
          <h2 className="link">
            Your Activity Log<i className="fas fa-chevron-right"></i>
          </h2>
        </section>
      </div>
      {/* <h2>{`Routes: ${user.google_routes.length}`}</h2> */}
    </div>
  );
};

export default user_profile_card;
