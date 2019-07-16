import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import HeaderComponent from '../components/Header';
import { InterestContentComponent } from '../components/ContentProducts';
import BannerComponent from '../components/Banner';
import FooterComponent from '../components/Footer';
import '../styles/styles.css';


export default class Subsidiary extends Component {
    render() {
        return (
            <Fragment>
                <HeaderComponent />
                <iframe width="100%" height="500px" src="https://www.droguerialaeconomia.com/economia/site/mapsucursales"  title="iframe for sucursale"/>
                <Container>
                    <InterestContentComponent />
                    <BannerComponent />
                </Container>
                <FooterComponent />
            </Fragment>
        );
    }
}
