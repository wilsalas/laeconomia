import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Modal, ModalHeader, ModalBody, Input, Label, Form, FormGroup, Row } from 'reactstrap';
import { API } from '../managers/api/ApiManager';
import { useGlobal } from '../managers/store/Context';
import { AlertSwal } from '../managers/helpers/HelperManager';
import moment from 'moment';
import { LoginComponent } from './ContentForm';

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


const Profile = props => {
    const [state,] = useGlobal();
    const [getProfile, setProfile] = useState({});
    const [getDate, setDate] = useState("");

    useEffect(() => {
        setProfile(state.informationProfile);
    }, [state.informationProfile]);


    useEffect(() => {
        setDate(moment(new Date(getProfile.fecha_nacimiento)).format('YYYY-MM-DD'))
    }, [getProfile]);


    const funEditProfile = async e => {
        e.preventDefault();
        let { password, name, nit, fecha_nacimiento, telefono, celular, confirm_password } = e.target;
        if (password.value !== confirm_password.value) {
            AlertSwal("PASSWORD_NOT_MATCH");
        } else {
            let resEditProfile = await API.POST.PerformEditProfile(getProfile.nit, getProfile.nombres, getProfile.email, getProfile.auth_token, {
                password: password.value,
                newName: name.value,
                newDocument: nit.value,
                dateOfBirth: fecha_nacimiento.value,
                phone: telefono.value,
                cellphone: celular.value
            });
            AlertSwal(!resEditProfile.error ? "UPDATE_SUCCESS" : "ERROR_SERVER");
            props.closeModal();
        }
    }


    return (
        <>
            <Row>
                <Col md={12} xs={12}>
                    <div className="tt-item">
                        <h2 className="tt-title">MI PERFIL</h2>
                        <div className="form-default form-top">
                            <Form onSubmit={e => funEditProfile(e)}>
                                <FormGroup>
                                    <Label for="email" className="mt-3">INFORMACION DE CUENTA</Label>
                                    <div className="form-default form-control account-input">
                                        <p className="text-left" >{getProfile.email}</p>
                                    </div>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">CAMBIO DE CONTRASEÑA</Label>
                                    <Input className="account-input" type="password" name="password" placeholder="Nueva contraseña" autoComplete="off" />
                                    <Input className="account-input mt-2" type="password" name="confirm_password" placeholder="Confirmar nueva contraseña" autoComplete="off" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="personal">INFORMACION PERSONAL</Label>
                                    <Input className="account-input" type="text" name="name" placeholder="Nombre completo" required defaultValue={getProfile.nombres} />
                                    <Input className="account-input mt-2" type="tel" name="nit" placeholder="Cedula/Nit/Pasaporte" required defaultValue={getProfile.nit} />
                                    <Input className="account-input mt-2" type="date" name="fecha_nacimiento" defaultValue={getDate !== "Invalid date" ? getDate : ''} required />
                                </FormGroup>
                                <Row>
                                    <Col className="col-auto mr-auto">
                                        <FormGroup>
                                            <Input className="account-input" type="tel" name="celular" placeholder="Celular" required defaultValue={getProfile.celular} />
                                        </FormGroup>
                                    </Col>
                                    <Col className="col-auto align-self-end">
                                        <FormGroup>
                                            <Input className="account-input" type="tel" name="telefono" placeholder="Telefono" required defaultValue={getProfile.telefono} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Button block > Actualizar </Button>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}

const Adress = props => {

    const [, dispatch] = useGlobal();

    const funSaveAddress = async e => {
        e.preventDefault();
        let { name_adress, name_alias } = e.target,
            resSaveAddress = await API.POST.PerformSaveAddress(
                name_adress.value,
                name_alias.value,
                props.getProfile.nit,
                props.getProfile.nombres,
                props.getProfile.email,
                props.getProfile.auth_token);
        if (!resSaveAddress.error) {
            props.funModalCloset();
            AlertSwal("ADDRESS_SUCCESS");
        } else {
            if (resSaveAddress.message === "TOKEN_ERROR") {
                dispatch({ type: "REFRESH_TOKEN_MODAL", refreshTokenModal: true });
            } else {
                AlertSwal("ERROR_SERVER");
            }
        }
    }


    return (
        <>
            <Row>
                <Col md={12} xs={12}>
                    <div className="tt-item">
                        <h2 className="tt-title mb-3">MIS DIRECCIONES</h2>
                        <div className="form-default form-top">
                            <Form onSubmit={e => funSaveAddress(e)}>

                                <FormGroup>
                                    <Input className="account-input" type="text" name="name_adress" placeholder="Nombre Descriptivo" required />
                                </FormGroup>
                                <FormGroup>
                                    <Input className="account-input" type="text" name="name_alias" placeholder="Cll/Cra/Via..., Barrio" required />
                                </FormGroup>
                                <FormGroup>
                                    <Button block className="mt-2"><i className="fas fa-check"></i>&nbsp;&nbsp;Guardar </Button>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
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

// -----------------------------------------------------------------------
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



const ModalProfile = props => {
    return (
        <>
            <Modal returnFocusAfterClose isOpen={props.modalOpen} >
                <ModalHeader toggle={() => props.closeModal()}></ModalHeader>
                <ModalBody>
                    <Profile {...props} />
                </ModalBody>
            </Modal>
        </>
    );
}

const ModalRefreshTokenLogin = () => {
    const [state, dispatch] = useGlobal();

    const funModalCloset = () => {
        dispatch({ type: "REFRESH_TOKEN_MODAL", refreshTokenModal: false });
    }

    return (
        <>
            <Modal returnFocusAfterClose isOpen={state.refreshTokenModal} >
                <ModalHeader toggle={() => funModalCloset()}></ModalHeader>
                <ModalBody>
                    <LoginComponent />
                </ModalBody>
            </Modal>
        </>
    )
}

const ModalAdress = props => {
    const [state, dispatch] = useGlobal();

    const funModalCloset = () => {
        dispatch({ type: "MODAL_ADRESS", modalAdress: false });
    }

    return (
        <>
            <Modal returnFocusAfterClose isOpen={state.modalAdress} >
                <ModalHeader toggle={() => funModalCloset()}></ModalHeader>
                <ModalBody>
                    <Adress {...props} funModalCloset={() => funModalCloset()} />
                </ModalBody>
            </Modal>
        </>
    )
}

export {
    ModalLocation,
    ModalProfile,
    ModalRefreshTokenLogin,
    ModalAdress
}


