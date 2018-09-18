import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import '../App.css';
import Logo from '../img/logo.png';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="logo-footer">
          <img src={Logo} />
        </div>
        <div className="footer-copyright">
          <small>© 2017 TRANSPORTES LIBARDO - EXPERIÊNCIA E DINAMISMO EM LOGÍSTICA DE TRANSPORTES</small>
        </div>
      </div>
    );
  }
}

export default Footer;
