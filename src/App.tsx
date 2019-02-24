import React, { Component } from 'react';
import './App.scss';
import { Route  } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import LoginContainer from './components/Login/LoginContainer';
import RegisterComponent from './components/Register/register';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/login" component={LoginContainer}/>
          <Route path="/register" component={RegisterComponent}/>
        </Layout>
      </div>
    );
  }
}

export default App;
