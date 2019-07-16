import React, { Component, Fragment } from 'react';
import {
    Container, Col, Row
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
                                <li className="margin-top-detail-product">
                                    <h3>Altex lámina antibrillo x 50 unidades</h3>
                                </li>
                                <li className="margin-top-detail-product">

                                    <div className="content-detail-product">
                                        <p className="text-price-blue">$999.990</p>
                                        <div className="div-percent-product">{Math.floor((Math.random() * 100) + 1)}%</div>
                                        <p className="text-subray">$999.990</p>
                                        <p className="text-gray">Mililitro a $999.999</p>
                                    </div>

                                </li>
                                <li className="margin-top-detail-product">
                                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                                    quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.
                                    </p>
                                </li>
                                <li className="margin-top-detail-product">
                                    <Row>
                                        <Col md={6} className="mt-4">
                                            <div className="detach-quantity-desctope">
                                                <div className="tt-input-counter style-01" style={{maxWidth:'100%'}}>
                                                    <span className="minus-btn" />
                                                    <input type="text" defaultValue={1} size={100} className="border-heigth"/>
                                                    <span className="plus-btn" />
                                                </div>
                                            </div>
                                        </Col>

                                        <Col md={6} className="mt-4">
                                        <button className="btn-lg btn-outline-primary rounded-pill border-heigth btn-block">Agregar</button>

                                        </Col>
                                    </Row>

                                </li>
                                <li className="mt-2">
                                    <p>Categoría: Cuidado de la piel</p>
                                    <p>Tags: Altex, piel, cuidado, laminas</p>
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