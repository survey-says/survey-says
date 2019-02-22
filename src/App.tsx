import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';
import logo from './logo.svg';
import './App.css';
import LoginComponent from '../src/containers/LoginContainer';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
          </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
          </a>
          </header>
          <BrowserRouter>
            <Route path="/login" component={LoginComponent} />
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
