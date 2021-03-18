import React from "react";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
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
    this.props.signup(this.state);
  }

  render() {
    return (
      <div
        className="background-pic"
        style={{ backgroundImage: `url(${window.login_0})` }}
      >
        <div className="form-container">
          <div className="session-form">
            <form onSubmit={this.handleSubmit}>
              <p className="signup-header">Join Scarab today, it's Free.</p>
              <input
                className="form-field"
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleInput("username")}
              />
              <input
                className="form-field"
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInput("email")}
              />
              <input
                className="form-field"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInput("password")}
              />
              <input className="form-submit" type="submit" value="Sign Up" />
              <div className="form-border" />
              <div className="signup-footer">
                <p>
                  By signing up for Scarab, you agree to the Terms of Service.
                  View our Privacy Policy.
                </p>
                <p>
                  Or simply Log In with the{" "}
                  <span
                    onClick={() => this.props.login(this.props.demoUser)}
                    className="guest-link"
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

export default SignUpForm;
