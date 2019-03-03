import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import LoginContainer from './components/Login/LoginContainer';
import Analytics from './components/Analytics/Analytics.component';
import Homepage from './components/Homepage/Homepage';
import SurveyList from './components/SurveyList/SurveyList';
import RegisterComponent from './components/Register/RegisterContainer';
import SurveyBuildComponent from './components/Questions/SurveyBuildComponent';
import SurveyTakingComponent from './components/SurveyTakingComponent/SurveyTakingComponent';
import ApiTester from './components/ApiTester/ApiTester';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/closed-surveys/my-surveys" component={SurveyList} />
          <Route path="/closed-surveys/collaborations" component={SurveyList}/>
          <Route path="/closed-surveys/expiring" component={SurveyList} />
          <Route path="/closed-surveys/analytics" component={Analytics} />
          <Route path="/open-surveys/my-surveys" component={SurveyList} />
          <Route path="/open-surveys/collaborations" component={SurveyList} />
          <Route path="/open-surveys/expiring" component={SurveyList} />
          <Route path="/open-surveys/analytics" component={Analytics}/>
          <Route path="/home" component={Homepage} />
          <Route path="/" exact component={Homepage} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={RegisterComponent} />
          <Route path="/surveys/:id" component={SurveyTakingComponent} />
          <Route path="/create" component={SurveyBuildComponent} />
          <Route path="/analytics/:id" component={Analytics} />
          <Route path="/test" component={ApiTester} />

        </Layout>
      </div>
    );
  }
}

export default App;