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
import Phone from 'react-icons/lib/fa/phone';
import Logo from '../img/logo.png';

class NavBar extends Component {
  render() {
    return (
      <Navbar color="faded" light fixed="top" expand="md" className="nav">
        <Container>
          <NavbarBrand href="/">
            LOGO
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#company" className="menu-item">QUEM SOMOS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="" className="menu-item">DEPOIMENTOS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#services" className="menu-item">SERVIÇOS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#consult" className="menu-item">CONSULTAR ENTREGAS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact" className="menu-item">CONTATO</NavLink>
              </NavItem>
              <NavItem>
                <Button type="submit" color="success" className="btn-phone"><Phone className="icon-phone" /> (48) 3263 2216</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
