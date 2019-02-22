import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { IState, IUserState } from '../../../../reducers';
import { connect } from 'react-redux';
import { NavDropdown } from 'react-bootstrap';
import { login } from '../../../../actions/Login.actions';

interface INavBarProps {
  user: IUserState,
  login: () => void
}

export class NavBar extends Component<INavBarProps, any> {
  
  render() {
    let defaultNavItems: any = null;
    if (this.props.user.isLoggedIn) {
      defaultNavItems = (
        <>
          <LinkContainer to="closed-surveys">
            <Nav.Link>Closed</Nav.Link>
          </LinkContainer>
          <LinkContainer to="create-survey">
            <Nav.Link>Create</Nav.Link>
          </LinkContainer>
          <Nav className="ml-auto">
            <NavDropdown id="user-dropdown" title={this.props.user.username}>
              <NavDropdown.Item onClick={this.props.login}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </>
      );
    } else {
      defaultNavItems = (
          <Nav className="ml-auto">
            <LinkContainer to="/user-login">
              <Nav.Link onClick={this.props.login}>Login</Nav.Link>
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
          {defaultNavItems}
        </Navbar>
    )
  }
}

const mapStateToProps = (state: IState) => ({
    user: state.user
})

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

