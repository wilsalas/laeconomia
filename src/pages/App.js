import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import PromoComponent from '../components/Promo';
import HeaderComponent from '../components/Header';
import SliderComponent from '../components/Slider';
import { CategoryComponent } from '../components/Category';
import { TabContentComponent, InterestContentComponent , SponsorShipsComponent} from '../components/ContentProducts';
import BannerComponent from '../components/Banner';
import FooterComponent from '../components/Footer';
import { ModalComponent } from '../components/PopUp';
import '../styles/styles.css';

export default class App extends Component {

  render() {

    return (
      <Fragment>
        <HeaderComponent />
        <SliderComponent />
        <Container>
          <CategoryComponent />
          <TabContentComponent />
          <PromoComponent />
          <SponsorShipsComponent />
          <InterestContentComponent />
          <BannerComponent />
        </Container>
        <FooterComponent />
        <ModalComponent />

      </Fragment>
    );
  }
}
