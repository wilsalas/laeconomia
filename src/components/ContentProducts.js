import classnames from 'classnames';
import React, { useState, useEffect } from 'react';
import { Container, Col, TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import { VerticalProductComponent, HorizontalProductComponent, HorizontalBrandsComponent } from './Product';
import { API } from '../managers/api/ApiManager';
import { useGlobal } from '../managers/store/Context';


const TabContentComponent = props => {

    const [state,] = useGlobal();
    const [getRetrieveOffers, setRetrieveOffers] = useState([]);
    const [getRetrieveTopOffers, setRetrieveTopOffers] = useState([]);
    const [getActiveTab, setActiveTab] = useState("0");
    const getCol = props.col ? 4 : 3;
    const getMaxwidth = props.maxwidth ? 2 : 1;

    // get products  from code and initialize
    useEffect(() => {
        if (!props.codeProduct) {
            funRetrieveOffers();
            funRetrieveTopOffers();
        } else {
            funRetrieveProductFromCode(atob(props.codeProduct));
        }
    }, [props.codeProduct]);

    // get productos from subcategories
    useEffect(() => {
        setRetrieveOffers(state.products);
        setRetrieveTopOffers(state.products);
    }, [state.products]);


    const funRetrieveProductFromCode = async code => {
        let resRetrieveProductFromCode = await API.GET.RetrieveProductFromCode(localStorage.getItem("city"), code);
        if (Array.isArray(resRetrieveProductFromCode.message)) setRetrieveOffers(resRetrieveProductFromCode.message);
    }

    const funRetrieveOffers = async () => {
        let resRetrieveOffers = await API.GET.RetrieveOffers(localStorage.getItem("city"));
        if (Array.isArray(resRetrieveOffers.message)) setRetrieveOffers(resRetrieveOffers.message);
        // console.log(res.message);

    }

    const funRetrieveTopOffers = async () => {
        let resRetrieveTopOffers = await API.GET.RetrieveTopOffers(localStorage.getItem("city"));
        if (Array.isArray(resRetrieveTopOffers.message)) setRetrieveTopOffers(resRetrieveTopOffers.message);
    }


    const funToggle = tab => {
        if (getActiveTab !== tab) {
            setActiveTab(tab);
        }
    }


    const funMoreProducts = () => { }
    return (
        <>
            <Container>
                <div style={{ display: 'grid', overflow: 'scroll' }} className="mt-4">
                    <Nav tabs className="justify-content-center">
                        <NavItem>
                            <NavLink className={classnames({ active: getActiveTab === '0' })} onClick={() => { funToggle('0'); }}>
                                OFERTAS DEL DÍA
                        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: getActiveTab === '1' })} onClick={() => { funToggle('1'); }}>
                                NUEVOS PRODUCTOS
                        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: getActiveTab === '2' })} onClick={() => { funToggle('2'); }}>
                                MÁS COMPRADOS
                        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: getActiveTab === '3' })} onClick={() => { funToggle('3'); }}>
                                MÁS PEDIDOS
                        </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={getActiveTab} >
                        <TabPane tabId="0" >
                            <VerticalProductComponent products={getRetrieveOffers.slice(0, getRetrieveOffers.length)} col={getCol} maxwidth={getMaxwidth} />
                        </TabPane>
                        <TabPane tabId="1" >
                            <VerticalProductComponent products={getRetrieveTopOffers.slice(0, getRetrieveTopOffers.length)} col={getCol} maxwidth={getMaxwidth} />
                        </TabPane>
                        <TabPane tabId="2" >
                            <VerticalProductComponent products={getRetrieveOffers.slice(0, getRetrieveOffers.length)} col={getCol} maxwidth={getMaxwidth} />
                        </TabPane>
                        <TabPane tabId="3" >
                            <VerticalProductComponent products={getRetrieveOffers.slice(0, getRetrieveOffers.length)} col={getCol} maxwidth={getMaxwidth} />
                        </TabPane>
                    </TabContent>

                    <button className="btn-lg btn-outline-primary rounded-pill mx-auto" style={{ margin: 20 }} onClick={() => funMoreProducts()}>Cargar más</button>
                </div>
            </Container>
        </>
    );
}


const InterestContentComponent = () => {

    const [getTranslate, setTranslate] = useState(0);
    const [getVelocity] = useState(885);
    const [getPage, setPage] = useState(24);
    const [getLimitPage, setLimitPage] = useState(0);
    const [getRetrieveOffers, setRetrieveOffers] = useState([]);


    useEffect(() => {
        funRetrieveOffers();
    }, []);

    const funRetrieveOffers = async () => {
        let resRetrieveOffers = await API.GET.RetrieveOffers(localStorage.getItem("city"));
        if (Array.isArray(resRetrieveOffers.message)) setRetrieveOffers(resRetrieveOffers.message);
        // console.log(res.message);

    }


    const funButtonSlider = direction => {
        let container = document.querySelector(".container-interest"),
            translate = getTranslate,
            limitPage = getLimitPage;

        if (direction > 0) {
            limitPage--;
            translate += getVelocity

        } else {
            limitPage++;
            translate -= getVelocity
        }
        setTranslate(translate);
        setLimitPage(limitPage)
        container.style.transform = `translateX(${translate}px)`;
        console.log("lIMIT PAGE:", limitPage);

    }

    const funAddMoreProduct = () => {
        setPage(getPage + 1);
        console.log("Uno mas agregado", getPage);
    }

    return (
        <>
            <Container fluid>
                <Row className="mt-4">
                    <Col md={12}>
                        <Row>
                            <Col md={1} className="column-btns-product-center">
                                {getLimitPage > 0 &&
                                    <button className="btn-left-product btn-products-arrow" onClick={() => funButtonSlider(1)}>{'<'}</button>
                                }
                            </Col>
                            <Col md={10}>
                                <Row>
                                    <Col md={10}>
                                        <h5 className="h5-title">TE PODRÍA INTERESAR</h5>
                                    </Col>
                                    <Col md={2} className="align-inline-flex-content-getColumn">
                                        <button className="btn-lg btn-outline-primary rounded-pill" onClick={() => funAddMoreProduct()}>Ver mas</button>
                                    </Col>
                                </Row>
                                <HorizontalProductComponent products={getRetrieveOffers.slice(0, getRetrieveOffers.length)} col={3} />
                            </Col>
                            <Col md={1} className="column-btns-product-center">
                                {
                                    getLimitPage < getPage &&
                                    <button className="btn-rigth-product  btn-products-arrow" onClick={() => funButtonSlider(0)} >{'>'}</button>
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const SponsorShipsComponent = () => {


    const [getTranslate, setTranslate] = useState(0);
    const [getVelocity] = useState(1185);
    const [getPage, setPage] = useState(1);
    const [getLimitPage, setLimitPage] = useState(0);



    const funButtonSlider = direction => {
        let container = document.querySelector(".container-interest"),
            translate = getTranslate,
            limitPage = getLimitPage;

        if (direction > 0) {
            limitPage--;
            translate += getVelocity

        } else {
            limitPage++;
            translate -= getVelocity
        }
        setTranslate(translate);
        setLimitPage(limitPage)
        container.style.transform = `translateX(${translate}px)`;
        console.log("lIMIT PAGE:", limitPage);

    }

    const funAddMoreProduct = () => {
        setPage(getPage + 1);
        console.log("Uno mas agregado", getPage);
    }

    return (
        <>
            <Container fluid>
                <Row className="mt-4">
                    <Col md={12}>
                        <Row>
                            <Col md={1} className="column-btns-product-center">
                                {getLimitPage > 0 &&
                                    <button className="btn-left-product btn-products-arrow" onClick={() => funButtonSlider(1)}>{'<'}</button>
                                }
                            </Col>
                            <Col md={10}>
                                <Row>
                                    <Col md={10}>
                                        <h5 className="h5-title">MARCAS PATROCINADORAS</h5>
                                    </Col>
                                    <Col md={2} className="align-inline-flex-content-getColumn">
                                        <button className="btn-lg btn-outline-primary rounded-pill" onClick={() => funAddMoreProduct()}>Ver mas</button>
                                    </Col>
                                </Row>
                                <HorizontalBrandsComponent listCount={12} col={2} />
                            </Col>
                            <Col md={1} className="column-btns-product-center">
                                {
                                    getLimitPage < getPage &&
                                    <button className="btn-rigth-product  btn-products-arrow" onClick={() => funButtonSlider(0)} >{'>'}</button>
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}



export {
    TabContentComponent,
    InterestContentComponent,
    SponsorShipsComponent
}


