import React, { Component, Fragment } from 'react';
import HeaderComponent from '../components/Header';
import SliderComponent from '../components/Slider';
import { GroupCategoryComponent } from '../components/Category';
import FooterComponent from '../components/Footer';
import BannerComponent from '../components/Banner';
import '../styles/styles.css';
export default class BaCare extends Component {

    render() {
        return (
            <Fragment>
                <HeaderComponent />
                <SliderComponent banner/>
                <GroupCategoryComponent />
                <BannerComponent />
                <FooterComponent />
            </Fragment>
        );
    }

}