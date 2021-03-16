import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import signup_form_container from "./session_form/signup_form_container";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Strava Home</h1>
        <Route path="/signup" component={signup_form_container} />
      </div>
    );
  }
}

export default App;
