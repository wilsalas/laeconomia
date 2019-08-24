import React, { useState, useEffect} from 'react';
import {
    Container, Col, Row
} from 'reactstrap';
import BannerComponent from '../components/Banner';
import { InterestContentComponent } from '../components/ContentProducts';
import { FormatCOPNumber } from '../managers/helpers/HelperManager';



export default function ProductDetails() {

    const [getDetailProduct, setDetailProduct] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("dp")) {
            setDetailProduct(JSON.parse(atob(localStorage.getItem("dp"))))
        }
    }, [])
    
console.log(getDetailProduct);

    return (
        <>
            <Container>
                <Row className="mt-4">
                    <Col md={6}>
                        <img src={`https://www.droguerialaeconomia.com/economia/site/img/${getDetailProduct.codigo}.png`} alt="item" width="100%" />
                    </Col>
                    <Col md={6}>
                        <ul className="list-detail-product">
                            <li>
                                <h6>Unidad: {getDetailProduct.IdUnidad} <br /> {getDetailProduct.Cant} unidades disponibles</h6>
                            </li>
                            <li className="margin-top-detail-product">
                                <h3>{getDetailProduct.descripcion}</h3>
                            </li>
                            <li className="margin-top-detail-product">

                                <div className="content-detail-product">
                                    <p className="text-price-blue">{FormatCOPNumber(getDetailProduct.Ahora)}</p>
                                    <div className="div-percent-product">{getDetailProduct.Porcentaje}%</div>
                                    <p className="text-subray">{FormatCOPNumber(getDetailProduct.Antes)}</p>
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
                                            <div className="tt-input-counter style-01" style={{ maxWidth: '100%' }}>
                                                <span className="minus-btn" />
                                                <input type="text" defaultValue={1} size={100} className="border-heigth" />
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
                                <p>Categoría: {getDetailProduct.Categoria}</p>
                                {/* <p>Tags: Altex, piel, cuidado, laminas</p> */}
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <InterestContentComponent />
            <BannerComponent />
        </>
    );
}
