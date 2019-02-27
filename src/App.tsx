import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import SurveyView from './components/SurveyView/SurveyView';
import LoginContainer from './components/Login/LoginContainer';
import Analytics from './components/Analytics/Analytics.component';
import Homepage from './components/Homepage/Homepage';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/closed-surveys" />
          <Route path="/open-surveys" />
          <Route path="/home" component={Homepage} />
          <Route path="/" exact component={Homepage} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/analytics" component={Analytics} />
          <Route path='/surveys/view-all' component={SurveyView} />
        </Layout>
      </div>
    );
  }
}

export default App;