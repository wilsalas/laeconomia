import React, { Component, Fragment } from 'react';
import BabyCareComponent from '../components/BabyCare';
import { GroupCategoryComponent } from '../components/Category';
import BannerComponent from '../components/Banner';

import '../styles/styles.css';

export default class DrogueryVirtual extends Component {

    render() {
        return (
            <Fragment>
                <BabyCareComponent />
                <GroupCategoryComponent />
                <BannerComponent />
            </Fragment>
        );
    }

}