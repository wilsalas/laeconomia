import React, { Component } from 'react';
import { Container } from 'reactstrap';
import PromoComponent from '../components/Promo';
import HeaderComponent from '../components/Header';
import SliderComponent from '../components/Slider';
import { CategoryComponent } from '../components/Category';
import { TabContentComponent, InterestContentComponent } from '../components/ContentProducts';
import BannerComponent from '../components/Banner';
import FooterComponent from '../components/Footer';
import '../styles/styles.css';

export default class App extends Component {

  render() {

    return (
      <div>
        <HeaderComponent />
        <SliderComponent />
        <Container>
          <CategoryComponent />
          <TabContentComponent />
          <PromoComponent />
          <InterestContentComponent />
          <BannerComponent />
        </Container>
        <FooterComponent />
      </div>
    );
  }
}
