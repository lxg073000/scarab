import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(control) {
    return (e) =>
      this.setState({
        [control]: e.currentTarget.value,
      });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  renderErrors() {
    const errorControl = !!this.props.errors.length ? "signup-errors" : "hide";
    return (
      <ul className={errorControl}>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  render() {
    return (
      <div
        className="background-pic session"
        style={{ backgroundImage: `url(${window.login_2})` }}
      >
        <div className="form-container">
          <div className="session-form">
            <form onSubmit={this.handleSubmit}>
              <h1 className="login-header">Log In</h1>
              <div className="">{this.renderErrors()}</div>
              <input
                className="form-field"
                type="text"
                placeholder="Your Name"
                value={this.state.username}
                onChange={this.handleInput("username")}
              />
              <input
                className="form-field"
                type="password"
                placeholder="Your Password"
                value={this.state.password}
                onChange={this.handleInput("password")}
              />
              <input className="form-submit" type="submit" value="Log In" />
              <div className="form-border" />
              <div className="form-footer">
                <p>Forgot your password?</p>
                <p>
                  Log In with the{" "}
                  <span
                    onClick={() => this.props.login(this.props.demoUser)}
                    className="guest-link link"
                  >
                    Guest Account
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
