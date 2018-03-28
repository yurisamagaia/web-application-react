import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import '../App.css';
import Phone from 'react-icons/lib/fa/phone';

class Company extends Component {
  render() {
    return (
      <Container className="mg-30">
        <Row>
          <Col xs="3" className="space">
            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
            quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
          </Col>
          <Col xs="3" className="space">
            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
            quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Company;
