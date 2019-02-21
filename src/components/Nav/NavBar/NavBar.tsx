import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';

export class NavBar extends Component {
  
  render() {
    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/home">
                <Navbar.Brand>Survey-Says</Navbar.Brand>
            </LinkContainer>
        </Navbar>
    )
  }
}

export default NavBar;
