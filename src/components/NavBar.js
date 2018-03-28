import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button
} from 'reactstrap';
import '../App.css';
import WhatsApp from 'react-icons/lib/fa/whatsapp';

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
                <NavLink href="#company">QUEM SOMOS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">DEPOIMENTOS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#services">SERVIÇOS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#consult">CONSULTAR ENTREGAS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">CONTATO</NavLink>
              </NavItem>
              <NavItem>
                <Button type="submit" color="success" className="btn-phone"><WhatsApp className="icon-whatsapp" /> (48) 9 9612 3456</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
