import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import Slider from './components/Slider';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Slider />
        <Contact />
      </div>
    );
  }
}

export default App;
