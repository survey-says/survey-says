import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import Nav from 'react-bootstrap/Nav';
import { INavState } from '../../../../reducers';

interface ISurveyProps {
    nav: INavState
}

const surveyTabs = (props: ISurveyProps) => (
<Nav justify variant="tabs">
    <LinkContainer to={props.nav.currentPath + 'my-surveys'}>
        <Nav.Item>
            <Nav.Link>My Surveys</Nav.Link>
        </Nav.Item>
    </LinkContainer>
    <LinkContainer to={props.nav.currentPath + 'collaborations'}>
        <Nav.Item>
            <Nav.Link>Collaborations</Nav.Link>
        </Nav.Item>
    </LinkContainer>
    <LinkContainer to={props.nav.currentPath + 'expiring'}>
        <Nav.Item>
            <Nav.Link>Expiring</Nav.Link>
        </Nav.Item>
    </LinkContainer>
    <LinkContainer to={props.nav.currentPath + 'analytics'}>
        <Nav.Item>
            <Nav.Link>Analytics</Nav.Link>
        </Nav.Item>
    </LinkContainer>
</Nav>
)

export default surveyTabs;