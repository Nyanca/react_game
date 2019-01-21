import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>A React Game Tutorial</h2>
        </div>
        <p className="App-intro">
        This is a version of React's online tic-tac-toe game tutorial.
        </p>
      </div>
    );
  }
}

export default App;
