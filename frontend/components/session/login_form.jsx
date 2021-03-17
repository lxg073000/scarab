import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    // const token = document.querySelector('meta[name="csrf-token"]').content;
    (this.state = {
      username: "",
      password: "",
      token: props.token,
    }),
      (this.handleSubmit = this.handleSubmit.bind(this));
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

  render() {
    return (
      <div className="session-form">
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput("username")}
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
