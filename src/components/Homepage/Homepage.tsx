import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IState } from '../../reducers';
import Container from 'react-bootstrap/Container';
import { Row, Col, Jumbotron } from 'react-bootstrap';

export class Homepage extends Component {

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1 style={{textAlign: 'center'}}>Welcome to Survey-Says!</h1>
        </Jumbotron>
      </Container>
    )
  }
}

const mapStateToProps = (state: IState) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)

