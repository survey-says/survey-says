import React, { Component } from 'react';

// Interface of the props (fields and methods coming from login actions)
export interface ILoginProps {
  username: String,
  password: String,
  userInfo: {},
  errorMessage: String,
  updateUsername(username: String): void,
  updatePassword(password: String): void,
  login(credentials: {}): void
}

export class LoginComponent extends Component<ILoginProps, any>{
  constructor(props) {
    super(props);
  }

  // Wrapper functions to call the actions
  updateUsername = (event) => {
    console.log("The update action is to be called with username: ", event.target.value);
    this.props.updateUsername(event.target.value);
  }
  updatePassword = (event) => {
    console.log("The update action is to be called with password: ", event.target.value);
    console.log("The username is ", this.props.username);
    this.props.updatePassword(event.target.value);
  }
  login = (event) => {
    console.log(`The username ${this.props.username} and password ${this.props.password} (at login)`)
    event.preventDefault();
    const cred = {
      username: this.props.username,
      password: this.props.password
    }
    this.props.login(cred);

  }
  // The LoginComponent will have access to the username and password via props because of the redux store
  render() {
    return (
      <div className="container login-container">
        <div className="jumbotron">
          <h1 className="h3 mb-3 font-weight-normal">Please Login</h1>
          <form className="form-signin" onSubmit={this.login}>
            <div className="form-group">
              <label htmlFor="inputUsername">Username</label>
              <input type="text"
                id="inputUsername"
                className="form-control"
                placeholder="Username"
                onChange={this.updateUsername}
                required />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Password</label>
              <input type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                onChange={this.updatePassword}
                required />
            </div>
            <button className="btn btn-lg btn-primary btn-block login-btn" type="submit">Log In</button>
            <p>{this.props.errorMessage}</p>
          </form>
        </div>
      </div>
    )
  }
}