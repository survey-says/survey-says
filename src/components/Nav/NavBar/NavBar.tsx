import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

export class NavBar extends Component {
  
  render() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>Survey-Says</Navbar.Brand>
        </Navbar>
    )
  }
}

export default NavBar;
