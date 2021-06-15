import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_utils";
import NavContainer from "./nav/nav_container";
import splash_container from "./splash/splash_container";
import signup_form_container from "./session/signup_form_container";
import login_form_container from "./session/login_form_container";
import dashboard_container from "./session/dashboard_container";
import route_edit_form_container from "./route/route_edit_form_container";
import search_container from "./googleMap/search_container";
import route_index_card_container from "./route/route_index_card_container";
import route_showcard_container from "./route/route_showcard_container";
import Footer from "./nav/footer_container";
import activity_form_new from "./activities/activity_form_new_container";
import activity_form_edit from "./activities/activity_form_edit_container";
import activity_showcard from "./activities/activity_showcard_container";
import activity_index_container from "./activities/activity_index_container";
import post_form_new from "./posts/post_form_new_container";
import post_form_edit from "./posts/post_form_edit_container";
import post_index_container from "./posts/post_index_container";

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

        <Route path="/dashboard">
          <ProtectedRoute path="/dashboard" component={dashboard_container} />
          <Footer />
        </Route>

        <ProtectedRoute
          path="/route/:id/edit"
          component={route_edit_form_container}
        />
        <ProtectedRoute path="/routes/" component={search_container} />

        <Route path="/supply_routes">
          <ProtectedRoute
            path="/supply_routes/:user_id"
            component={route_index_card_container}
          />
          <Footer />
        </Route>

        <ProtectedRoute
          path="/route/:id/user/:id"
          component={route_showcard_container}
        />

        <Switch>
          <Route exact path="/activities">
            <ProtectedRoute
              exact
              path="/activities"
              component={activity_index_container}
            />
            <Footer />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/activity/">
            <ProtectedRoute
              exact
              path="/activity/"
              component={activity_form_new}
            />
            <Footer />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/activity/:activity_id/">
            <ProtectedRoute
              exact
              path="/activity/:activity"
              component={activity_showcard}
            />
            <Footer />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/activity/:activity_id/edit">
            <ProtectedRoute
              exact
              path="/activity/:activity_id/edit"
              component={activity_form_edit}
            />
            <Footer />
          </Route>
        </Switch>

        <Route path="/posts">
          <ProtectedRoute path="/posts" component={post_index_container} />
          <Footer />
        </Route>

        <Route path="/post">
          <ProtectedRoute path="/post" component={post_form_new} />
          <Footer />
        </Route>

        <Route path="/post/:post_id">
          <ProtectedRoute path="/post/:post_id" component={post_form_edit} />
          <Footer />
        </Route>
      </div>
    );
  }
}

export default App;
