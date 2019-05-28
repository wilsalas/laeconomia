import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import '../styles/styles.css';

const items = [
  {
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    path: 'images/slides/08/slide-01.jpg'
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    path: 'images/slides/08/slide-02.jpg'
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    path: 'images/slides/08/slide-03.jpg'
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
    this.compareHeight = this.compareHeight.bind(this);

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

  compareHeight = () => {
    let height = 500;

    //console.log("ALTO", this.props.height)

    if(this.props.height < 1){
      height = 500
    }
    return height;
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <img src={item.path} alt="img carousel" />
          <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });





    return (
      <div>
        <style>
          {
            `.custom-tag {
                max-width: 100%;
                height: ${this.compareHeight()}px;
                background: black;
              }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default Slider;