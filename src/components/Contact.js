import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Container, Row, Col } from 'reactstrap';
import '../App.css';
import Envelope from 'react-icons/lib/fa/envelope';
import Phone from 'react-icons/lib/fa/phone';
import Local from 'react-icons/lib/fa/location-arrow';
import axios from 'axios';

class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nome: '',
      email: '',
      telefone: '',
      mensagem: '',
      sucesso: false,
      loading: false
    }
  }

  onChange = (event) => {
    this.state[event.target.name] = event.target.value
    this.setState(this.state)
  }

  handleClick = () => {
    axios.post('http://libardologistica.com.br/api/contato.php', {
      nome: this.state.nome,
      email: this.state.email,
      telefone: this.state.telefone,
      mensagem: this.state.mensagem
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    this.setState({
      loading: true
    })
    setTimeout(() => {
      this.setState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
        sucesso: true,
        loading: false
      })
    }, 2000);
  }

  render() {
    let message
    if (this.state.loading) {
      message = <div className="loading">Enviando...</div>
    }
    if (this.state.sucesso) {
      message = <div className="sucesso">Mensagem enviada com sucesso. Aguarde nosso contato.</div>
    }
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
                    logisticamatriz@libardotransportes.com.br
                  </Col>
                </Row>
              </Col>
              <Col md="12" className="mg-bottom-30">
                <Row>
                  <Col md="2" className="text-center">
                    <Phone className="icon-contact" />
                  </Col>
                  <Col md="10">
                    <h5><strong>WhatsApp</strong></h5>
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
                  <div>Rua Carlos Gomes, Nº749 - sala 11A</div>
                  <div>Telefone: (48) 3263-2216</div>
                  <div>CEP: 13218-005 Ponte de São João</div>
                  <div>Jundiaí - SP</div>
                </Col>
              </Row>
              </Col>
            </Row>
          </Col>
          <Col md="5">
            {message}
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Input type="text" name="nome" id="nome" placeholder="Nome" className="ipt" onChange={this.onChange.bind(this)} value={this.state.nome} />
              </FormGroup>
              <FormGroup>
                <Input type="email" name="email" id="email" placeholder="E-mail" className="ipt" onChange={this.onChange.bind(this)} value={this.state.email} />
              </FormGroup>
              <FormGroup>
                <Input type="tel" name="telefone" id="telefone" placeholder="Telefone" className="ipt" onChange={this.onChange.bind(this)} value={this.state.telefone} />
              </FormGroup>
              <FormGroup>
                <Input type="textarea" name="mensagem" id="mensagem" placeholder="Mensagem" className="ipt" onChange={this.onChange.bind(this)} value={this.state.mensagem} />
              </FormGroup>
              <Button type="button" color="primary" className="btn-send" onClick={this.handleClick}>Enviar</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
