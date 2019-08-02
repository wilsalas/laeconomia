import React, { Component, Fragment } from 'react';
import { Col, Container, Modal, ModalHeader, ModalBody, Input, Form, FormGroup, Row } from 'reactstrap';
import Store from '../managers/store/Store';
import { API } from '../managers/api/ApiManager';


class Location extends Component {

    constructor() {
        super();
        this.state = {
            defaultCity: "Selecciona una ciudad",
            citys: []
        }
    }

    async componentDidMount() {
        let res = await API.GET.RetrieveStores();
        if (Array.isArray(res.message)) this.setState({ citys: res.message })
    }

    // selected one city
    SelectedCity = e => {
        localStorage.setItem("city", e.target.value);
        this.props.toggle(false);
    }

    render() {
        return (
            <Fragment>
                <h5>UBICACIÓN</h5>
                <p>¿Desde que ciudad quieres comprar?</p>
                <Input type="select" name="select" className="mt-2" onChange={this.SelectedCity.bind(this)} >
                    <option defaultValue="">Selecciona una ciudad</option>
                    {this.state.citys.map((element, i) => <option key={i} value={element.Ciudad}>{element.Descripcion}</option>)}
                </Input>
            </Fragment>
        );
    }
}


class PaymentCreditCart extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h6>INGRESA TUS DATOS</h6>
                    <Form className="payment-form">
                        <FormGroup>
                            <Input className="payment-input" type="number" name="tc_number" placeholder="Número de tarjeta" />
                        </FormGroup>
                        <FormGroup>
                            <Input className="payment-input" type="text" name="tc_name" placeholder="Nombre como aparece en la tarjeta" />
                        </FormGroup>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Input className="payment-input" type="text" name="tc_date" placeholder="MM/AA" />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Input className="payment-input" type="text" name="tc_cvv" placeholder="CVV" />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <div class="select-style">
                                        <Input type="select" name="select_cuotes">
                                            <option value="1">Cuotas</option>
                                            <option value="1">Cuotas2</option>
                                            <option value="1">Cuotas3</option>
                                        </Input>
                                    </div>
                                </FormGroup>
                            </Col>
                        </Row>
                        <button className="btn-lg btn-block btn-outline-primary ">Pagar $999.999</button>
                    </Form>
                </Container>
            </Fragment>
        )
    }
}



class PaymentCobru extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h6>INGRESA TUS DATOS</h6>
                    <Form className="payment-form">
                        <FormGroup>
                            <Input className="payment-input" style={{ padding: 7 }} type="tel" name="cobru_number" placeholder="Ingresa tu número de celular" />
                        </FormGroup>
                        <button className="btn-lg btn-block btn-outline-primary ">Pagar con la App</button>
                    </Form>
                </Container>
            </Fragment>
        )
    }
}


class PaymentPSE extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h6>INGRESA TUS DATOS</h6>
                    <Form className="payment-form">
                        <FormGroup>
                            <div class="select-style">
                                <Input type="select" name="select_cuotes" >
                                    <option value="">Escoge tu banco</option>
                                    <option value="1">Cuotas2</option>
                                    <option value="1">Cuotas3</option>
                                </Input>
                            </div>
                        </FormGroup>
                        <button className="btn-lg btn-block btn-outline-primary ">Continuar en PSE</button>
                    </Form>
                </Container>
            </Fragment>
        )
    }
}


class BuySuccess extends Component {

    constructor() {
        super();
        this.state = {
            // title: "¡Tu compra \n ha sido exitosa!",
            // message: "Nuestros domiciliarios estarán \n muy pronto contigo",
            title: "¡Tu registro \n ha sido exitoso!",
            message: "Empieza a disfrutar de las promociones que tenemos para ti",

        }
    }


    render() {
        return (
            <Fragment>
                <Container>
                    <h5>{this.state.title}</h5>
                    <Form className="payment-form">
                        <FormGroup>
                            <img src="/assets/icon-success.png" width="20%" alt="img icon suc" />
                        </FormGroup>
                        <FormGroup>
                            <p>{this.state.message}</p>
                        </FormGroup>
                        <button className="btn-lg btn-block btn-outline-primary ">Entendido</button>
                    </Form>
                </Container>
            </Fragment>
        )
    }
}


class ModalLocation extends Component {
    constructor() {
        super();
        this.state = { open: false, };
        this.toggle = this.toggle.bind(this);
    }

    // verify is selected city for modal hide
    componentDidMount() { this.toggle(!localStorage.getItem("city")); }
    toggle(open) { this.setState({ open }); }
    render() {
        return (
            <Fragment>
                <Modal returnFocusAfterClose isOpen={this.state.open} >
                    <ModalHeader toggle={() => this.toggle(false)}></ModalHeader>
                    <ModalBody>
                        <Location toggle={this.toggle} />
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}





export {
    ModalLocation
}


