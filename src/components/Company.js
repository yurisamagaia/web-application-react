import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import '../App.css';
import Truck from '../img/truck.png';
import Envelope from 'react-icons/lib/fa/envelope';

class Company extends Component {
  render() {
    return (
      <Container className="mg-container">
        <Row>
          <Col xs="12">
            <h2> A EMPRESA </h2>
          </Col>
          <Col xs="6" className="text-center">
            <img src={Truck} className="img-company" />
          </Col>
          <Col xs="6" className="space">
            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
            quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.
            Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando
            passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
          </Col>
          <Col md="12">
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Company;
