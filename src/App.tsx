import React, { Component } from 'react';
<<<<<<< HEAD
import './App.scss';
=======
import './App.css';
>>>>>>> 04f65f83875583bc474dc21955392cc996e791c6
import { Route } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import SurveyView from './components/SurveyView/SurveyView';
import LoginContainer from './components/Login/LoginContainer';
import Analytics from './components/Analytics/Analytics.component';
import Homepage from './components/Homepage/Homepage';
import RegisterComponent from './components/Register/register';
import QuestionComponent from './components/Questions/questionComponent'


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/closed-surveys" />
          <Route path="/open-surveys" />
<<<<<<< HEAD
          <Route path="/user-login" component={LoginContainer} />
=======
>>>>>>> 04f65f83875583bc474dc21955392cc996e791c6
          <Route path="/home" component={Homepage} />
          <Route path="/" exact component={Homepage} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/analytics" component={Analytics} />
          <Route path='/surveys/view-all' component={SurveyView} />
          <Route path="/register" component={RegisterComponent} />
          <Route path="/questions" component={QuestionComponent} />

        </Layout>
      </div>
    );
  }
}

export default App;