import React, { Component, Fragment } from 'react';
import { InterestContentComponent } from '../components/ContentProducts';
import BannerComponent from '../components/Banner';
import '../styles/styles.css';


export default class Subsidiary extends Component {
    render() {
        return (
            <Fragment>
                <iframe width="100%" height="500px" src="https://www.droguerialaeconomia.com/economia/site/mapsucursales" title="iframe for sucursale" />
                <InterestContentComponent />
                <BannerComponent />
            </Fragment>
        );
    }
}
