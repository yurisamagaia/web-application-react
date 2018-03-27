import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import '../App.css';

class Slider extends Component {
  render() {
    return (
      <Carousel
        renderCenterLeftControls={({ previousSlide }) => ( <button onClick={previousSlide}>Anterior</button> )}
        renderCenterRightControls={({ nextSlide }) => ( <button onClick={nextSlide}>Próximo</button> )} >
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
      </Carousel>
    );
  }
}

export default Slider;
