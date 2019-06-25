import React, { Component, Fragment } from 'react';
import { LoginComponent } from './ContentForm';
import {
    Button, Container, Col, Row, Label, Form, FormGroup, Input,
    Card, CardImg, CardBody, CardTitle
} from 'reactstrap';

class StepLoginComponent extends Component {
    render() {
        return (
            <Fragment>
                <br />
                <LoginComponent />
            </Fragment>
        );
    }
}

class StepFacturationComponent extends Component {
    render() {
        return (
            <Fragment>
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
            </Fragment>
        );
    }
}

class StepPaymentMethodComponent extends Component {

    constructor() {
        super();
        // avaliable methos for payment
        this.state = {
            selectedItem: "",
            delivery: [
                {
                    icon: 'money',
                    title: 'Efectivo'
                },
                {
                    icon: 'datafono',
                    title: 'Datáfono'
                }

            ],
            online: [
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
                },
            ]
        }
    }

    // select method avaliable
    SeletedPaymentMethod = classname => this.setState({ selectedItem: classname });


    render() {
        return (
            <Fragment>
                <br />
                <Container>
                    <h5 className="mt-4 mb-2 text-center" >INFORMACIÓN DEL ENVÍO</h5>
                    <div className="tt-login-form">
                        <Row className="text-center justify-content-center">
                            <Col md={4} xs={12}>
                                <div className="tt-item card-img-step ">
                                    <h6 className="mt-4 mb-2 " >PAGA CONTRAENTREGA</h6>
                                    <Row className="justify-content-center">
                                        {this.state.delivery.map((value, i) => {
                                            return (
                                                <Col md={4} xs={4} key={i} onClick={() => this.SeletedPaymentMethod(value.title)}>
                                                    <Card className={`card-step ${value.title === this.state.selectedItem ? 'col-active-step' : ''}`}>
                                                        <CardBody>
                                                            <CardImg top width="100%" src={`./assets/payment_methods/${value.icon}.png`} alt="Card image cap" />
                                                        </CardBody>
                                                    </Card>
                                                    <CardTitle className={`mt-2 ${value.title === this.state.selectedItem ? 'col-active-title-step' : ''}`}>{value.title}</CardTitle>
                                                </Col>
                                            );
                                        })}
                                    </Row>
                                </div>
                            </Col>
                            <Col md={4} xs={12}>
                                <div className="tt-item m card-img-step">
                                    <h6 className="mt-4 mb-2 text-center" >PAGA ONLINE</h6>
                                    <Row className="justify-content-center">
                                        {this.state.online.map((value, i) => {
                                            return (
                                                <Col md={4} xs={4} key={i} onClick={() => this.SeletedPaymentMethod(value.title)}>
                                                    <Card className={`card-step ${value.title === this.state.selectedItem ? 'col-active-step' : ''}`}>
                                                        <CardBody>
                                                            <CardImg top width="100%" src={`./assets/payment_methods/${value.icon}.png`} alt="Card image cap" />
                                                        </CardBody>
                                                    </Card>
                                                    <CardTitle className={`mt-2 ${value.title === this.state.selectedItem ? 'col-active-title-step' : ''}`}>{value.title}</CardTitle>
                                                </Col>
                                            );
                                        })}
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

class StepSumaryBuyComponent extends Component {
    render() {
        return (
            <Fragment></Fragment>
        );
    }
}


export {
    StepLoginComponent,
    StepFacturationComponent,
    StepPaymentMethodComponent,
    StepSumaryBuyComponent
}