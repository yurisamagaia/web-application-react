import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import '../App.css';
import Envelope from 'react-icons/lib/fa/envelope';
import Phone from 'react-icons/lib/fa/phone';

class Contact extends Component {
  render() {
    return (
      <Container className="mg-container">
        <Row>
          <Col xs="12">
            <h2> ENTRE EM CONTATO / FAÇA UMA COTAÇÃO </h2>
          </Col>
          <Col xs="6">
            <p><Envelope className="icons" /> contato@email.com</p>
            <p><Phone className="icons" /> (48) 3263 1234</p>

            <p><strong>Localização Armazém Santa Catarina [Matriz]</strong></p>
            <div>Rua Curió Nº 320</div>
            <div>Telefone: (48) 3263-2216</div>
            <div>CEP: 88200-00 Centro</div>
            <div>Tijucas – SC</div>

            <p><strong>Localização Armazém São Paulo [Filial]</strong></p>
            <div>Rua Capitão Militão Nº 160</div>
            <div>Telefone: (48) 3263-2216</div>
            <div>CEP: 03273-200 Vila Santa Clara</div>
            <div>São Paulo – SP</div>
          </Col>
          <Col xs="6">
            <p>Transporte Rodoviário Nacional e Transportes de Cargas Fechadas em abastecimento de fábricas, filiais e grandes redes. Nós iremos ajudar você a fazer a entrega de forma eficiente.</p>
            <Form>
              <FormGroup>
                <Input type="text" name="nome" id="nome" placeholder="Nome" className="ipt" />
              </FormGroup>
              <FormGroup>
                <Input type="email" name="email" id="email" placeholder="E-mail" className="ipt" />
              </FormGroup>
              <FormGroup>
                <Input type="tel" name="telefone" id="telefone" placeholder="Telefone" className="ipt" />
              </FormGroup>
              <FormGroup>
                <Input type="textarea" name="mensagem" id="mensagem" placeholder="Mensagem" className="ipt" />
              </FormGroup>
              <Button type="submit" color="primary" className="btn-send">Enviar</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
