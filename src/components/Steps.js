import React, { useState } from 'react';
import { LoginComponent } from './ContentForm';
import {
    Button, Container, Col, Row, Label, Form, FormGroup, Input,
    Card, CardImg, CardBody, CardTitle
} from 'reactstrap';

const StepLoginComponent = () => {
    return (
        <>
            <br />
            <LoginComponent />
        </>
    );
}

const StepFacturationComponent = () => {
    return (
        <>
            <br />
            <Container>
                <h5 className="mt-4 mb-2 text-center" >INFORMACIÓN DEL ENVÍO</h5>
                <div className="tt-login-form">
                    <Row className="mx-auto">
                        <Col md={6} xs={12}>
                            <div className="tt-item">
                                <Form>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="adress_default" defaultChecked />  Dirección predeterminada
                                            </Label>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label></Label>
                                        <Input className="account-input" type="text" name="adress" disabled placeholder="Casa - Cra 51B 80 58" />
                                    </FormGroup>
                                    <Row>
                                        <Col className="col-auto mr-auto">
                                            <FormGroup>
                                            </FormGroup>
                                        </Col>
                                        <Col className="col-auto align-self-end">
                                            <FormGroup>
                                                <Button className="btn btn-border">Seleccionar</Button>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                        <Col md={6} xs={12}>
                            <div className="tt-item">
                                <Form>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="adress_temporary" />  Dirección temporal
                                            </Label>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label></Label>
                                        <Input className="account-input" type="text" name="adress" placeholder="Ingresa nueva dirección" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleText">Notas / Observaciones</Label>
                                        <Input type="textarea" name="text" id="exampleText" placeholder="Apartamento, oficina, piso, etc." />
                                    </FormGroup>
                                    <Row>
                                        <Col className="col-auto mr-auto">
                                            <FormGroup>

                                            </FormGroup>
                                        </Col>
                                        <Col className="col-auto align-self-end">
                                            <FormGroup>
                                                <Button className="btn btn-border">Seleccionar</Button>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}

const StepPaymentMethodComponent = () => {

    const [selectedItem, setSelectedItem] = useState("");
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

    return (
        <>
            <br />
            <Container >
                <h5 className="mt-4 mb-2 text-center" >INFORMACIÓN DEL ENVÍO</h5>
                <div className="tt-login-form">
                    <Row className="text-center justify-content-center">
                        <Col md={4} xs={12}>
                            <div className="tt-item card-img-step ">
                                <h6 className="mt-4 mb-2 " >PAGA CONTRAENTREGA</h6>
                                <Row className="justify-content-center">
                                    {delivery.map((value, i) => {
                                        return (
                                            <Col md={4} xs={4} key={i} onClick={() => SeletedPaymentMethod(value.title)}>
                                                <Card className={`card-step ${value.title === selectedItem ? 'col-active-step' : ''}`}>
                                                    <CardBody>
                                                        <CardImg top width="100%" height="45px" src={`./assets/payment_methods/${value.icon}.png`} alt="Card image cap" />
                                                    </CardBody>
                                                </Card>
                                                <CardTitle className={`mt-2 ${value.title === selectedItem ? 'col-active-title-step' : ''}`}>{value.title}</CardTitle>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </div>
                            <Row>
                                <div className="tt-shopcart-btn mt-5">
                                    <div className="col-left">
                                        <a className="btn-link" href="/" style={{ fontSize: 20 }} ><i className="icon-e-19" style={{ fontSize: 25 }} /> Volver</a>
                                    </div>
                                </div>
                            </Row>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className="tt-item m card-img-step">
                                <h6 className="mt-4 mb-2 text-center" >PAGA ONLINE</h6>
                                <Row className="justify-content-center">
                                    {onlineMethod.map((value, i) => {
                                        return (
                                            <Col md={4} xs={4} key={i} onClick={() => SeletedPaymentMethod(value.title)}>
                                                <Card className={`card-step ${value.title === selectedItem ? 'col-active-step' : ''}`}>
                                                    <CardBody>
                                                        <CardImg top width="100%" height="45px" src={`./assets/payment_methods/${value.icon}.png`} alt="Card image cap" />
                                                    </CardBody>
                                                </Card>
                                                <CardTitle className={`mt-2 ${value.title === selectedItem ? 'col-active-title-step' : ''}`}>{value.title}</CardTitle>
                                            </Col>
                                        );
                                    })}
                                </Row>

                            </div>
                            <Row className="float-right">
                                <Button className="mt-5">
                                    Continuar
                                    </Button>
                            </Row>
                        </Col>
                    </Row>

                </div>
            </Container>
            <br />  <br />  <br />  <br />  <br />
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