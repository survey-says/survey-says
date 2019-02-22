import React, { Component } from 'react';
import './App.css';
import { Route  } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import LoginContainer from './components/Login/LoginContainer';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/login" component={LoginContainer}/>
        </Layout>
      </div>
    );
  }
}

export default App;
