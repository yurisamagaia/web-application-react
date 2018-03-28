import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import '../App.css';

class NavBar extends Component {
  render() {
    return (
      <Navbar color="faded" light fixed="top" expand="md" className="nav">
        <Container>
          <NavbarBrand href="/">LOGO</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Quem Somos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Depoimentos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Serviços</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Consulta de Entregas</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Contato</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
