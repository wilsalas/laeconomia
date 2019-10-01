import React, { useState, useEffect } from 'react';
import { Button, Col, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, Row } from 'reactstrap';
import { API, VIDA_SANA_API } from '../managers/api/ApiManager';
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
        localStorage.setItem("nameCity", e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text);
        window.location.reload();
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
                        <h6 className="tt-title mb-3">AGREGAR NUEVA DIRECCIÓN</h6>
                        <div className="form-default form-top">
                            <Form onSubmit={e => funSaveAddress(e)}>

                                <FormGroup className="text-left">
                                    <Label for="name_adress" >Dirección</Label>
                                    <Input className="account-input" type="text" name="name_adress" placeholder="Ingresa nueva dirección" required />
                                </FormGroup>
                                <FormGroup className="text-left">
                                    <Label for="name_alias" >Notas, Observaciones</Label>
                                    <Input className="account-input" type="text" name="name_alias" placeholder="Casa, apartamento, oficina, piso, etc." required />
                                </FormGroup>
                                <FormGroup>
                                    <Button block className="mt-2">Agregar </Button>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}


// const PaymentCreditCart = () => {
//     return (
//         <>
//             <Container>
//                 <h6>INGRESA TUS DATOS</h6>
//                 <Form className="payment-form">
//                     <FormGroup>
//                         <Input className="payment-input" type="number" name="tc_number" placeholder="Número de tarjeta" />
//                     </FormGroup>
//                     <FormGroup>
//                         <Input className="payment-input" type="text" name="tc_name" placeholder="Nombre como aparece en la tarjeta" />
//                     </FormGroup>
//                     <Row form>
//                         <Col md={4}>
//                             <FormGroup>
//                                 <Input className="payment-input" type="text" name="tc_date" placeholder="MM/AA" />
//                             </FormGroup>
//                         </Col>
//                         <Col md={4}>
//                             <FormGroup>
//                                 <Input className="payment-input" type="text" name="tc_cvv" placeholder="CVV" />
//                             </FormGroup>
//                         </Col>
//                         <Col md={4}>
//                             <FormGroup>
//                                 <div class="select-style">
//                                     <Input type="select" name="select_cuotes">
//                                         <option value="1">Cuotas</option>
//                                         <option value="1">Cuotas2</option>
//                                         <option value="1">Cuotas3</option>
//                                     </Input>
//                                 </div>
//                             </FormGroup>
//                         </Col>
//                     </Row>
//                     <button className="btn-lg btn-block btn-outline-primary ">Pagar $999.999</button>
//                 </Form>
//             </Container>
//         </>
//     );
// }



// const PaymentCobru = () => {
//     return (
//         <>
//             <Container>
//                 <h6>INGRESA TUS DATOS</h6>
//                 <Form className="payment-form">
//                     <FormGroup>
//                         <Input className="payment-input" style={{ padding: 7 }} type="tel" name="cobru_number" placeholder="Ingresa tu número de celular" />
//                     </FormGroup>
//                     <button className="btn-lg btn-block btn-outline-primary ">Pagar con la App</button>
//                 </Form>
//             </Container>
//         </>
//     );
// }


// const PaymentPSE = () => {
//     return (
//         <>
//             <Container>
//                 <h6>INGRESA TUS DATOS</h6>
//                 <Form className="payment-form">
//                     <FormGroup>
//                         <div class="select-style">
//                             <Input type="select" name="select_cuotes" >
//                                 <option value="">Escoge tu banco</option>
//                                 <option value="1">Cuotas2</option>
//                                 <option value="1">Cuotas3</option>
//                             </Input>
//                         </div>
//                     </FormGroup>
//                     <button className="btn-lg btn-block btn-outline-primary ">Continuar en PSE</button>
//                 </Form>
//             </Container>
//         </>
//     );
// }


// const BuySuccess = () => {

//     const [title] = useState("¡Tu compra \n ha sido exitosa!");
//     const [message] = useState("Nuestros domiciliarios estarán \n muy pronto contigo");

//     return (
//         <>
//             <Container>
//                 <h5>{title}</h5>
//                 <Form className="payment-form">
//                     <FormGroup>
//                         <img src="/assets/icon-success.png" width="20%" alt="img icon suc" />
//                     </FormGroup>
//                     <FormGroup>
//                         <p>{message}</p>
//                     </FormGroup>
//                     <button className="btn-lg btn-block btn-outline-primary ">Entendido</button>
//                 </Form>
//             </Container>
//         </>
//     );
// }


// const RegisterSuccess = () => {

//     const [title] = useState("¡Tu registro \n ha sido exitoso!");
//     const [message] = useState("Empieza a disfrutar de las promociones que tenemos para ti");

//     return (
//         <>
//             <Container>
//                 <h5>{title}</h5>
//                 <Form className="payment-form">
//                     <FormGroup>
//                         <img src="/assets/icon-success.png" width="20%" alt="img icon suc" />
//                     </FormGroup>
//                     <FormGroup>
//                         <p>{message}</p>
//                     </FormGroup>
//                     <button className="btn-lg btn-block btn-outline-primary ">Entendido</button>
//                 </Form>
//             </Container>
//         </>
//     );
// }

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
                    <LoginComponent modalLogin />
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

const ModalDictionary = () => {

    const [getOpenModalDictionary, setOpenModalDictionary] = useState(true);
    const funModalCloset = () => setOpenModalDictionary(false);

    return (
        <>
            <Modal returnFocusAfterClose isOpen={getOpenModalDictionary}  >
                <ModalHeader toggle={() => funModalCloset()}><b>Condiciones Legales</b></ModalHeader>
                <ModalBody>
                    <p>
                        La información incluida en esta página sobre nuestros medicamentos está dirigida exclusivamente a los médicos y profesionales de la salud.

                        No es para uso del público en general y no puede tomarse como una orientación para automedicarse, complementar, reemplazar o cambiar las indicaciones de tratamiento que haya recibido de un médico.

                        Los tratamientos de salud, en especial cuando incluyen medicamentos de prescripción (aquellos que sólo se venden con receta médica), deben ser definidos, orientados y vigilados en todo momento por un médico.

                        En consecuencia, si usted no es médico o profesional de la salud, debe abstenerse de consultar la información incluida aquí sobre medicamentos.

                        En caso de que decida seguir adelante, es claro que lo hace con pleno conocimiento de lo que ello implica y, por tanto, Droguería La Economía no asume ninguna responsabilidad por el uso que usted le dé a dicha información.
                   </p>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={() => funModalCloset()}>Estoy de acuerdo</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

const ModalVidaSana = () => {
    const [state, dispatch] = useGlobal();

    const funModalCloset = () => {
        window.location.href = "/";
        // dispatch({ type: "MODAL_VIDA_SANA", modalVidaSana: false });
    }

    return (
        <>
            <Modal returnFocusAfterClose isOpen={state.modalVidaSana} >
                <ModalHeader toggle={() => funModalCloset()}></ModalHeader>
                <ModalBody>
                    <img src="/assets/vidasana.png" width="100%" alt="img vida sana" />
                    <Row className="mt-3">
                        <Col md={12} xs={12}>
                            <h3>Haz parte de este gran club</h3>
                        </Col>
                        <Col md={12} xs={12}>
                            <p className="mt-2">Acepta y empieza a disfrutar de los descuentos y beneficios que tenemos para ti.</p>
                        </Col>
                        <Col md={12} xs={12}>
                            <Button className="mt-2" color="primary" block onClick={() => { dispatch({ type: "MODAL_FORM_VIDA_SANA", modalFormVidaSana: true }); }}>Aceptar</Button>
                        </Col>
                        <Col md={12} xs={12}>
                            <p className="mt-2">Al aceptar quedará inscrito en nuestro club</p>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </>
    )
}

const ModalFormVidaSana = () => {
    const [state, dispatch] = useGlobal();
    const [getProfile, setProfile] = useState([]);
    const [getAdress, setAdress] = useState("");
    const [getGender, setGender] = useState("M");

    useEffect(() => {
        if (localStorage.getItem("usi")) {
            setProfile(JSON.parse(atob(localStorage.getItem("usi"))));
        }
    }, []);



    const funModalCloset = () => {
        dispatch({ type: "MODAL_FORM_VIDA_SANA", modalFormVidaSana: false });
    }


    const funRegisterVidaSana = async e => {
        e.preventDefault();

        let resProfile = await API.POST.PerformRetrieveProfileInformation(getProfile.nit, getProfile.nombres, getProfile.email, getProfile.auth_token);

        if(!resProfile.error){

            let profile = resProfile.message.data;

            let resRegisterVidaSana = await VIDA_SANA_API.POST.PerformVidaSanaSignUp(
                localStorage.getItem("city"),
                profile.nit,
                {
                    document: profile.nit,
                    firstname: profile.nombres.split(" ")[0],
                    secondname: '',
                    lastname: profile.nombres.split(" ")[1],
                    secondlastname: '',
                    dateOfBirth: profile.fecha_nacimiento,
                    address: getAdress,
                    phone: profile.phone,
                    cellphone: profile.telefono,
                    email: profile.email,
                    terms: true,
                    gender: getGender,
                }
            )
            if (!resRegisterVidaSana.error) {
                funModalCloset();
                dispatch({ type: "MODAL_VIDA_SANA", modalVidaSana: false });
            }
    
            AlertSwal(!resRegisterVidaSana.error ? "REGISTER_SUCCESS" : "ERROR_SERVER");
        }

    }


    return (
        <>
            <Modal returnFocusAfterClose isOpen={state.modalFormVidaSana} >
                <ModalHeader toggle={() => funModalCloset()}></ModalHeader>
                <ModalBody>
                    <img src="/assets/vidasana.png" width="100%" alt="img vida sana" />
                    <Row className="mt-3">
                        <Col md={12} xs={12}>
                            <div className="tt-item item-register-form">
                                <div className="form-default form-top">
                                    <Form onSubmit={e => funRegisterVidaSana(e)}>
                                        <FormGroup >
                                            <Label for="direccion" >Dirección *</Label>
                                            <Input className="account-input" type="text" name="direccion" required onChange={e => setAdress(e.target.value)} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="gender">Género *</Label>
                                            <Input className="account-input" type="select" name="gender" required onChange={e => setGender(e.target.value)}>
                                                <option value="M">Masculino</option>
                                                <option value="F">Femenino</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Button className="btn btn-border" block>Registrar</Button>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </>
    )
}


export {
    ModalLocation,
    ModalProfile,
    ModalRefreshTokenLogin,
    ModalAdress,
    ModalDictionary,
    ModalVidaSana,
    ModalFormVidaSana
}


