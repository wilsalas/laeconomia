import React from 'react';
import {
    Container, Col, Row, Card, CardBody,
    CardTitle, Button
} from 'reactstrap';
import BannerComponent from '../components/Banner';

export default function CartToBuy() {
    return (
        <>
            <Container>
                <h5 className="mt-4">CARRITO DE COMPRAS</h5>
                <Row>
                    <Col md={8}>
                        <div className="tt-shopcart-table-02">
                            <table>
                                <tbody className="tbody-cart-buy">


                                    {new Array(10).fill().map((value, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>
                                                    <div className="tt-product-img">
                                                        <img src="images/loader.svg" data-src="https://www.droguerialaeconomia.com/economia/site/img/042681.png" alt="item1" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <h2 className="tt-title">
                                                        Altex lámina antibrillo x 50 unidades
                                                            </h2>
                                                    <ul className="tt-list-parameters">
                                                        <li>
                                                            <div className="tt-price">
                                                                $999.990
                                                                    </div>
                                                        </li>
                                                        <li>
                                                            <div className="detach-quantity-mobile" />
                                                        </li>
                                                        <li>
                                                            <div className="tt-price subtotal">
                                                                $999.990
                                                                    </div>
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <div className="tt-price">
                                                        $999.990
                                                          </div>
                                                </td>
                                                <td>
                                                    <div className="detach-quantity-desctope">
                                                        <div className="tt-input-counter style-01">
                                                            <span className="minus-btn" />
                                                            <input type="text" defaultValue={1} size={100} />
                                                            <span className="plus-btn" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="tt-price subtotal">
                                                        $999.990
                                                            </div>
                                                </td>
                                                <td>
                                                    <a href="/" className="tt-btn-close" > </a>
                                                </td>
                                            </tr>

                                        );
                                    })}

                                </tbody>
                            </table>
                            <div className="tt-shopcart-btn">
                                <div className="col-left">
                                    <a className="btn-link" href="/"><i className="icon-e-19" />SEGUIR COMPRANDO</a>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <Card >
                            <CardBody >
                                <CardTitle className="text-center" style={{ fontWeight: 600, color: "#1b42cb" }}>LISTADO DE ARTÍCULOS</CardTitle>
                                <div className="tt-shopcart-box tt-boredr-large text-left">
                                    <table className="tt-shopcart-table01">
                                        <tbody>
                                            <tr>
                                                <th>Total artículos:</th>
                                                <td>15</td>
                                            </tr>
                                            <tr>
                                                <th>Sub-total:</th>
                                                <td>$2’999.990</td>
                                            </tr>
                                            <tr>
                                                <th>Domicilio:</th>
                                                <td>$5.500</td>
                                            </tr>
                                            <tr>
                                                <th>   <hr /></th>
                                                <td>   <hr /></td>
                                            </tr>
                                            <tr>
                                                <th>Total:</th>
                                                <td>$3’005.490</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <Button block onClick={() => window.location.href = "/processbuy"}>Realizar compra</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <BannerComponent />
        </>
    );
}

