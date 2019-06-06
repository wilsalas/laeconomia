import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchComponent from '../components/Search';
import HeaderComponent from '../components/Header';
import Content1Component from '../components/Content1';
// import { ListCategoryComponent, OrderCategoryComponent } from '../components/Category';
import TabContentComponent from '../components/TabContent';
import FooterComponent from '../components/Footer';
import BannerComponent from '../components/Banner';
import '../styles/styles.css';

export default class DrogueryVirtual extends Component {

    render() {
        return (
            <Fragment>
                <SearchComponent />
                <HeaderComponent />
                <Content1Component seletedMenu={1} />
                <Container>
                    <Row>
                        <Col md={2} className="mt-4">
                            <Row>
                                <Col md={12}>
                                    <h5>ORDENAR POR</h5> 
                                </Col>
                                <Col md={12}>
                                    CATEGORIAS
                                </Col>
                            </Row>
                        </Col>
                        <Col md={10}>
                            <TabContentComponent />
                        </Col>
                    </Row>
                </Container>
                <BannerComponent />
                <FooterComponent />
            </Fragment>
        );
    }

}