import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IState } from '../../reducers';
import Container from 'react-bootstrap/Container';
import { Row, Col, Jumbotron } from 'react-bootstrap';
import SurveyList from '../SurveyList/SurveyList';

export class Homepage extends Component<any, any> {

  render() {
    history.replaceState(null, 'home', '/home');
    return (
      <Container>
        <Jumbotron>
          <h1 style={{textAlign: 'center'}}>Welcome to Survey-Says!</h1>
        </Jumbotron>
        <SurveyList />
      </Container>
    )
  }
}

const mapStateToProps = (state: IState) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)

