import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.signup(this.state).then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <div className="session-form">
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput("email")}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
