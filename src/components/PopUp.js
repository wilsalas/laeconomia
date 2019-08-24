import React, { useState, useEffect } from 'react';
import { Col, Container, Modal, ModalHeader, ModalBody, Input, Form, FormGroup, Row } from 'reactstrap';
import { API } from '../managers/api/ApiManager';


const Location = props => {
    const [citys, setCitys] = useState([]);

    // initialize citys getdata
    useEffect(() => {
        RetrieveStores();
    }, [])

    // get all citys
    const RetrieveStores = async () => {
        let res = await API.GET.RetrieveStores();
        if (Array.isArray(res.message)) setCitys(res.message)
    }

    // selected one city
    const SelectedCity = e => {
        localStorage.setItem("city", e.target.value);
        props.toggle(false);
    }

    return (
        <>
            <h5>UBICACIÓN</h5>
            <p>¿Desde que ciudad quieres comprar?</p>
            <Input type="select" name="select" className="mt-2" onChange={e => SelectedCity(e)} >
                <option defaultValue="">Selecciona una ciudad</option>
                {citys.map((element, i) => <option key={i} value={element.Ciudad}>{element.Descripcion}</option>)}
            </Input>
        </>
    );
}


const PaymentCreditCart = () => {
    return (
        <>
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
        </>
    );
}



const PaymentCobru = () => {
    return (
        <>
            <Container>
                <h6>INGRESA TUS DATOS</h6>
                <Form className="payment-form">
                    <FormGroup>
                        <Input className="payment-input" style={{ padding: 7 }} type="tel" name="cobru_number" placeholder="Ingresa tu número de celular" />
                    </FormGroup>
                    <button className="btn-lg btn-block btn-outline-primary ">Pagar con la App</button>
                </Form>
            </Container>
        </>
    );
}


const PaymentPSE = () => {
    return (
        <>
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
        </>
    );
}


const BuySuccess = () => {

    const [title] = useState("¡Tu compra \n ha sido exitosa!");
    const [message] = useState("Nuestros domiciliarios estarán \n muy pronto contigo");

    return (
        <>
            <Container>
                <h5>{title}</h5>
                <Form className="payment-form">
                    <FormGroup>
                        <img src="/assets/icon-success.png" width="20%" alt="img icon suc" />
                    </FormGroup>
                    <FormGroup>
                        <p>{message}</p>
                    </FormGroup>
                    <button className="btn-lg btn-block btn-outline-primary ">Entendido</button>
                </Form>
            </Container>
        </>
    );
}


const RegisterSuccess = () => {

    const [title] = useState("¡Tu registro \n ha sido exitoso!");
    const [message] = useState("Empieza a disfrutar de las promociones que tenemos para ti");

    return (
        <>
            <Container>
                <h5>{title}</h5>
                <Form className="payment-form">
                    <FormGroup>
                        <img src="/assets/icon-success.png" width="20%" alt="img icon suc" />
                    </FormGroup>
                    <FormGroup>
                        <p>{message}</p>
                    </FormGroup>
                    <button className="btn-lg btn-block btn-outline-primary ">Entendido</button>
                </Form>
            </Container>
        </>
    );
}


const ModalLocation = () => {

    const [open, setOpen] = useState(false);
    const toggle = open => setOpen(open)

    useEffect(() => {
        toggle(!localStorage.getItem("city"));
    }, [])

    return (
        <>
            <Modal returnFocusAfterClose isOpen={open} >
                <ModalHeader toggle={() => toggle(false)}></ModalHeader>
                <ModalBody>
                    <Location toggle={toggle} />
                </ModalBody>
            </Modal>
        </>
    );
}

export {
    ModalLocation
}


