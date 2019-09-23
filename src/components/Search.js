import React, { useState, useEffect } from 'react';
import {
    Container, Col, Form, Row, InputGroup,
    Input, InputGroupAddon, Button, ListGroup, ListGroupItem
} from 'reactstrap';
import { API } from '../managers/api/ApiManager';
import { FormatPointsSupensive, funRenderSpinner } from '../managers/helpers/HelperManager';
import { useGlobal } from '../managers/store/Context';


const SearchHeaderComponent = () => {

    const [state, dispatch] = useGlobal();
    const [getSearch, setSearch] = useState([]);
    const [getLoading, setLoading] = useState(false);



    useEffect(() => {
        setSearch(state.searchProducts);
    }, [state.searchProducts]);


    useEffect(() => {
        if (state.textSearch === "") {
            setSearch([]);
        }
    }, [state.textSearch]);



    const funSearch = async e => {
        e.preventDefault();
        setLoading(true)
        if (state.textSearch !== "") {
            const resSearch = await API.GET.RetrieveProductFromSearch(localStorage.getItem("city"), state.textSearch);
            if (resSearch) {
                dispatch({ type: "SEARCH_PRODUCT", searchProducts: resSearch.message.referencias });
                setSearch(resSearch.message.referencias);
            }
        }
        setLoading(false)
    }

    return (
        <>
            <Container >
                <Row className="mt-4 mb-1" >
                    <Col md={2} xs={12}>
                        <a href="/">
                            <img alt="la economia" src="/assets/logo_economia.png" className="logo-header" />
                        </a>
                    </Col>
                    <Col md={10} xs={12}>
                        <Form onSubmit={e => funSearch(e)}>
                            <Row>
                                <Col md={11} xs={10}>
                                    <InputGroup>
                                        <Input
                                            placeholder={'¿Qué está buscando?'}
                                            className={`header-input${state.textSearch === "" ? '-border' : ''}`}
                                            onChange={e => {
                                                dispatch({ type: "TEXT_SEARCH", textSearch: e.target.value });
                                            }}
                                            value={state.textSearch}
                                        />
                                        {state.textSearch !== "" &&
                                            <div className="content-search" >
                                                {/* <hr /> */}
                                                <Container>
                                                    <Row className="content-row-collapsible">
                                                        <Col md={4} className="content-search-border-rigth collapsible-col" style={{
                                                            padding: 0,
                                                            height: '33vh',
                                                            overflow: 'auto'
                                                        }}>

                                                            <ListGroup>
                                                                {getLoading && funRenderSpinner("sm")}
                                                                {!getLoading && getSearch.map((item, i) => {
                                                                    return (
                                                                        <ListGroupItem key={i}
                                                                            onClick={() => window.location.href = `/droguery/${btoa(item.codigo)}/${btoa("productUnique")}`}
                                                                        >
                                                                            {FormatPointsSupensive(item.descripcion, 25)}
                                                                        </ListGroupItem>
                                                                    )
                                                                })}
                                                            </ListGroup>
                                                        </Col>
                                                        <Col md={4} className="content-search-border-rigth collapsible-col">
                                                            <p className="mb-2 mt-3">MARCAS RELACIONADAS</p>
                                                            <ul style={{ padding: 0 }}>
                                                                <li>
                                                                    <a href="/">
                                                                        Aspirina
                                                                </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">
                                                                        Aspirina
                                                                </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">
                                                                        Aspirina
                                                                </a>
                                                                </li>

                                                            </ul>
                                                        </Col>
                                                        <Col md={4} className="collapsible-col">
                                                            <p className="mb2 mt-3">CATEGORÍAS RELACIONADAS</p>
                                                            <ul style={{ padding: 0 }}>
                                                                <li>
                                                                    <a href="/">
                                                                        Lo más buscado
                                                                </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">
                                                                        Promociones del mes
                                                                </a>
                                                                </li>
                                                            </ul>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </div>
                                        }
                                    </InputGroup>
                                </Col>
                                <Col md={1} xs={2}>
                                    <InputGroupAddon addonType="append">
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
                            getOpenContent && <div className="content-search" style={{ width: '98.5%', top: 83 }}>
                                {getLoadingDictionary && funRenderSpinner("sm")}
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

