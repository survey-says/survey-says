import React, { Component } from 'react';
import './App.css';
import { Route  } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import LoginContainer from './components/Login/LoginContainer';
import Homepage from './components/Homepage/Homepage';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/closed-surveys" />
          <Route path="/open-surveys" />
          <Route path="/login" component={LoginContainer}/>
          <Route path="/home" component={Homepage} />
          <Route path="/" exact component={Homepage} />        
        </Layout>
      </div>
    );
  }
}

export default App;