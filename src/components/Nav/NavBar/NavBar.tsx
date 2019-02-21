import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export class NavBar extends Component {
  
  render() {
    return (
        <Navbar bg="light" expand="lg">
          <LinkContainer to="/home">
            <Navbar.Brand>Survey-Says</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/open-surveys">
            <Nav.Link>Open</Nav.Link>
          </LinkContainer>
          <Nav className="ml-auto">
            <LinkContainer to="/user-login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/user-register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
          </Nav>      
        </Navbar>
    )
  }
}

export default NavBar;
