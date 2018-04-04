import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import '../App.css';
import Lock from 'react-icons/lib/fa/lock';
import Thumbs from 'react-icons/lib/fa/thumbs-up';
import Tree from 'react-icons/lib/fa/tree';
import Star from 'react-icons/lib/fa/star';

class Company extends Component {
  render() {
    return (
      <div className="bg-choose">
        <Container className="mg-container">
          <Row>
            <Col md="12">
              <h2> PORQUE ESCOLHER A GENTE? </h2>
            </Col>
            <Col xs="12" className="space mg-bottom-50">
              Desde de 1995, nossa empresa vem conquistando grandes clientes no mercado quando a Libardo Transportes começou fornecia seus veículos para transportadores da região como subcontratado, nossas operações mantiveram esse foco até o ano de 2000 quando senhor Valdeci João Libardo fundador da Libardo Transportes decidiu oferecer a gestão completa de transportes aos clientes.
              O nosso compromisso com os clientes e fornecedores fez com que a Libardo Transportes tivesse grandes conquistas ao longo desses 20 anos de empresa.
              Hoje contamos com um sistema online de alta tecnologia que facilita aos nossos clientes o monitoramento das entregas permitindo que o cliente tenha acesso ao canhoto logo depois da entrega no cliente, nossos veículos são todos monitorados via satélite e acompanhado por uma Gerenciadora de Risco 24 horas por dia, os nossos clientes contam também com um time de colaboradores capacitados e em desenvolvimento constante através de treinamentos oferecidos pela empresa.
              Todos os investimento em tecnologia e pessoas tem nos dado grandes resultados com os clientes, isso nos da a certeza que estamos no caminho certo.
            </Col>
            <Col md="3" className="text-center">
              <p><Lock className="icon-choose" /></p>
              <div><strong>SEGURANÇA</strong></div>
              <div>Equipe altamente treinada, profissionais autorizados por todas as gerenciadoras de riscos, e equipamentos modernos, inspecionados regularmente</div>
            </Col>
            <Col md="3" className="text-center">
              <p><Thumbs className="icon-choose" /></p>
              <div><strong>SATISFAÇÃO DO CLIENTE</strong></div>
              <div>Soluções com foco em resultado e máxima produtividade da operação, agilizando a viabilidade de projetos na cadeia logística</div>
            </Col>
            <Col md="3" className="text-center">
              <p><Tree className="icon-choose" /></p>
              <div><strong>MEIO AMBIENTE</strong></div>
              <div>Nossa frota tem idade média de 5 anos, ou seja nossos veículos já vem com tecnologia instalada que faz com que os veículos poluam menos</div>
            </Col>
            <Col md="3" className="text-center">
              <p><Star className="icon-choose" /></p>
              <div><strong> QUALIDADE </strong></div>
              <div>Trabalhamos sempre dentro dos parâmetros de qualidade total aos clientes, nossa torre de controle operacional mantém nossos clientes informado a todo tempo via Follow-up online</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Company;
