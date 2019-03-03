import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SurveyTabs from '../SurveyTabs/SurveyTabs';
import { INavState, IUserState } from '../../../../reducers';
import { NavDropdown } from 'react-bootstrap';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface INavBarProps extends RouteComponentProps {
  nav: INavState
  user: IUserState
  logout(): void
  openSurveysToggle(): void
  closedSurveysToggle(): void
  closeSurveyTabs(): void
}

export class MainNavBar extends Component<INavBarProps, any> {

  onLogoutHandler = () => {
    this.props.logout(); 
    this.props.closeSurveyTabs();
    this.props.history.push('/home');
  }

  render() {
    let defaultNavItems: any = null;
    if (this.props.user.isLoggedIn) {
      defaultNavItems = (
        <>
          <LinkContainer to="/open-surveys">
            <Nav.Link onClick={this.props.openSurveysToggle}>Open</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/closed-surveys">
            <Nav.Link onClick={this.props.closedSurveysToggle}>Closed</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/create">
            <Nav.Link onClick={this.props.closeSurveyTabs}>Create</Nav.Link>
          </LinkContainer>
          <Nav className="ml-auto">
            <NavDropdown style={{marginRight: '25px'}} id="user-dropdown" title={this.props.user.firstName}>
              <NavDropdown.Item 
                onClick={() => this.onLogoutHandler()}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </>
      );
    } else {
      defaultNavItems = (
        <Nav className="ml-auto">
          <LinkContainer to="/login">
            <Nav.Link onClick={this.props.closeSurveyTabs}>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/register">
            <Nav.Link onClick={this.props.closeSurveyTabs}>Register</Nav.Link>
          </LinkContainer>
        </Nav>
      );
    }

    return (
      <>
        <Navbar bg="light" expand="lg" className="mb-3">
          <LinkContainer to="/home">
            <Navbar.Brand onClick={this.props.closeSurveyTabs}>Survey-Says</Navbar.Brand>
          </LinkContainer>
          {defaultNavItems}
        </Navbar>
        {(this.props.nav.bOpenLinkClicked || this.props.nav.bClosedLinkClicked)? <SurveyTabs nav={this.props.nav} /> : null}
        </>
    )
  }
}


export default withRouter(MainNavBar);

