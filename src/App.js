import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import Slider from './components/Slider';
import Company from './components/Company';
import Comments from './components/Comments';
import Choose from './components/Choose';
import Services from './components/Services';
import Confidence from './components/Confidence';
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
        <Choose />
        <ScrollableAnchor id={'company'}>
          <Company />
        </ScrollableAnchor>
        <ScrollableAnchor id={'services'}>
          <Services />
        </ScrollableAnchor>
        <ScrollableAnchor id={'comments'}>
          <Comments />
        </ScrollableAnchor>
        <Confidence />
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
