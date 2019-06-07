import React from 'react';
import {
    Button, Container, Col, Label, Form, FormGroup, Input, Row,CustomInput
} from 'reactstrap';

export default () => (
    <Container>
        <h5 className="mt-4 mb-2 text-center" >REGÍSTRATE</h5>
        <div className="tt-login-form">
            <Row className="justify-content-center">
                <Col md={6} xs={12}>
                    <div className="tt-item tt-item-register">
                        <div className="form-default">
                            <Form>
                                <FormGroup>
                                    <Label for="email">Usuario o e-mail:</Label>
                                    <Input className="account-input" type="email" name="email" />
                                </FormGroup>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="password">Contraseña:</Label>
                                            <Input className="account-input" type="password" name="password" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="repeatpassword">Repetir contraseña:</Label>
                                            <Input className="account-input" type="password" name="repeatpassword" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Label for="name">Nombre completo:</Label>
                                    <Input className="account-input" type="text" name="name" />
                                </FormGroup>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="nit">Cédula/NIT/Pasaporte:</Label>
                                            <Input className="account-input" type="number" name="nit" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="fecha_nacimiento">Fecha de nacimiento:</Label>
                                            <Input className="account-input" type="date" name="fecha_nacimiento" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="celular">Celular:</Label>
                                            <Input className="account-input" type="number" name="celular" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="telefono">Teléfono:</Label>
                                            <Input className="account-input" type="number" name="telefono" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <p>
                                        ETICOS SERRANO GOMEZ LTDA le informa que los datos suministrados a traves de este sitio web seran tratados para efecto de gestionar la informacion que se requiere por usted de nuestra organizacion,
                                        peticion que conlleva el consentimiento de forma inequivoca para el tratamiento de sus datos en el sentido antes dicho.
                                        Le rogamos abstenerse de suministrar informacion de caracter sensible, si no es absolutamente necesario para resolver su inquietud.
                                        Puede consultar la politica de Proteccion de datos de ETICOS en el siguiente enlace web www.droguerialaeconomia.com.
                                        y ejercer sus derechos a conocer, actualizar, rectificar su informacion, o bien solicitar la cancelacion del proceso en el siguiente correo electronico habeasdata@eticos.com.
                                    </p>
                                </FormGroup>
                                <FormGroup>
                                    <div className="content-conditions">
                                        <CustomInput type="checkbox" id="exampleCustomInline2" label="Acepto condiciones y restricciones." inline /> 
                                        <a className="conditions-link" href="/">Ver condiciones</a>
                                    </div>
                                </FormGroup>
                                <FormGroup>
                                    <Button className="btn btn-border btn-block" type="submit">Ingresar</Button>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                    <p className="text-center mt-2"><b>Droguería La Economía</b> cuenta con rigurosos estándares de seguridad con el fin de proteger tu informacíon personal.</p>
                </Col>
            </Row>
        </div>
    </Container>


);