import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import '../App.css';
import Envelope from 'react-icons/lib/fa/envelope';
import Phone from 'react-icons/lib/fa/phone';
import ImgParallax from '../img/parallax.png';
import { Parallax, Background } from 'react-parallax';
import MiniTruck from '../img/mini.png';

class Consult extends Component {
  render() {
    return (
      <Parallax blur={2} bgImage={ImgParallax} strength={500}>
        <div style={{height: 500}}>
          <div className="parallax-text">
            <h3>Faça a consulta de sua entrega agora</h3>
            <img src={MiniTruck} />
            {/* <Button color="success" className="btn-consulta"> FAZER CONULTA</Button> */}
            <div className="box-consulta">
              <a color="success" className="btn-consulta" href="https://tudoentregue.com.br/" target="_blank"> FAZER CONSULTA</a>
            </div>
          </div>
        </div>
      </Parallax>
    );
  }
}

export default Consult;
