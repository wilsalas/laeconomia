import React from 'react';
import { AlertSwal, ValidateInputFormEmpty } from '../managers/helpers/HelperManager';
import { API } from '../managers/api/ApiManager';
import {
    Button, Container, Col, Label, Form, FormGroup, Input, Row, CustomInput
} from 'reactstrap';


const LoginComponent = props => {

    // determine login app
    const funLogin = async e => {
        e.preventDefault();
        let { email, password } = e.target;

        if (ValidateInputFormEmpty({ email: email.value, password: password.value })) {
            AlertSwal("EMPTY_FIELDS_LOGIN")
        } else {
            let resLogin = await API.POST.PerformSignIn(email.value, password.value);
            if (!resLogin.error) {
                localStorage.setItem("usi", btoa(JSON.stringify(resLogin.message.data)));
                if (props.isLoginOrRegister) {
                    window.location.href = "/";
                } else {
                    window.location.reload()
                }
            } else {
                AlertSwal(resLogin.message.message)
            }
        }
    }


    const funRenderLogin = () => {
        let render = null;
        if (props.isLoginOrRegister) {
            render =
                <>
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
                                <Form onSubmit={e => funLogin(e)}>
                                    <FormGroup>
                                        <Label for="email">Correo electrónico *</Label>
                                        <Input className="account-input" type="email" name="email" placeholder="Ingresa tu correo electrónico" required />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Contraseña *</Label>
                                        <Input className="account-input" type="password" name="password" placeholder="Ingresa tu contraseña" required />
                                    </FormGroup>
                                    <Row>
                                        <Col className=" mr-auto">
                                            <FormGroup>
                                                <Button className="btn btn-border">Ingresar</Button>
                                            </FormGroup>
                                        </Col>
                                        <Col className=" align-self-end ">
                                            <FormGroup>
                                                <ul className="additional-links mb-2">
                                                    <li><a href="/recoverypass"><em> ¿Olvidaste tu contraseña? </em></a></li>
                                                </ul>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </>
        } else {
            render =
                <>
                    <Col md={12} xs={12}>
                        <div className="tt-item item-register-form" style={{ width: props.modalLogin ? '100%' : '40%', margin: '0 auto' }}>
                            <div className="form-default form-top">
                                <Form onSubmit={e => funLogin(e)}>
                                    <FormGroup>
                                        <Label for="email">Correo electrónico *</Label>
                                        <Input className="account-input" type="email" name="email" placeholder="Ingresa tu correo electrónico" required />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Contraseña *</Label>
                                        <Input className="account-input" type="password" name="password" placeholder="Ingresa tu contraseña" required />
                                    </FormGroup>
                                    <FormGroup>
                                        <Button className="btn btn-border" block>Ingresar</Button>
                                    </FormGroup>
                                </Form>
                            </div>
                        </div>
                    </Col>
                    {
                        !props.modalLogin &&
                    
                    <Col md={12} xs={12}>
                        <div className="tt-item item-register-form mt-3" style={{ width: props.modalLogin ? '100%' : '40%', margin: '0 auto' }}>
                            <div className="form-default form-top">
                                <Row>
                                    <Col md={6} xs={6}>
                                       <h6> O CREA UNA CUENTA</h6>
                                    </Col>
                                    <Col md={6} xs={6}>
                                        <FormGroup>
                                            <a href="/account/register" className="btn btn-top btn-border" style={{marginTop:0}}>Registrarme</a>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    }
                </>
        }
        return render;
    }

    return (
        <>
            <Container>
                <h5 className="mt-4 mb-2 text-center" >{`INICIA SESIÓN ${props.isLoginOrRegister ? 'O REGÍSTRATE' : ''}`}</h5>
                <div className="tt-login-form">
                    <Row>
                        {funRenderLogin()}
                    </Row>
                </div>
            </Container>
        </>
    );
}


const RegisterComponent = () => {



    // determine register app
    const funRegister = async e => {
        e.preventDefault();
        let { email, name, nit, dateOfBirth, phone, cellphone, password, confirmPassword, terms } = e.target;

        let fields = {
            email: email.value,
            nombres: name.value,
            nit: nit.value,
            fecha_nacimiento: dateOfBirth.value,
            telefono: phone.value,
            celular: cellphone.value,
            password: password.value,
            confirm_password: confirmPassword.value,
            acepta_condiciones: terms.checked,
        }

        if (ValidateInputFormEmpty(fields)) {
            AlertSwal("EMPTY_FIELDS_REGISTER")
        } else {
            let message = "";
            if (!terms.checked) {
                message = "TERMS";
            } else {
                let resRegister = await API.POST.PerformSignUp(fields);
                if (!resRegister.error) {
                    message = "REGISTER_SUCCESS";
                } else {
                    message = resRegister.message.message
                }
            }

            AlertSwal(message);
        }
    }

    return (
        <>
            <Container>
                <h5 className="mt-4 mb-2 text-center" >REGÍSTRATE</h5>
                <div className="tt-login-form">
                    <Row className="justify-content-center">
                        <Col md={6} xs={12}>
                            <div className="tt-item tt-item-register">
                                <div className="form-default">
                                    <Form onSubmit={e => funRegister(e)}>

                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="email">Correo electrónico:</Label>
                                                    <Input className="account-input" type="email" name="email" required />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="direction">Dirección:</Label>
                                                    <Input className="account-input" type="text" name="direction" required />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="password">Contraseña:</Label>
                                                    <Input className="account-input" type="password" name="password" required />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="confirmPassword">Repetir contraseña:</Label>
                                                    <Input className="account-input" type="password" name="confirmPassword" required />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="name">Nombres:</Label>
                                                    <Input className="account-input" type="text" name="name" required />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="lastname">Apellidos:</Label>
                                                    <Input className="account-input" type="text" name="lastname" required />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="nit">Cédula/NIT/Pasaporte:</Label>
                                                    <Input className="account-input" type="number" name="nit" required />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="dateOfBirth">Fecha de nacimiento:</Label>
                                                    <Input className="account-input" type="date" name="dateOfBirth" required />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="cellphone">Celular:</Label>
                                                    <Input className="account-input" type="number" name="cellphone" required />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="phone">Teléfono:</Label>
                                                    <Input className="account-input" type="number" name="phone" required />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <FormGroup>
                                            <p>
                                                ETICOS SERRANO GOMEZ LTDA le informa que los datos suministrados a traves de este sitio web seran tratados para efecto de gestionar la informacion que se requiere por usted de nuestra organizacion,
                                                peticion que conlleva el consentimiento de forma inequivoca para el tratamiento de sus datos en el sentido antes dicho.
                                                Le rogamos abstenerse de suministrar informacion de caracter sensible, si no es absolutamente necesario para resolver su inquietud.
                                                Puede consultar la politica de Proteccion de datos de ETICOS en el siguiente enlace web <a target="_blank" rel="noopener noreferrer" href="https://www.droguerialaeconomia.com">www.droguerialaeconomia.com </a>
                                                y ejercer sus derechos a conocer, actualizar, rectificar su informacion, o bien solicitar la cancelacion del proceso en el siguiente correo electronico <a href="mailto:habeasdata@eticos.com">habeasdata@eticos.com</a>.
                                                </p>
                                        </FormGroup>
                                        <FormGroup>
                                            <div className="content-conditions">
                                                <CustomInput type="checkbox" id="terms" name="terms" label="Acepto condiciones y restricciones." inline />
                                                <a className="conditions-link" href="/information/terms" >Ver condiciones</a>
                                            </div>
                                            <div className="content-conditions">
                                                <CustomInput type="checkbox" id="terms_vida_sana" name="terms_vida_sana" label="Acepto ser parte del Club Vida Sana" inline />
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
        </>
    );
}


export {
    LoginComponent,
    RegisterComponent
}

