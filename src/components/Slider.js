import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Carousel from 'nuka-carousel';
import '../App.css';
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';

import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, right: "2%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, zIndex: "9", left: "2%" }}
      onClick={onClick}
    />
  );
}

class Slider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <Slide {...settings}>
        <div className="slide-text bg-1">
          <h1>EXPERIÊNCIA E DINAMISMO EM</h1>
          <h1>LOGÍSTICA DE TRANSPORTES</h1>
          <div className="separador"></div>
          <h3 className="text-center">Há mais de 20 anos transportando com segurança e eficiência nas entregas.</h3>
          <div className="box-consulta">
            <a color="success" className="btn-consulta" href="https://tudoentregue.com.br/" target="_blank">Faça uma cotação</a>
          </div>
        </div>
        <div className="slide-text bg-2">
          <h1>SEJA NOSSO PARCEIRO</h1>
          <div className="separador"></div>
          <h3 className="descricao-slide">Valorizamos muito a parceria com os nossos clientes, venha fazer parte do time de clientes satisfeitos da Libardo Transportes.</h3>
          <div className="box-consulta">
            <a color="success" className="btn-consulta" href="#company">Quem somos</a>
          </div>
        </div>
        <div className="slide-text bg-3">
          <h1>VEÍCULOS GERENCIADOS 24 horas</h1>
          <div className="separador"></div>
          <h3 className="descricao-slide">Oferecendo segurança e monitoramento logístico nas operações dos nossos clientes.</h3>
          <div className="box-consulta">
          <a color="success" className="btn-consulta" href="https://tudoentregue.com.br/" target="_blank">Faça uma cotação</a>
          </div>
        </div>
        <div className="slide-text bg-4">
          <h1 className="text-center">ATENDER COM QUALIDADE, AGILIDADE E</h1>
          <h1 className="text-center">SEGURANÇA É NOSSO OBJETIVO</h1>
          <div className="separador"></div>
          <div className="box-consulta">
          <a color="success" className="btn-consulta" href="https://tudoentregue.com.br/" target="_blank">Faça uma cotação</a>
          </div>
        </div>
      </Slide>
    );
  }
}

export default Slider;
