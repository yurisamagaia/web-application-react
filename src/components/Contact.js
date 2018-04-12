import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import '../App.css';
import Envelope from 'react-icons/lib/fa/envelope';
import Phone from 'react-icons/lib/fa/phone';
import Local from 'react-icons/lib/fa/location-arrow';

class Contact extends Component {
  render() {
    return (
      <Container className="mg-container">
        <Row>
          <Col xs="12">
            <h2>
              ENTRE EM CONTATO / FAÇA UMA COTAÇÃO
            </h2>
          </Col>
          <Col md="7">
            <Row>
              <Col md="12" className="mg-bottom-30">
                <Row>
                  <Col md="2" className="text-center">
                    <Envelope className="icon-contact" />
                  </Col>
                  <Col md="10">
                    <h5><strong>Informações via E-mail</strong></h5>
                    comercial@libardotransportes.com.br
                  </Col>
                </Row>
              </Col>
              <Col md="12" className="mg-bottom-30">
                <Row>
                  <Col md="2" className="text-center">
                    <Phone className="icon-contact" />
                  </Col>
                  <Col md="10">
                    <h5><strong>What`s App</strong></h5>
                    +55 (48) 9 9672-2446
                  </Col>
                </Row>
              </Col>
              <Col md="12" className="mg-bottom-30">
              <Row>
                <Col md="2" className="text-center">
                  <Local className="icon-contact" />
                </Col>
                <Col md="10">
                  <h5><strong>Localizações</strong></h5>
                  <div><strong>Localização Armazém Santa Catarina [Matriz]</strong></div>
                  <div>Rua Curió Nº 320</div>
                  <div>Telefone: (48) 3263-2216</div>
                  <div>CEP: 88200-00 Centro</div>
                  <div>Tijucas – SC</div>
                  <div><strong>Localização Armazém São Paulo [Filial]</strong></div>
                  <div>Rua Capitão Militão Nº 160</div>
                  <div>Telefone: (48) 3263-2216</div>
                  <div>CEP: 03273-200 Vila Santa Clara</div>
                  <div>São Paulo – SP</div>
                </Col>
              </Row>
              </Col>
            </Row>
          </Col>
          <Col md="5">
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
