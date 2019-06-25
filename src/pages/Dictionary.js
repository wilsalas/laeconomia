import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { SearchMedicineComponent } from '../components/Search';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import BannerComponent from '../components/Banner';
import Content1Component from '../components/Content1';
import { InterestContentComponent } from '../components/ContentProducts';
import '../styles/styles.css';


export default class Dictionary extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <Content1Component seletedMenu={3} />
                <Container>
                    <SearchMedicineComponent />
                    <InterestContentComponent />
                    <BannerComponent />
                </Container>
                <FooterComponent />
            </div>
        );
    }
}