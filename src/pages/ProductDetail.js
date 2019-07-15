import React, { Component, Fragment } from 'react';
import {
    Container, Col, Row, Card, CardBody,
    CardTitle, Button
} from 'reactstrap';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import BannerComponent from '../components/Banner';
import { InterestContentComponent } from '../components/ContentProducts';
import '../styles/styles.css';


class ProductDetail extends Component {
    render() {
        return (
            <Fragment>
                <HeaderComponent />

                <Container>
                    <Row className="mt-4">
                        <Col md={6}>
                            <img src="images/loader.svg" data-src="https://www.droguerialaeconomia.com/economia/site/img/042681.png" alt="item1" width="100%" />
                        </Col>
                        <Col md={6}>
                            <ul className="list-detail-product">
                                <li>
                                    <h6>SKU: 001 <br /> 40 unidades disponibles</h6>
                                </li>
                                <li>
                                    <h3>Altex lámina antibrillo x 50 unidades</h3>
                                </li>
                                <li>

                                    <div className="content-detail-product">
                                        <p className="text-price-blue">$999.990</p>
                                        <div className="div-percent-product">{Math.floor((Math.random() * 100) + 1)}%</div>
                                        <p className="text-subray">$999.990</p>
                                        <p className="text-gray">Mililitro a $999.999</p>
                                    </div>

                                </li>
                                <li>
                                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</p>
                                </li>
                                <li>
                                    <h3>Altex lámina antibrillo x 50 unidades</h3>
                                </li>
                                <li>
                                    1
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <InterestContentComponent />


                <BannerComponent />
                <FooterComponent />



            </Fragment>
        );
    }
}

export default ProductDetail