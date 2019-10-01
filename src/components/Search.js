import React, { useState, useEffect, useRef } from 'react';
import {
    Container, Col, Form, Row, InputGroup,
    Input, InputGroupAddon, Button, ListGroup, ListGroupItem
} from 'reactstrap';
import { API } from '../managers/api/ApiManager';
import { funRenderSpinner } from '../managers/helpers/HelperManager';
import { useGlobal } from '../managers/store/Context';


const SearchHeaderComponent = props => {

    const [state, dispatch] = useGlobal();
    const [getSearch, setSearch] = useState([]);
    const [getLoading, setLoading] = useState(false);
    const [getCountProduct, setCountProduct] = useState(0);
    const getSideNav = useRef(null);

    useEffect(() => {
        setSearch(state.searchProducts);
    }, [state.searchProducts]);

    useEffect(() => {
        setCountProduct(state.totalProduct);
    }, [state.totalProduct])

    useEffect(() => {
        if (state.textSearch === "") {
            setSearch([]);
        }
    }, [state.textSearch]);



    const funSearch = async (e, isSendSearch = false) => {
        e.preventDefault();
        setLoading(true)
        if (state.textSearch !== "") {
            const resSearch = await API.GET.RetrieveProductFromSearch(localStorage.getItem("city"), state.textSearch);
            if (resSearch) {
                dispatch({ type: "SEARCH_PRODUCT", searchProducts: resSearch.message.data });
                setSearch(resSearch.message.data);
            }
        }
        setLoading(false);
        if(isSendSearch && state.textSearch !== ""){
            funSendSearchProduct(getSearch);
        }
    }


    const funSideNav = (closet = false) => getSideNav.current.style.width = closet ? "0" : "220px";


    const funSendSearchProduct = product => {
        localStorage.setItem("productsSearch", JSON.stringify(product));
        window.location.href = `/search`;
    }


    return (
        <>
            <Container >

                {/* MENU MOBILE */}
                <div ref={getSideNav} className="sidenav ">
                    <a href="# " className="closebtn" onClick={() => funSideNav(true)}>&times;</a>
                    <a href="/" >INICIO</a>
                    <a href="/droguery" >DROGUERIA VIRTUAL</a>
                    <a href="/babycare">CUIDADO DEL BEBÉ</a>
                    <a href="/dictionary" >DICCIONARIO</a>
                    <a href="/subsidiary">SUCURSALES</a>
                    {props.getProfile.nit &&
                        <a href="/profile" onClick={e => { e.preventDefault(); funSideNav(true); props.funGetProfile(e) }} >PERFIL</a>
                    }
                    {!props.getProfile.nit &&
                        <a href="/account/login">INICIAR SESIÓN</a>
                    }
                    {!props.getProfile.nit &&
                        <a href="/account/register">REGISTRARSE</a>
                    }
                    {props.getProfile.nit &&
                        <a href="/" onClick={e => props.funLogout(e)}>CERRAR SESIÓN</a>
                    }
                      <a href="# " onClick={e => props.funValidateVidaSana(e)}>CLUB VIDA SANA</a>
                    
                </div>

                <Row className="mt-3 mb-2" >
                    <Col md={2} xs={12}>

                        <Row className=" d-lg-none text-center">
                            <Col xs={3} className="text-left" >
                                <div className="tt-menu-toggle" onClick={() => funSideNav()}>
                                    <i className="icon-03"></i>
                                </div>
                            </Col>
                            <Col xs={6}>
                                <a href="/">
                                    <img alt="la economia" src="/assets/logo_economia.png" className="logo-header" />
                                </a>
                            </Col>
                            <Col xs={3} >
                                <button className="tt-dropdown-toggle tt-menu-toggle " onClick={() => window.location.href = "/buys"}>
                                    <i className="icon-f-47" />

                                    <span className="tt-badge-cart">{getCountProduct}</span>
                                </button>
                            </Col>

                        </Row>
                        <a className=" d-none d-md-block " href="/">
                            <img alt="la economia" src="/assets/logo_economia.png" className="logo-header" />
                        </a>
                    </Col>
                    <Col md={10} xs={12}>
                        <Form onSubmit={e => funSearch(e,true)} >
                            <Row className="mb-1">
                                <Col md={11} xs={10}>
                                    <InputGroup>
                                        <Input
                                            placeholder={'¿Qué está buscando?'}
                                            className={`header-input${state.textSearch === "" ? '-border' : ''} mt-3`}
                                            onChange={e => {
                                                if (e.target.value.length > 3) {
                                                    funSearch(e, false);
                                                }
                                                dispatch({ type: "TEXT_SEARCH", textSearch: e.target.value });
                                            }}
                                            value={state.textSearch}
                                        />
                                        {state.textSearch !== "" &&
                                            <div className="content-search" >
                                                {/* <hr /> */}
                                                <Container>
                                                    <Row className="content-row-collapsible">
                                                        <Col md={12} className="content-search-border-rigth collapsible-col" style={{
                                                            padding: 0,
                                                            height: '33vh',
                                                            overflow: 'auto'
                                                        }}>

                                                            <ListGroup>
                                                                {getLoading && <div className="mt-2"> {funRenderSpinner("sm")} </div>}
                                                                {!getLoading && getSearch.map((item, i) => {
                                                                    return (
                                                                        item.rownum &&
                                                                        <ListGroupItem key={i}
                                                                            // onClick={() => window.location.href = `/droguery/${btoa(item.codigo)}/${btoa("productUnique")}`}
                                                                             onClick={() => {
                                                                                funSendSearchProduct(item);
                                                                                }}
                                                                        >
                                                                            {item.descripcion}
                                                                        </ListGroupItem>
                                                                    )
                                                                })}
                                                            </ListGroup>
                                                        </Col>

                                                    </Row>
                                                </Container>
                                            </div>
                                        }
                                    </InputGroup>
                                </Col>
                                <Col md={1} xs={2}>
                                    <InputGroupAddon addonType="append" className="mt-3">
                                        <Button
                                            className="btn-search-header">
                                            <i className="fas fa-search"></i>
                                        </Button>
                                    </InputGroupAddon>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const SearchMedicineComponent = () => {

    const [getSearchDictionary, setSearchDictionary] = useState([]);
    const [getEnlace, setEnlace] = useState("");
    const [getLoadingDictionary, setLoadingDictionary] = useState(false);
    const [getOpenContent, setOpenContent] = useState(false);


    const funSearchDictionary = async e => {
        setOpenContent(true)
        if (e !== "") {
            setLoadingDictionary(true);
            const resRetrieveDictionary = await API.GET.RetrieveDictionary(e);
            if (resRetrieveDictionary) {
                setSearchDictionary(resRetrieveDictionary.message.diccionario)
            }
        } else {
            funOnBack();
        }
        setLoadingDictionary(false);
    }

    const funOnBack = () => {
        setOpenContent(false);
        setLoadingDictionary(false);
        setSearchDictionary([]);
    }


    return (
        <>
            <Container>
                <Row className="text-center mt-5">
                    <Col md={12}>
                        <h5>INGRESA EL NOMBRE DEL MEDICAMENTO</h5>
                        <InputGroup>
                            <Input
                                maxLength={100}
                                placeholder={'Buscar...'}
                                className="medicine-input"
                                onChange={e => funSearchDictionary(e.target.value)}
                            // onBlur={() => funOnBack()}
                            />
                            <InputGroupAddon addonType="append" >
                                <i className="fas fa-search ico-search-medicine"></i>
                            </InputGroupAddon>
                        </InputGroup>
                        {
                            getOpenContent && <div className="content-search" style={{ width: '98.5%', top: 60 }}>
                                {getLoadingDictionary && <div className="mt-2">{funRenderSpinner("sm")} </div>}
                                {
                                    (getSearchDictionary.length > 0 && !getLoadingDictionary) &&
                                    <ListGroup style={{ height: '33.5vh', overflow: 'auto' }}>
                                        {getSearchDictionary.map((item, i) => {
                                            return <ListGroupItem key={i} tag="button" href="#" action className="text-left list-group-item-personalized"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setEnlace(item.enlace);
                                                    funOnBack();
                                                }}
                                            >{item.producto} - {item.laboratorio}</ListGroupItem>
                                        })}
                                    </ListGroup>
                                }
                            </div>
                        }

                    </Col>
                    <Col md={12}>
                        <br />
                        {
                            getEnlace !== "" &&
                            <iframe title="ifrm" src={`https://www.droguerialaeconomia.com/economia/site/vademecum/${getEnlace}`} style={{ border: 'none', width: '100%', height: '100vh' }}></iframe>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export {
    SearchHeaderComponent,
    SearchMedicineComponent
}

