import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_utils";
import NavContainer from "./nav/nav_container";
import splash_container from "./splash/splash_container";
import signup_form_container from "./session/signup_form_container";
import login_form_container from "./session/login_form_container";
import onboarding_form_container from "./session/onboarding_form_container";
import user_profile_container from "./user/user_profile_container";
import user_feed_container from "./user/user_feed_container";
import user_routes_container from "./user/user_routes_container";
import user_buggout_index_container from "./user/user_buggout_index_container";
import user_buggout_container from "./user/user_buggout_container";
import route_form_container from "./route/route_form_container";
import route_edit_form_container from "./route/route_edit_form_container";
import search_container from "./googleMap/search_container";
import route_index_card_container from "./route/route_index_card_container";
import route_showcard_container from "./route/route_showcard_container";
import route_buggout_index_container from "./route/route_buggout_index_container";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavContainer />
        <Route exact path="/">
          <Redirect to="/splash!" />
        </Route>
        <AuthRoute path="/splash!" component={splash_container} />
        <AuthRoute path="/signup!" component={signup_form_container} />
        <AuthRoute path="/login!" component={login_form_container} />
        <ProtectedRoute
          path="/onboarding"
          component={onboarding_form_container}
        />

        <ProtectedRoute path="/user/:id" component={user_profile_container} />
        <ProtectedRoute path="/user/:id/feed" component={user_feed_container} />
        <ProtectedRoute
          path="/user/:id/routes"
          component={user_routes_container}
        />
        <ProtectedRoute
          path="/user/:id/buggout"
          component={user_buggout_index_container}
        />
        <ProtectedRoute
          path="/user/:id/buggout/:id"
          component={user_buggout_container}
        />
        <ProtectedRoute
          path="/route/:id/edit"
          component={route_edit_form_container}
        />
        <ProtectedRoute path="/routes/" component={search_container} />
        <ProtectedRoute
          path="/supply_routes/:user_id"
          component={route_index_card_container}
        />
        <ProtectedRoute
          path="/route/:id/user/:id"
          component={route_showcard_container}
        />
        <ProtectedRoute
          path="/route/:id/buggout"
          component={route_buggout_index_container}
        />
      </div>
    );
  }
}

export default App;
