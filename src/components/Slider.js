import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import '../App.css';
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import AngleLeft from 'react-icons/lib/fa/angle-left';
import AngleRight from 'react-icons/lib/fa/angle-right';

class Slider extends Component {
  render() {
    return (
      <Carousel
        renderCenterLeftControls={({ previousSlide }) => ( <button onClick={previousSlide}><AngleLeft /></button> )}
        renderCenterRightControls={({ nextSlide }) => ( <button onClick={nextSlide}><AngleRight /></button> )} >
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
      </Carousel>
    );
  }
}
/*import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';

const items = [
  {
    src: img1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: img2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: img3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src} >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous} >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}*/


export default Slider;
