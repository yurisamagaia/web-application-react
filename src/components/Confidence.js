import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import '../App.css';
import Lock from 'react-icons/lib/fa/lock';
import Thumbs from 'react-icons/lib/fa/thumbs-up';
import Wrench from 'react-icons/lib/fa/wrench';
import Chart from 'react-icons/lib/fa/line-chart';
import Check from 'react-icons/lib/fa/check';
import Certification from 'react-icons/lib/fa/bookmark-o';

import CountUp from 'react-countup';
import LazyLoad from 'react-lazy-load';

class Confidence extends Component {
  render() {
    return (
      <Container className="mg-container">
        <Row>
          <Col md="12">
            <h2> VOCÊ PODE CONFIAR </h2>
          </Col>
          <Col md="3">
            <p className="text-center"><Certification className="icon-choose" /></p>
            <h5 className="text-center title-confidence"><strong>Certificações</strong></h5>
            <div><Check className="icon-service" /> ANTT</div>
            <div><Check className="icon-service" /> ANVISA</div>
          </Col>
          <Col md="3">
            <p className="text-center"><Lock className="icon-choose" /></p>
            <h5 className="text-center title-confidence"><strong>Segurança</strong></h5>
            <div><Check className="icon-service" /> Cobertura 24h</div>
            <div><Check className="icon-service" /> Equipe Treinada</div>
            <div><Check className="icon-service" /> Manutenção Preventiva</div>
          </Col>
          <Col md="3">
            <p className="text-center"><Chart className="icon-choose" /></p>
            <h5 className="text-center title-confidence"><strong>Eficiência</strong></h5>
            <div><Check className="icon-service" /> Cargas no Prazo</div>
            <div><Check className="icon-service" /> Informações ON TIME</div>
            <div><Check className="icon-service" /> Rastreamento</div>
            <div><Check className="icon-service" /> Baixa Sinistralidade</div>
          </Col>
          <Col md="3">
            <p className="text-center"><Wrench className="icon-choose" /></p>
            <h5 className="text-center title-confidence"><strong>Equipamentos</strong></h5>
            <div><Check className="icon-service" /> Porta Container</div>
            <div><Check className="icon-service" /> Truck Baús</div>
            <div><Check className="icon-service" /> Carretas Baús</div>
            <div><Check className="icon-service" /> Bitrem</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Confidence;
