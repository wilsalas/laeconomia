import React, { Component, Fragment } from 'react';
import SliderComponent from '../components/Slider';
import { GroupCategoryComponent } from '../components/Category';
import BannerComponent from '../components/Banner';
import '../styles/styles.css';
export default class BaCare extends Component {

    render() {
        return (
            <Fragment>
                <SliderComponent banner/>
                <GroupCategoryComponent />
                <BannerComponent />
            </Fragment>
        );
    }

}