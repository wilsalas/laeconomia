import React, { Component, Fragment } from 'react';
import { SearchHeaderComponent } from '../components/Search';
import HeaderComponent from '../components/Header';
import Content1Component from '../components/Content1';
import { GroupCategoryComponent } from '../components/Category';
import FooterComponent from '../components/Footer';
import BannerComponent from '../components/Banner';
import '../styles/styles.css';

export default class DrogueryVirtual extends Component {

    render() {
        return (
            <Fragment>
                <SearchHeaderComponent />
                <HeaderComponent />
                <Content1Component seletedMenu={1} />
                <GroupCategoryComponent />
                <BannerComponent />
                <FooterComponent />
            </Fragment>
        );
    }

}