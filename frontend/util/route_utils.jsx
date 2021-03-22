import React from "react";
import { Redirect, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapState = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser,
});

const Auth = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={(props) =>
      loggedIn ? <Redirect to={`/onboarding`} /> : <Component {...props} />
    }
  />
);
const Protected = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={(props) =>
      loggedIn ? <Component {...props} /> : <Redirect to="/splash!" />
    }
  />
);

export const AuthRoute = withRouter(connect(mapState)(Auth));
export const ProtectedRoute = withRouter(connect(mapState)(Protected));
