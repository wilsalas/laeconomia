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
import { AlertSwal } from '../managers/helpers/HelperManager';

const StepLoginComponent = () => {
    return (
        <div className="animated fadeIn">
            <br />
            <LoginComponent isLoginOrRegister />
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
    })

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
    const [, dispatch] = useGlobal();
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
    const [onlineMethod] = useState([
        {
            icon: 'pse',
            title: 'PSE'
        },
        {
            icon: 'credit_cart',
            title: 'Tarjeta de Crédito'
        },
        {
            icon: 'cobru',
            title: 'Saldo Cobru'
        }
    ]);

    // select method avaliable
    const SeletedPaymentMethod = classname => setSelectedItem(classname);

    const funBack = (e, step) => {
        e.preventDefault();
        dispatch({ type: "STEP_ACTIVE", step })
    }

    const funGetCouponIsValidOrNot = async e => {
        e.preventDefault();
        setCupon(e.target.value);
        let resCouponIsValidOrNot = await API.GET.RetrieveWhetherCouponIsValidOrNot(
            e.target.value,
            props.getProfile.nit,
            props.getProfile.nombres,
            props.getProfile.email,
            props.getProfile.auth_token);
        if (!resCouponIsValidOrNot.error) {
            console.log("cupon", FormatCoupon(resCouponIsValidOrNot.message.data[0]));
            dispatch({ type: "STEP_ACTIVE", step: 4 })
            // setListAdress(resRetrieveAddressList.message.data)
        } else {
            if (resCouponIsValidOrNot.message === "TOKEN_ERROR") {
                dispatch({ type: "REFRESH_TOKEN_MODAL", refreshTokenModal: true });
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
                        <Col md={4} xs={12} className="mt-3">
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

                        </Col>
                        <Col md={4} xs={12} className="mt-3">
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

                        </Col>
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
                                                placeholder="INGR3S4TUCUP0N" style={{
                                                    borderRadius: '11px 0px 0px 11px',
                                                    borderRight: 'none'
                                                }} />
                                            <InputGroupAddon addonType="append" >
                                                <InputGroupText className="input-group-personal" style={{
                                                    borderRadius: '0px 11px 11px 0px'
                                                }}>
                                                    <img src={`/assets/icon_success.png`} width="20px" height="20px" alt="img-response" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col md={8} xs={12} className="mt-3">
                            <Row className="float-right">
                                <Button >
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

const StepSumaryBuyComponent = () => {
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
                                    <span>Pedido No.: <br /> <span>0000001</span></span>
                                </div>
                                <hr />
                                <ul className="list_sumary_items">
                                    <li>
                                        <p >Nombre:</p>
                                        <p>Juan Camilo Montoya Cera</p>
                                    </li>
                                    <li>
                                        <p className="mt-3">Dirección:</p>
                                        <p>Cra 51B 80 58</p>
                                    </li>
                                    <li>
                                        <p className="mt-3">Ciudad:</p>
                                        <p>Barranquilla</p>
                                    </li>
                                    <li>
                                        <p className="mt-3">Hora y fecha:</p>
                                        <p>Jueves 2 de Mayo, 2019. 3:36 p.m.</p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={8} xs={12}>
                            <div className="tt-item item2-sumary">
                                <h6 className="mt-4 text-center" >RESUMEN DEL PEDIDO</h6>
                                <table className="table sumary_table">
                                    <tbody>
                                        {new Array(10).fill().map((value, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td >Altex lámina antibrillo x 50 unidades</td>
                                                    <td>Cant.: <span>100</span></td>
                                                    <td>Valor Uni:  <span>100</span></td>
                                                    <td>Sub-total: <span>$2’999.990</span></td>
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
                                            <span>$5.500</span>
                                        </div>
                                        <hr />
                                        <div className="sumary-content-text-value">
                                            <p>Descuento:</p>
                                            <span>-$10.000</span>
                                        </div>
                                        <hr />
                                        <div className=" sumary-content-text-value">
                                            <p>TOTAL:</p>
                                            <span>$23’999.000</span>
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