import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import '../App.css';
import Envelope from 'react-icons/lib/fa/envelope';
import Phone from 'react-icons/lib/fa/phone';

class Contact extends Component {
  render() {
    return (
      <Container className="mg-30">
        <Row>
          <Col xs="6">
            <p><Envelope className="icons" /> contato@email.com</p>
            <p><Phone className="icons" /> (48) 3263 1234</p>
          </Col>
          <Col xs="6">
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
              <Button type="submit" color="primary">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
