import classnames from 'classnames';
import React, { useState, useEffect } from 'react';
import { Container, Col, TabContent, TabPane, Nav, NavItem, NavLink, Row, Spinner } from 'reactstrap';
import { VerticalProductComponent, HorizontalProductComponent, HorizontalBrandsComponent } from './Product';
import { API } from '../managers/api/ApiManager';
import { useGlobal } from '../managers/store/Context';


const TabContentComponent = props => {


    const [state, dispatch] = useGlobal();
    const [getRetrieveOffers, setRetrieveOffers] = useState([]);
    const [getRetrieveTopOffers, setRetrieveTopOffers] = useState([]);
    const [getActiveTab, setActiveTab] = useState("0");
    const [getLoading, setLoading] = useState(false);
    const getCol = props.col ? 4 : 3;
    const getMaxwidth = props.maxwidth ? 2 : 1;
    const getPage = 12;
    const [getPageSubcategorie, setPageSubcategorie] = useState(1);

    // get products  from code and initialize
    useEffect(() => {
        if (!props.codeProduct) {
            funRetrieveOffers();
            funRetrieveTopOffers();
        } else {
            funRetrieveProductFromCode(atob(props.codeProduct), props.type);
        }
    }, [props.codeProduct, props.type]);

    // get productos from subcategories
    useEffect(() => {
        setRetrieveOffers(state.products);
        setRetrieveTopOffers(state.products);
    }, [state.products]);


    const funRetrieveProductFromCode = async (code, type = "droguery") => {
        let resRetrieveProductFromCode = type !== "baby" ? await API.GET.RetrieveProductFromCode(localStorage.getItem("city"), code) :
            await API.GET.RetrieveProductsFromSubcategory(localStorage.getItem("city"), code);
        if (Array.isArray(resRetrieveProductFromCode.message)) setRetrieveOffers(resRetrieveProductFromCode.message);
    }

    const funProductForSubCategories = async () => {
        let codeSubCategorie = state.subCategorie !== "" ? state.subCategorie : atob(props.codeProduct)
        setPageSubcategorie(getPageSubcategorie + 1);
        dispatch({ type: "GET_PRODUCT" })
        let resSubCategories = await API.GET.RetrieveProductsFromSubcategory(localStorage.getItem("city"), codeSubCategorie, { page: getPageSubcategorie });
        if (Array.isArray(resSubCategories.message)) dispatch({ type: "GET_PRODUCT", products: resSubCategories.message, subCategorie: codeSubCategorie })
    }


    const funRetrieveOffers = async (itemsPerPage = getPage) => {
        let resRetrieveOffers = await API.GET.RetrieveOffers(localStorage.getItem("city"), itemsPerPage);
        if (Array.isArray(resRetrieveOffers.message)) setRetrieveOffers(resRetrieveOffers.message);
        setLoading(false);

    }

    const funRetrieveTopOffers = async (itemsPerPage = getPage) => {
        let resRetrieveTopOffers = await API.GET.RetrieveTopOffers(localStorage.getItem("city"), itemsPerPage);
        if (Array.isArray(resRetrieveTopOffers.message)) setRetrieveTopOffers(resRetrieveTopOffers.message);
        setLoading(false);
    }


    const funToggle = tab => {
        if (getActiveTab !== tab) {
            setActiveTab(tab);
        }
    }


    //  more products
    const funMoreProducts = () => {
        if (props.type === "droguery" || props.type === "baby") {
            funProductForSubCategories();
        } else {
            setLoading(true)
            switch (getActiveTab) {
                case '0':
                    funRetrieveOffers(getPage + getRetrieveOffers.length)
                    break;
                case '1':
                    funRetrieveTopOffers(getPage + getRetrieveTopOffers.length)
                    break;
                case '2':
                    funRetrieveOffers(getPage + getRetrieveOffers.length)
                    break;
                case '3':
                    funRetrieveTopOffers(getPage + getRetrieveTopOffers.length);
                    break;
                default:
                    break;
            }
        }
    }


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
                            <VerticalProductComponent products={getRetrieveOffers} col={getCol} maxwidth={getMaxwidth} />
                        </TabPane>
                        <TabPane tabId="1" >
                            <VerticalProductComponent products={getRetrieveTopOffers} col={getCol} maxwidth={getMaxwidth} />
                        </TabPane>
                        <TabPane tabId="2" >
                            <VerticalProductComponent products={getRetrieveOffers} col={getCol} maxwidth={getMaxwidth} />
                        </TabPane>
                        <TabPane tabId="3" >
                            <VerticalProductComponent products={getRetrieveOffers} col={getCol} maxwidth={getMaxwidth} />
                        </TabPane>
                    </TabContent>

                    <button className="btn-lg btn-outline-primary rounded-pill mx-auto" style={{ margin: 20 }} onClick={() => funMoreProducts()}>
                        Cargar más {getLoading && <Spinner size={'sm'} color="light" />}
                    </button>
                </div>
            </Container>
        </>
    );
}


const InterestContentComponent = () => {

    const [getTranslate, setTranslate] = useState(0);
    const [getVelocity] = useState(885);
    const [getPage, setPage] = useState(2);
    const [getLimitPage, setLimitPage] = useState(0);
    const [getRetrieveOffersInterest, setRetrieveOffersInterest] = useState([]);
    const [getLoading, setLoading] = useState(false);

    useEffect(() => {
        funRetrieveOffers();
    }, []);

    const funRetrieveOffers = async (itemsPerPage = 12) => {
        let resRetrieveOffers = await API.GET.RetrieveOffers(localStorage.getItem("city"), itemsPerPage);
        if (Array.isArray(resRetrieveOffers.message)) setRetrieveOffersInterest(resRetrieveOffers.message);
        setLoading(false);
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
    }

    const funAddMoreProduct = () => {
        setPage(getPage + 2);
        setLoading(true);
        funRetrieveOffers(getRetrieveOffersInterest.length + getRetrieveOffersInterest.length)
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
                                        <button className="btn-lg btn-outline-primary rounded-pill" onClick={() => funAddMoreProduct()}>Ver mas {getLoading && <Spinner size={'sm'} color="light" />}</button>
                                    </Col>
                                </Row>
                                <HorizontalProductComponent products={getRetrieveOffersInterest} col={3} />
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


