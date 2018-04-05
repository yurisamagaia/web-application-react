import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import '../App.css';
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import AngleLeft from 'react-icons/lib/fa/angle-left';
import AngleRight from 'react-icons/lib/fa/angle-right';

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
        <div>
          <img src={img1} className="slide" />
        </div>
        <div>
          <img src={img2} className="slide" />
        </div>
        <div>
          <img src={img3} className="slide" />
        </div>
      </Slide>
    );
  }
}

export default Slider;
