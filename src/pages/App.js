import React, { Component, Fragment } from 'react';
import PromoComponent from '../components/Promo';
import SliderComponent from '../components/Slider';
import { CategoryComponent } from '../components/Category';
import { TabContentComponent, InterestContentComponent, SponsorShipsComponent } from '../components/ContentProducts';
import BannerComponent from '../components/Banner';
import { ModalLocation } from '../components/PopUp';
import { ROUTES } from '../managers/api/ApiManager';
import '../styles/styles.css';

export default class App extends Component {

  render() {

    return (
      <Fragment>
        <SliderComponent routes={ROUTES.MAIN} />
        <CategoryComponent />
        <TabContentComponent />
        <PromoComponent />
        <SponsorShipsComponent />
        <InterestContentComponent />
        <BannerComponent />
        <ModalLocation />
      </Fragment>
    );
  }
}
