import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import Nav from 'react-bootstrap/Nav';
import { INavState } from '../../../../reducers';

interface ISurveyProps {
    nav: INavState
}

const surveyTabs = (props: ISurveyProps) => { 
    let currentPath: string = '';
    if (props.nav.bOpenLinkClicked) {
        currentPath = '/open-surveys'
    } else if (props.nav.bClosedLinkClicked) {
        currentPath = '/closed-surveys'
    } 
    return (
        <Nav justify variant="tabs">
            <Nav.Item>
                <LinkContainer to={currentPath + '/my-surveys'}>
                    <Nav.Link>My Surveys</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to={currentPath + '/collaborations'}>
                    <Nav.Link>Collaborations</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to={currentPath + '/expiring'}>
                    <Nav.Link>Expiring</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to={currentPath + '/analytics'}>
                    <Nav.Link>Analytics</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            
        </Nav>
    )
}

export default surveyTabs;