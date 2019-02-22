import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import { Route } from 'react-router';
import { Homepage } from './components/Homepage/Homepage';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/home" component={Homepage} />
          <Route path="/" exact component={Homepage} />
        </Layout>
      </div>
    );
  }
}

export default App;
