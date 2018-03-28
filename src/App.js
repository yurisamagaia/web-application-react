import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import Slider from './components/Slider';
import Company from './components/Company';
import Consult from './components/Consult';
import Contact from './components/Contact';
import Footer from './components/Footer';

import ScrollableAnchor from 'react-scrollable-anchor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Slider />
        <ScrollableAnchor id={'company'}>
          <Company />
        </ScrollableAnchor>
        <ScrollableAnchor id={'consult'}>
          <Consult />
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <Contact />
        </ScrollableAnchor>
        <Footer />
      </div>
    );
  }
}

export default App;
