import React, { Component } from 'react';
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
