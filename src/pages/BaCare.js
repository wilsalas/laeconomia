import React, { Component, Fragment } from 'react';
import SliderComponent from '../components/Slider';
import { GroupCategoryComponent } from '../components/Category';
import BannerComponent from '../components/Banner';
import { ROUTES } from '../managers/api/ApiManager';

import '../styles/styles.css';
export default class BaCare extends Component {

    render() {
        return (
            <Fragment>
                <SliderComponent routes={ROUTES.MAIN} banner />
                <GroupCategoryComponent />
                <BannerComponent />
            </Fragment>
        );
    }

}