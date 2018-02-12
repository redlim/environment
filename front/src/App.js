import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game'
import Clock from './components/adalab'

import { GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = (props) =>
	<GoogleMap
		defaultZoom={8}
		defaultCenter={{ lat: -34.397, lng: 150.644 }}
	>
		{props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
	</GoogleMap>


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
	      <MyMapComponent isMarkerShown />
      </div>
    );
  }
}
export default App;
