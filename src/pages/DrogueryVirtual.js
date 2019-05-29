import React, { Component } from 'react';
import SearchComponent from '../components/Search';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import Content1Component from '../components/Content1';
import '../styles/styles.css';

export default class DrogueryVirtual extends Component {

    render() {
        return (
            <div>
                <SearchComponent />
                <HeaderComponent />
                <div id="tt-Sale">
                    <Content1Component seletedMenu={1}/>
                    <br />
                </div>
                <FooterComponent/>
            </div>
        );
    }

}