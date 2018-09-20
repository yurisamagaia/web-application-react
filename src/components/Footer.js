import React, { Component } from 'react';
import '../App.css';
import Logo from '../img/logo.png';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="logo-footer">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="footer-copyright">
          <small>© 2017 TRANSPORTES LIBARDO - EXPERIÊNCIA E DINAMISMO EM LOGÍSTICA DE TRANSPORTES</small>
        </div>
      </div>
    );
  }
}

export default Footer;
