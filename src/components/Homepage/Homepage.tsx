import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IState, IUserState } from '../../reducers';
import Container from 'react-bootstrap/Container';
import { Jumbotron } from 'react-bootstrap';
import SurveyList from '../SurveyList/SurveyList';

interface IHomepageProps {
  user: IUserState
}

export class Homepage extends Component<IHomepageProps, any> {

  render() {
    // make url path '/' be '/home'
    history.replaceState(null, 'home', '/home');
    return (
      <Container>
        <Jumbotron>
          {this.props.user.isLoggedIn?
            <>
              <h1 style={{ textAlign: 'center' }}>Welcome {this.props.user.firstName} {this.props.user.lastName}!</h1>
              <h3 style={{ textAlign: 'center' }}>Here are some public surveys for you to take:</h3>
            </>
            :
            <>
              <h1 style={{ textAlign: 'center' }}>Welcome to Survey-Says!</h1>
              <h3 style={{ textAlign: 'center' }}>Take a public survey below or login</h3>
            </>}
          <SurveyList />
        </Jumbotron>
      </Container>
    )
  }
}

const mapStateToProps = (state: IState) => ({
  user: state.user
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)

