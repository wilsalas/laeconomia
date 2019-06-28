import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { SearchMedicineComponent } from '../components/Search';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import BannerComponent from '../components/Banner';
import SliderComponent from '../components/Slider';
import { InterestContentComponent } from '../components/ContentProducts';
import '../styles/styles.css';


export default class Dictionary extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <SliderComponent banner/>
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