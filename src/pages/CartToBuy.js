import React, { useState, useEffect } from 'react';
import {
    Container, Col, Row, Card, CardBody,
    CardTitle, Button
} from 'reactstrap';
import BannerComponent from '../components/Banner';
import { FormatPointsSupensive, FormatCOPNumber } from '../managers/helpers/HelperManager';
import { useGlobal } from '../managers/store/Context';
import { API } from '../managers/api/ApiManager';

export default function CartToBuy() {
    let newPrices = [], pricesAntes = [], subTotal = 0, subTotalAntes = 0, totalBuy = 0;
    let URL_IMAGE = `https://www.droguerialaeconomia.com/economia/site/img/`;
    const [getProducts, setProducts] = useState([]);
    const [state, dispatch] = useGlobal();
    const [getDomicilie, setDomicilie] = useState(0);

    useEffect(() => {
        if (localStorage.getItem("cart")) {
            setProducts(JSON.parse(localStorage.getItem("cart")));
        }
    }, []);

    useEffect(() => {
        funRetrieveHomeServiceValue()
    }, [])


    const funRetrieveHomeServiceValue = async () => {
        let resRetrieveHomeServiceValue = await API.GET.RetrieveHomeServiceValue(localStorage.getItem("city"));
        if (!resRetrieveHomeServiceValue.error) setDomicilie(resRetrieveHomeServiceValue.message[0].valor_domicilio)
    }

    const funEditCart = (product, countProduct = 0, type) => {
        let products = JSON.parse(localStorage.getItem("cart"));
        if (products) {
            let isRemove = false;
            products.forEach(item => {
                if (item.codigo === product.codigo) {
                    if (type === "+") {
                        item.countProduct += item.stock >= countProduct ? countProduct : item.stock
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

    const funSumSubTotal = (item) => {
        pricesAntes.push(item.Antes * item.countProduct);
        subTotalAntes = pricesAntes.reduce((total, num) => total + num);
        newPrices.push((item.VlrMinimo < subTotalAntes ? item.Ahora : item.Antes) * item.countProduct)
        subTotal = newPrices.reduce((total, num) => total + num);
        totalBuy = getDomicilie + subTotal;
        localStorage.setItem("generateOrder", btoa(JSON.stringify({
            totalBuy,
            discount: 0,
            getDomicilie
        })));
    }

    const funBtnDeleteCart = (e, codigo) => {
        e.preventDefault();
        funDeleteProductCart(codigo);
    }

    return (
        <>
            <Container>
                <h5 className="mt-4">{getProducts.length > 0 ? "CARRITO DE COMPRAS" : "NO HAY PRODUCTOS AGREGADOS AL CARRITO"}</h5>
                <Row>
                    <Col md={8}>
                        <div className="tt-shopcart-table-02">
                            <table id="tbl-prod">
                                <tbody className="tbody-cart-buy">
                                    {getProducts.map((item, i) => {
                                        funSumSubTotal(item);


                                        let viewPrice = (item.VlrMinimo < subTotalAntes) ? item.Ahora : item.Antes;
                                        let calcutateSubtotalPrice = (item.VlrMinimo < subTotalAntes) ? (item.Ahora * item.countProduct) : (item.Ahora * item.Antes);

                                        return (
                                            <tr key={i}>
                                                <td>
                                                    <div className="tt-product-img" style={{ position: 'relative' }}>
                                                        <img src={`${URL_IMAGE}${item.codigo}.png`} alt={`item${i}`} />
                                                        {(item.Porcentaje > 0 && item.VlrMinimo < subTotalAntes) && <div className="div-percent-buy">-{item.Porcentaje}%</div>}
                                                    </div>
                                                </td>
                                                <td>
                                                    <h2 className="tt-title">
                                                        {FormatPointsSupensive(item.descripcion)}
                                                    </h2>
                                                    <ul className="tt-list-parameters">
                                                        <li>
                                                            <div className="tt-price">
                                                                {FormatCOPNumber(viewPrice)}
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
                                                                {FormatCOPNumber(calcutateSubtotalPrice)}
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <div className="tt-price">
                                                        {FormatCOPNumber(viewPrice)}
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
                                                        {FormatCOPNumber(calcutateSubtotalPrice)}
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="# " className="tt-btn-close" onClick={e => funBtnDeleteCart(e, item.codigo)} > </a>
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
                                                <td>{state.totalProduct}</td>
                                            </tr>
                                            <tr>
                                                <th>Sub-total:</th>
                                                <td>{FormatCOPNumber(subTotal)}</td>
                                            </tr>
                                            <tr>
                                                <th>Domicilio:</th>
                                                <td>{FormatCOPNumber(getDomicilie)}</td>
                                            </tr>
                                            <tr>
                                                <th>   <hr /></th>
                                                <td>   <hr /></td>
                                            </tr>
                                            <tr>
                                                <th>Total:</th>
                                                <td>{FormatCOPNumber(totalBuy)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {
                                        totalBuy > 0 &&
                                        <Button block onClick={() => window.location.href = "/processbuy"}>Realizar compra</Button>
                                    }
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


