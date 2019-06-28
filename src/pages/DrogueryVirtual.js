import React, { Component, Fragment } from 'react';
import HeaderComponent from '../components/Header';
import BabyCareComponent from '../components/BabyCare';
import { GroupCategoryComponent } from '../components/Category';
import FooterComponent from '../components/Footer';
import BannerComponent from '../components/Banner';
import '../styles/styles.css';

export default class DrogueryVirtual extends Component {

    render() {
        return (
            <Fragment>
                <HeaderComponent />
                <BabyCareComponent />
                <GroupCategoryComponent />
                <BannerComponent />
                <FooterComponent />
            </Fragment>
        );
    }

}