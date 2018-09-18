import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import '../App.css';
import Truck from '../img/truck.png';
import Envelope from 'react-icons/lib/fa/envelope';
import TruckIcon from 'react-icons/lib/fa/truck';
import Cube from 'react-icons/lib/fa/cube';
import Child from 'react-icons/lib/fa/child';
import Satisfaction from 'react-icons/lib/fa/thumbs-o-up';

import CountUp from 'react-countup';
import LazyLoad from 'react-lazy-load';

class Company extends Component {
  render() {
    return (
      <div className="bg-choose">
        <Container className="mg-container">
          <Row>
            <Col xs="12">
              <h2> A EMPRESA </h2>
            </Col>
            <Col xs="6" className="text-center">
              <img src={Truck} className="img-company" />
            </Col>
            <Col xs="6" className="space">
              Em 1995 Valdeci João Libardo, no município de Tijucas - SC, deu inicio a Libardo Transportes, desde então a empresa foi crescendo e se desenvolvendo e ganhando mais apoio de profissionais e da família.
              Hoje a Libardo Transportes é administrada por Valdeci, sua esposa Katia e com apoio de grandes profissionais que fazem parte desse time.
              A visão empreendedora da empresa, a honestidade com os fornecedores, a motivação e valorização dos colaboradores e principalmente o cuidado com os clientes fazem com que a Libardo Transportes hoje seja uma empresa de destaque em logística de transportes.
            </Col>
            <Col md="12" className="text-center mg-top-50">
              <Row>
                <Col md="3">
                  <h3>
                    <LazyLoad>
                      <CountUp start={0} end={15} />
                    </LazyLoad>
                  </h3>
                  <p>Veículos na Frota</p>
                  <TruckIcon className="icon-company" />
                </Col>
                <Col md="3">
                  <h3>
                    <LazyLoad>
                      <CountUp start={0} end={297129} />
                    </LazyLoad>
                  </h3>
                  <p>Cubagem Carregada</p>
                  <Cube className="icon-company" />
                </Col>
                <Col md="3">
                  <h3>
                    <LazyLoad>
                      <CountUp start={0} end={30} />
                    </LazyLoad>
                  </h3>
                  <p>Colaboradores</p>
                  <Child className="icon-company" />
                </Col>
                <Col md="3">
                  <h3>
                    <LazyLoad>
                      <CountUp start={0} end={98} />
                    </LazyLoad>
                  </h3>
                  <p>Percentual de Satisfação</p>
                  <Satisfaction className="icon-company" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Company;
