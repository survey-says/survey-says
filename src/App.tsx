import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';
import './App.css';
import LoginComponent from './components/Login/LoginContainer';
import Layout from './containers/Layout/Layout';
import { Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
