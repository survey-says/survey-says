import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import Nav from 'react-bootstrap/Nav';
import { INavState } from '../../../../reducers';

interface ISurveyProps {
    nav: INavState,
    currentPath: string
}

const surveyTabs = (props: ISurveyProps) => { 

    return (
        <Nav justify variant="tabs">
            <Nav.Item>
                <LinkContainer to={props.currentPath + '/my-surveys'}>
                    <Nav.Link>My Surveys</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to={props.currentPath + '/collaborations'}>
                    <Nav.Link>Collaborations</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to={props.currentPath + '/expiring'}>
                    <Nav.Link>Expiring</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to={props.currentPath + '/analytics'}>
                    <Nav.Link>Analytics</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            
        </Nav>
    )
}

export default surveyTabs;