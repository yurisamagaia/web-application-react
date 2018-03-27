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

class NavBar extends Component {
  render() {
    return (
      <div>
        <Container>
          <Navbar color="faded" light fixed expand="md">
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
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default NavBar;
