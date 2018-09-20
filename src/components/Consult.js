import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../App.css';
import ImgParallax from '../img/parallax.png';
import { Parallax } from 'react-parallax';
import MiniTruck from '../img/mini.png';

class Consult extends Component {
  render() {
    return (
      <Parallax blur={2} bgImage={ImgParallax} strength={500}>
        <div style={{height: 500}}>
          <div className="parallax-text">
            <h3>Faça a consulta de sua entrega agora</h3>
            <img src={MiniTruck} alt="Consultar" />
            <Button color="success" className="btn-consulta"> FAZER CONULTA</Button>
          </div>
        </div>
      </Parallax>
    );
  }
}

export default Consult;
