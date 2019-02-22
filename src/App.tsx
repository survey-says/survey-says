import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';
import './App.css';
import LoginComponent from './components/Login/LoginContainer';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/login" component={LoginComponent} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
