import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import NavContainer from "./nav/nav_container";
import splash_container from "./splash/splash_container";
import signup_form_container from "./session/signup_form_container";
import login_form_container from "./session/login_form_container";
import user_profile_container from "./user/user_profile_container";
import user_feed_container from "./user/user_feed_container";
import user_routes_container from "./user/user_routes_container";
import user_buggout_index_container from "./user/user_buggout_index_container";
import user_buggout_container from "./user/user_buggout_container";
import route_form_container from "./route/route_form_container";
import route_edit_form_container from "./route/route_edit_form_container";
import route_container from "./route/route_container";
import route_buggout_index_container from "./route/route_buggout_index_container";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavContainer />
        <Route path="/" component={splash_container} />
        <Route path="/new" component={signup_form_container} />
        <Route path="/login" component={login_form_container} />
        <Route path="/user/:id" component={user_profile_container} />
        <Route path="/user/:id/feed" component={user_feed_container} />
        <Route path="/user/:id/routes" component={user_routes_container} />
        <Route
          path="/user/:id/buggout"
          component={user_buggout_index_container}
        />
        <Route
          path="/user/:id/buggout/:id"
          component={user_buggout_container}
        />
        <Route path="/route/new" component={route_form_container} />
        <Route path="/route/:id/edit" component={route_edit_form_container} />
        <Route path="/route/:id/" component={route_container} />
        <Route
          path="/route/:id/buggout"
          component={route_buggout_index_container}
        />
      </div>
    );
  }
}

export default App;