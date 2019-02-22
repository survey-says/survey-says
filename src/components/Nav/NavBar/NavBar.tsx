import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { IState, IUserState } from '../../../reducers';
import { connect } from 'react-redux';

interface INavBarProps {
  user: IUserState
}

export class NavBar extends Component<INavBarProps, any> {
  
  render() {
    let defaultNavBar: any = null;
    if (this.props.user.isLoggedIn) {
      defaultNavBar = (<h2>User is logged in.</h2>);
    } else {
      defaultNavBar = (
          <Nav className="ml-auto">
            <LinkContainer to="/user-login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/user-register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
          </Nav> 
      );
    }

    return (
        <Navbar bg="light" expand="lg">
          <LinkContainer to="/home">
            <Navbar.Brand>Survey-Says</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/open-surveys">
            <Nav.Link>Open</Nav.Link>
          </LinkContainer>
          {defaultNavBar}
        </Navbar>
    )
  }
}

const mapStateToProps = (state: IState) => ({
    user: state.user
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

