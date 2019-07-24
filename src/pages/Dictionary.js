import React, { Component, Fragment } from 'react';
import { SearchMedicineComponent } from '../components/Search';
import BannerComponent from '../components/Banner';
import SliderComponent from '../components/Slider';
import { InterestContentComponent } from '../components/ContentProducts';
import '../styles/styles.css';


export default class Dictionary extends Component {
    render() {
        return (
            <Fragment>
                <SliderComponent banner />
                <SearchMedicineComponent />
                <InterestContentComponent />
                <BannerComponent />
            </Fragment>
        );
    }
}