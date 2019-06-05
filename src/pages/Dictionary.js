import React, { Component } from 'react';
import { Container } from 'reactstrap';
import SearchComponent from '../components/Search';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import BannerComponent from '../components/Banner';
import SearchMedicineComponent from '../components/SearchMedicine';
import Content1Component from '../components/Content1';
import InterestComponent from '../components/Interest';
import '../styles/styles.css';


export default class Dictionary extends Component {
    render() {
        return (
            <div>
                <SearchComponent />
                <HeaderComponent />
                <Content1Component seletedMenu={3} />
                <Container>
                    <SearchMedicineComponent  />
                    <InterestComponent />
                    <BannerComponent />
                </Container>
                <FooterComponent />
            </div>
        );
    }
}