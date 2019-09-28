import React, { useState, useEffect } from 'react';
import {
    Container, Col, Row
} from 'reactstrap';
import BannerComponent from '../components/Banner';
import { InterestContentComponent } from '../components/ContentProducts';
import { FormatCOPNumber, AlertSwal } from '../managers/helpers/HelperManager';
import { useGlobal } from '../managers/store/Context';



export default function ProductDetails() {

    const [, dispatch] = useGlobal();
    const [getDetailProduct, setDetailProduct] = useState([]);
    const [getCountProducto, setCountProducto] = useState(1);

    useEffect(() => {
        if (localStorage.getItem("dproduct")) {
            setDetailProduct(JSON.parse(atob(localStorage.getItem("dproduct"))))
        }
    }, [])


    const funBtnsAddCart = (cantProduct, type) => {
        if (type === "+") {
            if (getCountProducto < cantProduct) {
                setCountProducto(getCountProducto + 1);
            } else {
                AlertSwal("CANT_PRODUCT");
            }
        } else {
            if (getCountProducto !== 1) {
                setCountProducto(getCountProducto - 1);
            }
        }
    }

    const funAddCart = (product, countProduct = 0) => {
        if (getCountProducto > 0) {
            let products = JSON.parse(localStorage.getItem("cart"));
            if (products) {
                let isAdd = false;
                products.forEach((item, i) => {
                    if (item.codigo === product.codigo) {
                        item.countProduct += item.stock >= countProduct ? countProduct : item.stock
                        isAdd = true;
                    }
                })
                if (!isAdd) {
                    products.push({ ...product, countProduct });
                }
            } else {
                products = [{ ...product, countProduct }];
            }
            localStorage.setItem("cart", JSON.stringify(products));
            funCountProduct(products);
        }
    }

    const funCountProduct = products => {
        let totalProduct = 0;
        products.forEach(item => totalProduct += item.countProduct);
        dispatch({ type: 'COUNT_TOTAL_PRODUCT', totalProduct });
    }

    return (
        <>
            <Container>
                <Row className="mt-4">
                    <Col md={6}>
                        <img src={`https://www.droguerialaeconomia.com/economia/site/img/${getDetailProduct.codigo}.png`} alt="item" width="100%" />
                    </Col>
                    <Col md={6}>
                        <ul className="list-detail-product">
                            <li >
                                <h6 className="mt-1 mb-1"> {getDetailProduct.stock} Unidades disponibles</h6>
                            </li>
                            <li className="margin-top-detail-product mt-1">
                                <h3 title={getDetailProduct.descripcion}>{getDetailProduct.descripcion}</h3>
                            </li>
                            <li className="margin-top-detail-product mt-1">

                                <div className="content-detail-product">
                                    <p className="text-price-blue">{FormatCOPNumber(getDetailProduct.Ahora)}</p>
                                    {getDetailProduct.Porcentaje>0 && <div className="div-percent-product">{getDetailProduct.Porcentaje}%</div>}
                                    <p className="text-subray">{FormatCOPNumber(getDetailProduct.Antes)}</p>
                                    <p className="text-gray">{(getDetailProduct.medida && getDetailProduct.medida !== "") && `${getDetailProduct.medida} ${getDetailProduct.precioMedida}`}</p>
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
                                                <span className="minus-btn" onClick={() => funBtnsAddCart(getDetailProduct.stock, "-")} />
                                                <input type="text" value={getCountProducto} className="border-heigth" readOnly />
                                                <span className="plus-btn" onClick={() => funBtnsAddCart(getDetailProduct.stock, "+")} />
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md={6} className="mt-4">
                                        <button className="btn-lg btn-outline-primary rounded-pill border-heigth btn-block"
                                            onClick={() => funAddCart(getDetailProduct, getCountProducto)}
                                        >Agregar</button>

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
