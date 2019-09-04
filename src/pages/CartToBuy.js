import React, { useState, useEffect } from 'react';
import {
    Container, Col, Row, Card, CardBody,
    CardTitle, Button
} from 'reactstrap';
import BannerComponent from '../components/Banner';
import { FormatPointsSupensive, FormatCOPNumber } from '../managers/helpers/HelperManager';
import { useGlobal } from '../managers/store/Context';

export default function CartToBuy() {
    let URL_IMAGE = `https://www.droguerialaeconomia.com/economia/site/img/`;
    const [getProducts, setProducts] = useState([]);
    const [getSubTotal, setSubTotal] = useState(0);
    const [, dispatch] = useGlobal();
    // var table = document.getElementById("tbl-prod"), sumVal = 0;
    useEffect(() => {
        if (localStorage.getItem("cart")) {
            setProducts(JSON.parse(localStorage.getItem("cart")));
        }
    }, []);


    // useEffect(() => {

    //     for (var i = 1; i < table.rows.length; i++) {
    //         sumVal  += parseInt(table.rows[i].cells[2].innerHTML);
    //         console.log(sumVal);
    //     }

    // },[])


    const funEditCart = (product, countProduct = 0, type) => {
        let products = JSON.parse(localStorage.getItem("cart"));
        if (products) {
            let isRemove = false;
            products.forEach(item => {
                if (item.codigo === product.codigo) {
                    if (type === "+") {
                        item.countProduct += countProduct
                    } else {
                        if (item.countProduct === 1) {
                            isRemove = true;
                            funDeleteProductCart(item.codigo);
                        } else {
                            item.countProduct -= countProduct
                        }
                    }
                }
            });
            if (!isRemove) {
                localStorage.setItem("cart", JSON.stringify(products));
                setProducts(products);
                funCountProduct(products);

            }
        }
    }


    const funDeleteProductCart = codigo => {
        let products = JSON.parse(localStorage.getItem("cart")), index = -1;
        if (products) {
            products.forEach((item, i) => {
                if (item.codigo === codigo) {
                    index = i;
                    return;
                }
            });
            products.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(products));
            setProducts(products);
            funCountProduct(products);
        }
    }

    const funCountProduct = products => {
        let totalProduct = 0;
        products.forEach(item => totalProduct += item.countProduct);
        dispatch({ type: 'COUNT_TOTAL_PRODUCT', totalProduct })
    }

    const funSumSubTotal = (ahora ,countProduct)  => {
        let newPrices = 0;


        newPrices +=  FormatCOPNumber(ahora * countProduct)
        console.log(newPrices);



    }

    return (
        <>
            <Container>
                <h5 className="mt-4">CARRITO DE COMPRAS</h5>
                <Row>
                    <Col md={8}>
                        <div className="tt-shopcart-table-02">
                            <table id="tbl-prod">
                                <tbody className="tbody-cart-buy">
                                    {getProducts.map((item, i) => {

                                        funSumSubTotal(item.Ahora, item.countProduct);


                                        return (
                                            <tr key={i}>
                                                <td>
                                                    <div className="tt-product-img">
                                                        <img src={`${URL_IMAGE}${item.codigo}.png`} alt={`item${i}`} />
                                                    </div>
                                                </td>
                                                <td>
                                                    <h2 className="tt-title">
                                                        {FormatPointsSupensive(item.descripcion)}
                                                    </h2>
                                                    <ul className="tt-list-parameters">
                                                        <li>
                                                            <div className="tt-price">
                                                                {FormatCOPNumber(item.Ahora)}
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="detach-quantity-mobile" >
                                                                <div className="tt-input-counter style-01">
                                                                    <span className="minus-btn" onClick={() => funEditCart(item, 1, "-")} />
                                                                    <input type="text" value={item.countProduct} readOnly />
                                                                    <span className="plus-btn" onClick={() => funEditCart(item, 1, "+")} />
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="tt-price subtotal">
                                                                {FormatCOPNumber(item.Ahora * item.countProduct)}
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <div className="tt-price">
                                                        {FormatCOPNumber(item.Ahora)}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="detach-quantity-desctope">
                                                        <div className="tt-input-counter style-01">
                                                            <span className="minus-btn" onClick={() => funEditCart(item, 1, "-")} />
                                                            <input type="text" value={item.countProduct} readOnly />
                                                            <span className="plus-btn" onClick={() => funEditCart(item, 1, "+")} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="tt-price subtotal">
                                                        {FormatCOPNumber(item.Ahora * item.countProduct)}
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
                                                <td>{getProducts.length}</td>
                                            </tr>
                                            <tr>
                                                <th>Sub-total:</th>
                                                <td>{FormatCOPNumber(getSubTotal)}</td>
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


