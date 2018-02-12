import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game'
import Clock from './components/adalab'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My first App</h1>
        </header>
        <p className="App-intro">
          Intro <code>src/App.js</code> Save
        </p>
	      <Game/>
        <Clock clasesita="adios"/>
      </div>
    );
  }
}
export default App;
