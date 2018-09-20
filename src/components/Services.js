import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';
import Check from 'react-icons/lib/fa/check';

class Company extends Component {
  render() {
    return (
      <Container className="mg-container">
        <Row>
          <Col xs="12">
            <h2> SERVIÇOS </h2>
          </Col>
          <Col md="6" className="space">
            <h4><b>Armazenagem</b></h4>
            <div><Check className="icon-service" /> Armazenamento de Mercadorias</div>
            <div><Check className="icon-service" /> Carga e Descarga de veículos</div>
            <div><Check className="icon-service" /> Paletização e remontagem de paletes</div>
            <div><Check className="icon-service" /> Transbordo de veículos</div>
            <div><Check className="icon-service" /> Separação de Produtos/Materiais</div>
            <div><Check className="icon-service" /> Montagem de Kits e Etiquetagem de Produtos</div>
            <div><Check className="icon-service" /> Expedição de Produtos e Materiais</div>
            <div><Check className="icon-service" /> Cross docking</div>
          </Col>
          <Col md="6" className="space">
            <h4><b>Transporte Rodoviário Nacional</b></h4>
            <div><Check className="icon-service" /> Cargas Fechadas</div>
            <div><Check className="icon-service" /> Cargas Fracionadas dedicadas com rota formada (de Santa Catarina para todos os estados Brasileiros)</div>
            <div><Check className="icon-service" /> Transportes de Contêineres saindo dos Portos de Santa Catarina</div>
            <div><Check className="icon-service" /> Transporte de abastecimento de filiais e fábricas</div>
            <div><Check className="icon-service" /> Distribuição em todo litoral da Santa Catarina e na Capital e Região Metropolitana de São Paulo</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Company;
