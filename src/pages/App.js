import React, { Component } from 'react';
import { Container } from 'reactstrap';
import PromoComponent from '../components/Promo';
import InterestComponent from '../components/Interest';
import SearchComponent from '../components/Search';
import HeaderComponent from '../components/Header';
import Content1Component from '../components/Content1';
import CategoryComponent from '../components/Category';
import TabProductsComponent from '../components/TabProducts';
import BannerComponent from '../components/Banner';
import FooterComponent from '../components/Footer';
import '../styles/styles.css';

export default class App extends Component {

  render() {

    return (
      <div>
        <SearchComponent />
        <HeaderComponent />

        <Content1Component seletedMenu={0} />

        <Container>
          <CategoryComponent />
          <TabProductsComponent />
          <PromoComponent />
          <InterestComponent />
          <BannerComponent />
        </Container>
        
        <FooterComponent />


      </div>
    );
  }
}
