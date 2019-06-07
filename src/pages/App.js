import React, { Component } from 'react';
import { Container } from 'reactstrap';
import PromoComponent from '../components/Promo';
import { SearchHeaderComponent } from '../components/Search';
import HeaderComponent from '../components/Header';
import Content1Component from '../components/Content1';
import { CategoryComponent } from '../components/Category';
import { TabContentComponent, InterestContentComponent } from '../components/ContentProducts';
import BannerComponent from '../components/Banner';
import FooterComponent from '../components/Footer';
import '../styles/styles.css';

export default class App extends Component {

  render() {

    return (
      <div>
        <SearchHeaderComponent />
        <HeaderComponent />


        <Content1Component seletedMenu={0} />
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
