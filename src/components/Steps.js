import React, { useState, useEffect } from 'react';
import { LoginComponent } from './ContentForm';
import {
    Button, Container, Col, Row, Label,
    FormGroup, Input, InputGroup, InputGroupAddon,
    InputGroupText,
    Card, CardBody, CardTitle
} from 'reactstrap';
import { useGlobal } from '../managers/store/Context';
import { API, FormatCoupon } from '../managers/api/ApiManager';
import { AlertSwal, FormatCOPNumber } from '../managers/helpers/HelperManager';

const StepLoginComponent = () => {
    return (
        <div className="animated fadeIn">
            <br />
            <LoginComponent />
        </div>
    );
}

const StepFacturationComponent = props => {
    const [, dispatch] = useGlobal();
    const [getListAdress, setListAdress] = useState([]);
    const [getItemSelect, setItemSelect] = useState("");
    const [getInputSelect, setInputSelect] = useState("");
    const [getTypeSelect, setTypeSelect] = useState("");
    useEffect(() => {
        if (getListAdress.length < 1) {
            funPerformRetrieveAddressList();
        }
    });


    // get all citys
    const funPerformRetrieveAddressList = async () => {
        let resRetrieveAddressList = await API.POST.PerformRetrieveAddressList(
            props.getProfile.nit,
            props.getProfile.nombres,
            props.getProfile.email,
            props.getProfile.auth_token);

        if (!resRetrieveAddressList.error) {
            setListAdress(resRetrieveAddressList.message.data)
        } else {
            if (resRetrieveAddressList.message === "TOKEN_ERROR") {
                dispatch({ type: "REFRESH_TOKEN_MODAL", refreshTokenModal: true });
            }
        }
    }

    const funSelectedAdressType = () => {
        let adress = "";
        if (getTypeSelect === "default") {
            if (getItemSelect === "") {
                return AlertSwal("ADDRESS_SELECTED", "Selecciona una dirección");
            } else {
                adress = getItemSelect;
            }
        } else if (getTypeSelect === "temporal") {
            if (getInputSelect === "") {
                return AlertSwal("ADDRESS_SELECTED", "Ingresa una dirección temporal");
            } else {
                adress = getInputSelect;
            }
        }
        dispatch({ type: "ADRESS", adress });
        dispatch({ type: "STEP_ACTIVE", step: 3 })
    }



    return (
        <>
            <br />
            <Container className="animated fadeIn">
                <h5 className="mt-4 mb-2 text-center" >INFORMACIÓN DEL ENVÍO</h5>
                <div className="tt-login-form">
                    <Row className="mx-auto">
                        <Col md={6} xs={12}>
                            <div className="tt-item">
                                <Row>
                                    <Col md={8} xs={8}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="adress_default" onClick={() => setTypeSelect("default")} />  Dirección predeterminada
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={4} xs={4}>
                                        <FormGroup>
                                            <button className="btn btn-success" onClick={() => dispatch({ type: "MODAL_ADRESS", modalAdress: true })}> <i className="fas fa-plus"></i></button>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <FormGroup>
                                    <Input type="select" name="adress" className="account-input" onChange={e => setItemSelect(e.target.value)}>
                                        <option value="">Selecciona tu dirección</option>
                                        {getListAdress.map((item, i) => <option key={i} value={item.direccion}>{item.nombre_direccion} - {item.direccion}</option>)}

                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Button className="btn btn-border" block disabled={(getTypeSelect !== "default")} onClick={() => funSelectedAdressType()}>Seleccionar</Button>
                                </FormGroup>
                            </div>
                        </Col>
                        <Col md={6} xs={12}>
                            <div className="tt-item">
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="adress_default" onClick={() => setTypeSelect("temporal")} />  Dirección temporal
                                            </Label>
                                </FormGroup>
                                <FormGroup>
                                    <Label></Label>
                                    <Input className="account-input" type="text" name="adress" placeholder="Ingresa nueva dirección"
                                        onChange={e => setInputSelect(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Button className="btn btn-border" block disabled={(getTypeSelect !== "temporal")} onClick={() => funSelectedAdressType()}>Seleccionar</Button>
                                </FormGroup>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}

const StepPaymentMethodComponent = props => {

    const [selectedItem, setSelectedItem] = useState("");
    const [getCupon, setCupon] = useState("");
    const [getListCupon, setListCupon] = useState({});
    const [state, dispatch] = useGlobal();
    const [delivery] = useState([
        {
            icon: 'money',
            title: 'Efectivo'
        },
        {
            icon: 'datafono',
            title: 'Datáfono'
        }

    ]);
    // const [onlineMethod] = useState([
    //     {
    //         icon: 'pse',
    //         title: 'PSE'
    //     },
    //     {
    //         icon: 'credit_cart',
    //         title: 'Tarjeta de Crédito'
    //     },
    //     {
    //         icon: 'cobru',
    //         title: 'Saldo Cobru'
    //     }
    // ]);

    // select method avaliable
    const SeletedPaymentMethod = classname => setSelectedItem(classname);

    const funBack = (e, step) => {
        e.preventDefault();
        dispatch({ type: "STEP_ACTIVE", step })
    }

    const funGetCouponIsValidOrNot = async e => {
        e.preventDefault();
        let nameCupon = e.target.value;
        let resCouponIsValidOrNot = await API.GET.RetrieveWhetherCouponIsValidOrNot(
            e.target.value,
            props.getProfile.nit,
            props.getProfile.nombres,
            props.getProfile.email,
            props.getProfile.auth_token);
        if (!resCouponIsValidOrNot.error) {
            if (!resCouponIsValidOrNot.message.Success) {
                AlertSwal("ERROR_CUPON", "Nombre del cupon no existe");
                setCupon("ERROR_CUPON");
            } else {
                let couponResponse = FormatCoupon(resCouponIsValidOrNot.message.data[0]);



                if ((couponResponse.type === 0) && (atob(localStorage.getItem("generateOrder")) < couponResponse.minAmount)) {
                    AlertSwal("ERROR_CUPON", `El cupón ${couponResponse.name} solo es válido para compras mínimas de ${FormatCOPNumber(couponResponse.minAmount)}.`);
                    setCupon("ERROR_CUPON");
                }
                else {
                    let products = JSON.parse(localStorage.getItem("cart")), _products = [];
                    for (let index = 0; index < products.length; index++) {
                        _products.push({
                            codigo: products[index].codigo,
                            price: products[index].Ahora,
                            cantidad: products[index].countProduct,
                        })
                    }
                    const resTypeOfCoupon = await API.POST.PerformValidateTypeOfCoupon(couponResponse.type, _products)
                    if (resTypeOfCoupon.error) {
                        AlertSwal("ERROR_CUPON", `Este cupón no es válido para ser redimido.`);
                        setCupon("ERROR_CUPON");
                    }
                    else if (resTypeOfCoupon.message.ValorProductos < couponResponse.minAmount) {
                        // If the total of the order is not greater than min value of the coupon, the coupon will be invalid
                        AlertSwal("ERROR_CUPON", `El cupón ${nameCupon} solo es válido para compras mínimas de ${FormatCOPNumber(couponResponse.minAmount)}. Aplica para ${couponResponse.description}.`);
                        setCupon("ERROR_CUPON");
                    } else {
                        let order = JSON.parse(atob(localStorage.getItem("generateOrder")));
                        localStorage.setItem("generateOrder", btoa(JSON.stringify({
                            totalBuy: (order.totalBuy - couponResponse.value),
                            discount: couponResponse.value,
                            getDomicilie: order.getDomicilie
                        })));
                        setCupon("SUCCESS_CUPON");
                        setListCupon(resCouponIsValidOrNot.message.data[0]);

                        // restar el precio del cupon con el valor total de la orden
                    }
                }
            }
            //dispatch({ type: "STEP_ACTIVE", step: 4 })
            // setListAdress(resRetrieveAddressList.message.data)
        } else {
            if (resCouponIsValidOrNot.message === "TOKEN_ERROR") {
                dispatch({ type: "REFRESH_TOKEN_MODAL", refreshTokenModal: true });
            }
        }

    }

    const funGenerateOrder = async () => {


        if (selectedItem === "") {
            AlertSwal("SELECTED_PAYMENT_METHOD", "Seleccione un metodo de pago");
        } else {
            let newOrder = JSON.parse(atob(localStorage.getItem("generateOrder"))), newProductsCart = [], newCupon = {};

            JSON.parse(localStorage.getItem("cart")).forEach((item, i) => {
                newProductsCart.push({
                    codigo: item.codigo,
                    descripcion: item.descripcion,
                    price: item.Ahora,
                    stock: item.stock,
                    IdUnidad: item.IdUnidad,
                    cantidad: item.countProduct,
                })
            })

            if (Object.keys(getListCupon).length > 0) {
                newCupon = getListCupon;
                newCupon.Aplica = true;
            } else {
                newCupon.Aplica = false;
            }


            let resPerformPurchase = await API.POST.PerformPurchase(
                localStorage.getItem("city"),
                localStorage.getItem("nameCity"),
                props.getProfile.nit,
                props.getProfile.nombres,
                props.getProfile.email,
                props.getProfile.auth_token,
                state.adress,
                selectedItem,
                newOrder.totalBuy,
                newOrder.getDomicilie,
                newProductsCart,
                newCupon
            )
            if (!resPerformPurchase.error) {
                dispatch({ type: "STEP_ACTIVE", step: 4 })
                dispatch({ type: "GET_ORDER", order: resPerformPurchase.message[0] })
                AlertSwal("ORDER_SUCCESS", `Su pedido se realizó exitosamente y será enviado a la dirección: ${state.adress}`, `Pedido ${resPerformPurchase.message[0].numeroPedido}`);
            } else {
                AlertSwal("ERROR_SERVER");
            }
        }
    }

    return (
        <>
            <br />
            <Container className="animated fadeIn">
                <h5 className="mt-2 text-center " >MEDIOS DE PAGO</h5>
                <div className="tt-login-form">
                    <Row className="text-center justify-content-center">
                        {/* <Col md={12} xs={12} className="mt-3"> */}
                        <div className="tt-item card-img-step " style={{ height: '100%' }}>
                            <h6 className="" >PAGA CONTRAENTREGA</h6>
                            <Row className="justify-content-center">
                                {delivery.map((value, i) => {
                                    return (
                                        <Col md={4} xs={4} key={i} onClick={() => SeletedPaymentMethod(value.title)}>
                                            <Card className={`card-step ${value.title === selectedItem ? 'col-active-step' : ''}`}>
                                                <CardBody>
                                                    <img width="100%" style={{ height: 45 }} src={`./assets/payment_methods/${value.icon}.png`} alt="Card1" />
                                                </CardBody>
                                            </Card>
                                            <CardTitle className={`mt-2 ${value.title === selectedItem ? 'col-active-title-step' : ''}`}>{value.title}</CardTitle>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </div>

                        {/* </Col> */}
                        {/* <Col md={4} xs={12} className="mt-3">
                            <div className="tt-item card-img-step" style={{ height: '100%' }}>
                                <h6 className="text-center" >PAGA ONLINE</h6>
                                <Row className="justify-content-center">
                                    {onlineMethod.map((value, i) => {
                                        return (
                                            <Col md={4} xs={4} key={i} onClick={() => SeletedPaymentMethod(value.title)}>
                                                <Card className={`card-step ${value.title === selectedItem ? 'col-active-step' : ''}`}>
                                                    <CardBody>
                                                        <img width="100%" style={{ height: 45 }} src={`./assets/payment_methods/${value.icon}.png`} alt="Card2" />
                                                    </CardBody>
                                                </Card>
                                                <CardTitle className={`mt-2 ${value.title === selectedItem ? 'col-active-title-step' : ''}`}>{value.title}</CardTitle>
                                            </Col>
                                        );
                                    })}
                                </Row>

                            </div>

                        </Col> */}
                        <Col md={8} xs={12} className="mt-3">
                            <div className="tt-item m card-img-step" style={{ height: '90%' }}>
                                <Row className="mb-3">
                                    <Col md={6} xs={12}>

                                        <h6>¿Tienes un cupón de descuento?</h6>
                                    </Col>
                                    <Col md={6} xs={12}>

                                        <InputGroup>
                                            <Input
                                                maxLength="15"
                                                onBlur={e => funGetCouponIsValidOrNot(e)}
                                                onChange={e => setCupon("")}
                                                placeholder="INGR3S4TUCUP0N" style={{
                                                    borderRadius: '11px 0px 0px 11px',
                                                    borderRight: 'none'
                                                }} />
                                            <InputGroupAddon addonType="append" >
                                                <InputGroupText className="input-group-personal" style={{
                                                    borderRadius: '0px 11px 11px 0px'
                                                }}>

                                                    {
                                                        getCupon !== "" &&
                                                        <img src={`/assets/${getCupon === "ERROR_CUPON" ? "icon_error.png" : "icon_success.png"}`} width="20px" height="20px" alt="img-response" />
                                                    }
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col md={8} xs={12} className="mt-3">
                            <Row className="float-right">
                                <Button onClick={() => funGenerateOrder()}>
                                    Continuar
                                    </Button>
                            </Row>

                            <Row>
                                <div className="tt-shopcart-btn">
                                    <div className="col-left">
                                        <a className="btn-link" href="/" style={{ fontSize: 20 }}
                                            onClick={e => funBack(e, 2)}
                                        ><i className="icon-e-19" style={{ fontSize: 25 }} /> Volver</a>
                                    </div>
                                </div>
                            </Row>

                        </Col>
                    </Row>
                </div>
            </Container>
            <br />
        </>
    );
}

const StepSumaryBuyComponent = props => {
    const [state] = useGlobal();
    let pricesAntes = [], subTotalAntes = 0;
    let products = JSON.parse(localStorage.getItem("cart")),
        newOrder = JSON.parse(atob(localStorage.getItem("generateOrder")));
    return (
        <>
            <Container >
                <h5 className="mt-5 mb-2 text-center" >¡GRACIAS POR TU COMPRA!</h5>
                <div className="tt-login-form">
                    <Row className="text-center ">
                        <Col md={4} xs={12}>
                            <div className="tt-item item1-sumary">
                                <div className="sumary-content-text">
                                    <p>RESUMEN<br />FACTURA</p>
                                    <span>Pedido No.: <br /> <span>{state.order.numeroPedido}</span></span>
                                </div>
                                <hr />
                                <ul className="list_sumary_items">
                                    <li>
                                        <p >Nombre:</p>
                                        <p>{props.getProfile.nombres}</p>
                                    </li>
                                    <li>
                                        <p className="mt-3">Dirección:</p>
                                        <p>{state.adress}</p>
                                    </li>
                                    <li>
                                        <p className="mt-3">Ciudad:</p>
                                        <p>{state.order.DescripcionCiudad}</p>
                                    </li>
                                    <li>
                                        <p className="mt-3">Hora y fecha:</p>
                                        <p>{state.order.Fecha}</p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={8} xs={12}>
                            <div className="tt-item item2-sumary">
                                <h6 className="mt-4 text-center" >RESUMEN DEL PEDIDO</h6>
                                <table className="table sumary_table">
                                    <tbody>
                                        {products.map((item, i) => {
                                            pricesAntes.push(item.Antes * item.countProduct);
                                            subTotalAntes = pricesAntes.reduce((total, num) => total + num);
                                            let viewPrice = (item.VlrMinimo < subTotalAntes) ? item.Ahora : item.Antes;
                                            let calcutateSubtotalPrice = (item.VlrMinimo < subTotalAntes) ? (item.Ahora * item.countProduct) : (item.Ahora * item.Antes);
                                            return (
                                                <tr key={i}>
                                                    <td >{item.descripcion}</td>
                                                    <td>Cant.: <span>{item.countProduct}</span></td>
                                                    <td>Valor Uni:  <span>{FormatCOPNumber(viewPrice)}</span></td>
                                                    <td>Sub-total: <span>{FormatCOPNumber(calcutateSubtotalPrice)}</span></td>
                                                </tr>
                                            );
                                        })}

                                    </tbody>
                                </table>
                                <hr />
                                <Row>
                                    <Col md={8} xs={12}>
                                    </Col>

                                    <Col md={4} xs={12}>
                                        <div className="sumary-content-text-value">
                                            <p>Domicilio:</p>
                                            <span>{FormatCOPNumber(newOrder.getDomicilie)}</span>
                                        </div>
                                        {
                                            newOrder.discount > 0 &&
                                            <>
                                                <hr />
                                                <div className="sumary-content-text-value">
                                                    <p>Descuento:</p>
                                                    <span>-{FormatCOPNumber(newOrder.discount)}</span>
                                                </div>
                                            </>
                                        }

                                        <hr />
                                        <div className=" sumary-content-text-value">
                                            <p>TOTAL:</p>
                                            <span>{FormatCOPNumber(newOrder.totalBuy)}</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}


export {
    StepLoginComponent,
    StepFacturationComponent,
    StepPaymentMethodComponent,
    StepSumaryBuyComponent
}