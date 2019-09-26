import classnames from 'classnames';
import React, { useState, useEffect } from 'react';
import { Container, Col, TabContent, TabPane, Nav, NavItem, NavLink, Row, Spinner } from 'reactstrap';
import { VerticalProductComponent, HorizontalProductComponent, HorizontalBrandsComponent } from './Product';
import { API } from '../managers/api/ApiManager';
import { useGlobal } from '../managers/store/Context';
import { funRenderSpinner } from '../managers/helpers/HelperManager';


const TabContentComponent = props => {

    const [state, dispatch] = useGlobal();
    const [getRetrieveOffers, setRetrieveOffers] = useState([]);
    const [getRetrieveTopOffers, setRetrieveTopOffers] = useState([]);
    const [getActiveTab, setActiveTab] = useState("0");
    const [getLoading, setLoading] = useState(false);
    const [getTypeSearch, setTypeSearch] = useState("");
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
            funRetrieveProductFromCode(props.type, atob(props.codeProduct));

        }
    }, [props.codeProduct, props.type]);

    // set data products from store 
    useEffect(() => {
        setRetrieveOffers(state.products);
        setRetrieveTopOffers(state.products);
        setTypeSearch(state.typeSearch);
    }, [state.products, state.typeSearch]);


    const funRetrieveProductFromCode = async (type = "productUnique", codigo, city = localStorage.getItem("city")) => {
        let resRetrieveProductFromCode;
        if (type !== "productSubCategoryCode") {
            // search product from code unique
            resRetrieveProductFromCode = await API.GET.RetrieveProductFromCode(city, codigo)
        } else {
            // search product from subcategorie code
            resRetrieveProductFromCode = await API.GET.RetrieveProductsFromSubcategory(city, codigo);
        }
        if (!resRetrieveProductFromCode.error) {
            setRetrieveOffers(resRetrieveProductFromCode.message);
            setRetrieveTopOffers(resRetrieveProductFromCode.message);
        }
    }

    const funProductForSubCategories = async () => {
        let codeSubCategorie = state.subCategorie !== "" ? state.subCategorie : atob(props.codeProduct);
        setPageSubcategorie(getPageSubcategorie + 1);
        dispatch({ type: "GET_PRODUCT" });
        let resSubCategories = await API.GET.RetrieveProductsFromSubcategory(localStorage.getItem("city"), codeSubCategorie, { page: getPageSubcategorie });
        if (!resSubCategories.error) {
            dispatch({ type: "GET_PRODUCT", products: resSubCategories.message, subCategorie: codeSubCategorie, typeSearch: "productSubCategoryCode" });
        }
    }


    const funRetrieveOffers = async (itemsPerPage = getPage) => {
        let resRetrieveOffers = await API.GET.RetrieveOffers(localStorage.getItem("city"), itemsPerPage);
        if (!resRetrieveOffers.error) {
            setRetrieveOffers(resRetrieveOffers.message);
        }
        setLoading(false);
    }

    const funRetrieveTopOffers = async (itemsPerPage = getPage) => {
        let resRetrieveTopOffers = await API.GET.RetrieveTopOffers(localStorage.getItem("city"), itemsPerPage);
        if (!resRetrieveTopOffers.error) {
            setRetrieveTopOffers(resRetrieveTopOffers.message);
        }
        setLoading(false);
    }


    const funToggle = tab => {
        if (getActiveTab !== tab) {
            setActiveTab(tab);
        }
    }


    //  more products
    const funMoreProducts = () => {


        if (props.type === "productSubCategoryCode" || getTypeSearch === "productSubCategoryCode") {
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
                                LAS MEJORES OFERTAS
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: getActiveTab === '1' })} onClick={() => { funToggle('1'); }}>
                                LO MÁS COMPRADO
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
                    </TabContent>
                    <button disabled={(getRetrieveOffers.length < 1 || getRetrieveTopOffers.length < 1)}
                        className="btn-lg btn-outline-primary rounded-pill mx-auto" style={{ margin: 20 }}
                        onClick={() => funMoreProducts()}>
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
    const [getPage, setPage] = useState(3);
    const [getLimitPage, setLimitPage] = useState(0);
    const [getRetrieveOffersInterest, setRetrieveOffersInterest] = useState([]);
    const [getLoading, setLoading] = useState(false);

    useEffect(() => {
        funRetrieveOffers();
    }, []);

    const funRetrieveOffers = async (itemsPerPage = 12) => {
        let resRetrieveOffers = await API.GET.RetrieveOffers(localStorage.getItem("city"), itemsPerPage);
        if (!resRetrieveOffers.error) {
            setRetrieveOffersInterest(resRetrieveOffers.message);
        }
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
        setLoading(true);
        funRetrieveOffers(getRetrieveOffersInterest.length + getRetrieveOffersInterest.length)
        setPage(getPage + 3);
    }


    const funRenderProductInterest = () => {
        let render;
        if (getRetrieveOffersInterest.length < 1) {
            render =
                <>
                    <Col md={1} className="column-btns-product-center"></Col>
                    <Col md={10}>
                        {funRenderSpinner()}
                    </Col>
                    <Col md={1} className="column-btns-product-center"></Col>
                </>
        } else {
            render =
                <>
                    <Col md={1} className="column-btns-product-center">
                        {getLimitPage > 0 &&
                            <button className="btn-left-product btn-products-arrow d-none d-md-block" onClick={() => funButtonSlider(1)}>
                                <i className="fas fa-angle-left"></i>
                            </button>
                        }
                    </Col>
                    <Col md={10}>
                        <Row>
                            <Col md={10} xs={6}>
                                <h5 className="h5-title">TE PODRÍA INTERESAR</h5>
                            </Col>
                            <Col md={2} xs={6} className="align-inline-flex-content-getColumn text-right">
                                <button className="btn-lg btn-outline-primary rounded-pill btn-more d-md-none d-lg-none"
                                    onClick={() => funAddMoreProduct()}>Ver mas {getLoading && <Spinner size={'sm'} color="light" />}</button>
                            </Col>
                        </Row>
                        <HorizontalProductComponent products={getRetrieveOffersInterest} col={3} />
                    </Col>
                    <Col md={1} className="column-btns-product-center">
                        <button className="btn-rigth-product  btn-products-arrow d-none d-md-block" onClick={() => getLimitPage < getPage ? funButtonSlider(0) : funAddMoreProduct()} >
                            <i className={`fas ${(getLimitPage < getPage) ? 'fa-angle-right' : 'fa-plus'}`}></i>
                        </button>
                    </Col>
                </>
        }
        return render;
    }

    return (
        <>
            <Container fluid>
                <Row className="mt-5">
                    <Col md={12}>
                        <Row>
                            {funRenderProductInterest()}
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
        let container = document.querySelector(".container-sponsor"),
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
        setPage(getPage + 1);
    }

    return (
        <>
            <Container fluid>
                <Row className="mt-5">
                    <Col md={12}>
                        <Row>
                            <Col md={1} className="column-btns-product-center">
                                {getLimitPage > 0 &&
                                    <button className="btn-left-product btn-products-arrow" onClick={() => funButtonSlider(1)}>
                                        <i className="fas fa-angle-left"></i>
                                    </button>
                                }
                            </Col>
                            <Col md={10}>
                                <Row>
                                    <Col md={10} xs={6}>
                                        <h5 className="h5-title">MARCAS PATROCINADORAS</h5>
                                    </Col>
                                    <Col md={2} xs={6} className="align-inline-flex-content-getColumn text-right">
                                        <button className="btn-lg btn-outline-primary rounded-pill btn-more" onClick={() => funAddMoreProduct()}>Ver mas</button>
                                    </Col>
                                </Row>
                                <HorizontalBrandsComponent listCount={12} col={2} />
                            </Col>
                            <Col md={1} className="column-btns-product-center">
                                {
                                    getLimitPage < getPage &&
                                    <button className="btn-rigth-product  btn-products-arrow" onClick={() => funButtonSlider(0)} >
                                        <i className="fas fa-angle-right"></i>
                                    </button>
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


