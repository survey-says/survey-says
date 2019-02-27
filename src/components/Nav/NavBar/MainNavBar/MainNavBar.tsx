import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SurveyTabs from '../SurveyTabs/SurveyTabs';
import { INavState, IUserState } from '../../../../reducers';
import { NavDropdown } from 'react-bootstrap';

interface INavBarProps {
  nav: INavState
  user: IUserState
  logout(): void
  openSurveysToggle(): void
  closedSurveysToggle(): void
}

export class MainNavBar extends Component<INavBarProps, any> {
  
  render() {
    let defaultNavItems: any = null;
    if (this.props.user.isLoggedIn) {
      defaultNavItems = (
        <>
          <LinkContainer to="closed-surveys">
            <Nav.Link onClick={this.props.closedSurveysToggle}>Closed</Nav.Link>
          </LinkContainer>
          <LinkContainer to="create-survey">
            <Nav.Link>Create</Nav.Link>
          </LinkContainer>
          <Nav className="ml-auto">
            <NavDropdown id="user-dropdown" title={this.props.user.username}>
              <NavDropdown.Item onClick={this.props.logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </>
      );
    } else {
      defaultNavItems = (
          <Nav className="ml-auto">
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="user-register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
          </Nav> 
      );
    }

    return (
      <>
        <Navbar bg="light" expand="lg">
          <LinkContainer to="/home">
            <Navbar.Brand>Survey-Says</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/open-surveys">
            <Nav.Link onClick={this.props.openSurveysToggle}>Open</Nav.Link>
          </LinkContainer>
          {defaultNavItems}
        </Navbar>
        {(this.props.nav.bOpenLinkClicked || this.props.nav.bClosedLinkClicked)? <SurveyTabs nav={this.props.nav} /> : null}
        </>
    )
  }
}


export default MainNavBar;

