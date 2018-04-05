import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
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
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
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
              <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
              quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</p>
              <h7>Empresa tal</h7>
            </div>
            <div className="comment">
              <img src={img2} className="img" />
              <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
              quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
              quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</p>
              <h7>Empresa tal 2</h7>
            </div>
          </Slide>
        </Container>
      </div>
    );
  }
}

export default Comments;
