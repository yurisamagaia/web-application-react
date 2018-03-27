import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import '../App.css';

class Contact extends Component {
  render() {
    return (
      <Container>
        <Form>
          <FormGroup>
            <Input type="text" name="nome" id="nome" placeholder="Nome" className="ipt" />
          </FormGroup>
          <FormGroup>
            <Input type="email" name="email" id="email" placeholder="E-mail" className="ipt" />
          </FormGroup>
          <FormGroup>
            <Input type="text" name="telefone" id="telefone" placeholder="Telefone" className="ipt" />
          </FormGroup>
          <FormGroup>
            <Input type="textarea" name="mensagem" id="mensagem" placeholder="Mensagem" className="ipt" />
          </FormGroup>
          <Button type="submit" color="primary">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default Contact;
