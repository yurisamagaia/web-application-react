import React, { Component } from 'react';
//import Carousel from 'nuka-carousel';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';
import AngleLeft from 'react-icons/lib/fa/angle-left';
import AngleRight from 'react-icons/lib/fa/angle-right';

import img1 from '../img/stella.jpg';
import img2 from '../img/cantu.png';

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

class Comments extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="bg-choose">
        <Container className="mg-container text-center">
          <h2> O QUE FALAM </h2>
          <Slide {...settings}>
            <div className="comment">
              <img src={img1} className="img" />
              <p>Ótima empresa, presta um serviço diferenciado com preço justo, segurança, transparência e muita agilidade.
              O seu Follow-Up é excelente, mantém o cliente sempre informado em tempo real, gerando mais confiança e tranquiidade,
              tanto para o remetente quanto para o destinatário.</p>
              <div>MARCOS REISNER</div>
              <small>Gerente de Logística</small>
            </div>
            <div className="comment">
              <img src={img2} className="img" />
              <p>A Libardo Transportes nos oferece um ótimo atendimento, sempre com agilidade e preço justo.
              Temos uma parceria logística de longa data e estamos satisfeitos o serviço prestado.</p>
              <div>JOSIVALDO DO NASCIMENTO</div>
              <small>Coordenador de Logística</small>
            </div>
          </Slide>
        </Container>
      </div>
    );
  }
}

export default Comments;
