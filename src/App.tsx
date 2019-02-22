import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import { Route } from 'react-router';
import NavBar from './components/Nav/NavBar/NavBar';
import SurveyView from './components/SurveyView/SurveyView';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path='/surveys/view-all' component={SurveyView} />
        </Layout>
      </div>
    );
  }
}

export default App;
