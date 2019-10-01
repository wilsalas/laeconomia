import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import '../styles/styles.css';
import { PANEL_API, URL } from '../managers/api/ApiManager';


const url = URL.S3;

class Slider extends Component {

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, retrieveAdsBanner: [] };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);

  }

  async componentDidMount() {
    let resBanners = await PANEL_API.GET.RetrieveBanners(this.props.typeBanner);

     if (Array.isArray(resBanners.message.data)) this.setState({ retrieveAdsBanner: resBanners.message.data})
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.retrieveAdsBanner.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.retrieveAdsBanner.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }



  render() {
    const { activeIndex } = this.state;

    const slides = this.state.retrieveAdsBanner.map((item, i) => {
      return (
        <CarouselItem
          className="custom-tag "
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <img src={`${url+item.photo}`} alt="img carousel" width="100%"/>
          {/* <a href={`${URL}${item.Archivo}`} target="_blank" rel="noopener noreferrer">  <img src={`${URL}${item.Archivo}`} alt="img carousel" width="100%" height={this.compareHeight()} /></a> */}
          <CarouselCaption className="text-danger" captionText={''}  />
        </CarouselItem>
      );
    });


    return (
      <div>
        <style>
          {
            `.custom-tag {
                max-width: 100%;
                background: black;
              }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={slides} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default Slider;