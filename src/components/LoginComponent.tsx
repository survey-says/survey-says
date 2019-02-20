import React, { Component } from 'react';

class LoginComponent extends Component<any, any>{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <form className="form-signin" >
          <img className="mb-4" alt="" width="500" height="300" />
          <h1 className="h3 mb-3 font-weight-normal">Please Login</h1>
          <label htmlFor="inputUsername" className="sr-only">Username</label>
          <input type="text"
            id="inputUsername"
            className="form-control"
            placeholder="Username"
            value={this.state.credentials.username}

            required />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            value={this.state.credentials.password}

            required />
          <p className="errorMsg">{this.state.errorFeedback}</p>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
      </>
    )
  }
}