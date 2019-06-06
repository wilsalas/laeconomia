import React from 'react';
import {
    Button, Container, Col, Label, Form, FormGroup, Input, Row
} from 'reactstrap';

export default () => (
    <Container>
        <h5 className="mt-4 mb-2 text-center" >INGRESA O REGÍSTRATE</h5>
        <div className="tt-login-form">
            <Row>
                <Col md={6} xs={12}>
                    <div className="tt-item">
                        <h2 className="tt-title">NUEVO USUARIO</h2>
                        <p>
                            Creando una cuenta con nuestra Droguería virtual te permitirá hacer tus compras de manera más rápida, guardar direcciones de envío, usar nuestros servicios y mucho más.
                        </p>
                        <FormGroup>
                            <a href="/account/register" className="btn btn-top btn-border">Crear nueva cuenta</a>
                        </FormGroup>
                    </div>
                </Col>
                <Col md={6} xs={12}>
                    <div className="tt-item">
                        <h2 className="tt-title">INGRESA</h2>
                        Ingresa correctamente la información de los siguientes campos:
                            <div className="form-default form-top">
                            <Form>
                                <FormGroup>
                                    <Label for="email">Usuario o e-mail *</Label>
                                    <Input className="account-input" type="email" name="email" placeholder="Ingresa tu usuario o correo electrónico" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Contraseña *</Label>
                                    <Input className="account-input" type="password" name="password" placeholder="Ingresa tu contraseña" />
                                </FormGroup>
                                <Row>
                                    <Col className="col-auto mr-auto">
                                        <FormGroup>
                                            <Button className="btn btn-border">Ingresar</Button>
                                        </FormGroup>
                                    </Col>
                                    <Col className="col-auto align-self-end">
                                        <FormGroup>
                                            <ul className="additional-links">
                                                <li><a href="/recoverypass"><em> ¿Olvidaste tu contraseña? </em></a></li>
                                            </ul>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </Container>
);