import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import Nav from 'react-bootstrap/Nav';
import { INavState } from '../../../../reducers';

interface ISurveyProps {
    nav: INavState,

}

const surveyTabs = (props: ISurveyProps) => (
    <Nav justify variant="tabs">
        <Nav.Item>
            <LinkContainer to='my-surveys'>
                <Nav.Link>My Surveys</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item>
            <LinkContainer to='collaborations'>
                <Nav.Link>Collaborations</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item>
            <LinkContainer to='expiring'>
                <Nav.Link>Expiring</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item>
            <LinkContainer to='analytics'>
                <Nav.Link>Analytics</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        
    </Nav>
)

export default surveyTabs;