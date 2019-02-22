import React, { Component } from 'react';
import { loginReducer } from '../reducers/Login.reducer';
import { updateUsername, updatePassword } from '../actions/Login.actions'

// Interface of the props (fields and methods coming from login actions)
export interface ILoginProps {
  username: String,
  password: String,
  userInfo: {},
  errorMessage: String,
  updateUsername(username: String): void,
  updatePassword(password: String): void,
  login(username: String, password: String): void
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
    this.props.login(this.props.username, this.props.password);

  }
  // The LoginComponent will have access to the username and password via props because of the redux store
  render() {
    return (
      <>
        <form className="form-signin" onSubmit={this.login}>
          <img className="mb-4" alt="" width="500" height="300" />
          <h1 className="h3 mb-3 font-weight-normal">Please Login</h1>
          <label htmlFor="inputUsername" className="sr-only">Username</label>
          <input type="text"
            id="inputUsername"
            className="form-control"
            placeholder="Username"
            onChange={this.updateUsername}
            required />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            onChange={this.updatePassword}
            required />
          <p>{this.props.errorMessage}</p>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
      </>
    )
  }
}