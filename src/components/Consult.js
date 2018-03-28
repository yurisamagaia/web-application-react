import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import '../App.css';
import Envelope from 'react-icons/lib/fa/envelope';
import Phone from 'react-icons/lib/fa/phone';
import ImgParallax from '../img/parallax.png';
import { Parallax, Background } from 'react-parallax';

class Consult extends Component {
  render() {
    return (
      <Parallax blur={2} bgImage={ImgParallax} strength={500}>
        <div style={{height: 500}}>
          <div className="parallax-text">HTML inside the parallax</div>
        </div>
      </Parallax>
    );
  }
}

export default Consult;
