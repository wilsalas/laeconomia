import classnames from 'classnames';
import React, { Component, Fragment } from 'react';
import { Container, Col, TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import { VerticalProductComponent, HorizontalProductComponent, HorizontalBrandsComponent } from './Product';
import { API } from '../managers/api/ApiManager';

class TabContentComponent extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '0',
            col: this.props.col ? this.props.col : 3,
            retrieveOffers: [],
            retrieveTopOffers: []
        };
    }


    async componentDidMount() {
        this.retrieveOffers();
        this.retrieveTopOffers()

    }

    retrieveOffers = async () => {
        let res = await API.GET.RetrieveOffers(localStorage.getItem("city"));
        if (Array.isArray(res.message)) this.setState({ retrieveOffers: res.message })
    }

    retrieveTopOffers = async () => {
        let res = await API.GET.RetrieveTopOffers(localStorage.getItem("city"));
        if (Array.isArray(res.message)) this.setState({ retrieveTopOffers: res.message })        
    }


    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }


    moreProducts = () => { }



    render() {
        return (
            <Fragment>
                <Container>
                    <div style={{ display: 'grid', overflow: 'scroll' }} className="mt-4">
                        <Nav tabs className="justify-content-center">
                            <NavItem>
                                <NavLink className={classnames({ active: this.state.activeTab === '0' })} onClick={() => { this.toggle('0'); }}>
                                    OFERTAS DEL DÍA
                        </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
                                    NUEVOS PRODUCTOS
                        </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
                                    MÁS COMPRADOS
                        </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>
                                    MÁS PEDIDOS
                        </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab} >
                            <TabPane tabId="0" >
                                <VerticalProductComponent products={this.state.retrieveOffers.slice(0, this.state.retrieveOffers.length)} col={this.state.col} />
                            </TabPane>
                            <TabPane tabId="1" >
                                <VerticalProductComponent products={this.state.retrieveTopOffers.slice(0, this.state.retrieveTopOffers.length)} col={this.state.col} />
                            </TabPane>
                            <TabPane tabId="2" >
                                <VerticalProductComponent products={this.state.retrieveOffers.slice(0, this.state.retrieveOffers.length)} col={this.state.col} />
                            </TabPane>
                            <TabPane tabId="3" >
                                <VerticalProductComponent products={this.state.retrieveOffers.slice(0, this.state.retrieveOffers.length)} col={this.state.col} />
                            </TabPane>
                        </TabContent>

                        <button className="btn-lg btn-outline-primary rounded-pill mx-auto" style={{ margin: 20 }} onClick={() => this.moreProducts()}>Cargar más</button>
                    </div>
                </Container>
            </Fragment>
        );
    }
}


class InterestContentComponent extends Component {

    constructor() {
        super();

        this.state = {
            translate: 0,
            velocity: 885,
            page: 24,
            limitPage: 0,
            retrieveProducts: []
        }

    }

    async componentDidMount() {
        let res = await API.GET.RetrieveOffers(localStorage.getItem("city"));
        if (Array.isArray(res.message)) this.setState({ retrieveProducts: res.message })
    }


    ButtonSlider = direction => {
        let container = document.querySelector(".container-interest"),
            translate = this.state.translate,
            limitPage = this.state.limitPage;

        if (direction > 0) {
            limitPage--;
            translate += this.state.velocity

        } else {
            limitPage++;
            translate -= this.state.velocity
        }
        this.setState({ translate, limitPage })
        container.style.transform = `translateX(${translate}px)`;
        console.log("lIMIT PAGE:", this.state.limitPage);

    }

    AddMoreProduct = () => {
        this.setState({
            page: this.state.page + 1
        })
        console.log("Uno mas agregado", this.state.page);
    }

    render() {
        return (
            <Fragment>
                <Container fluid>
                    <Row className="mt-4">
                        <Col md={12}>
                            <Row>
                                <Col md={1} className="column-btns-product-center">
                                    {this.state.limitPage > 0 &&
                                        <button className="btn-left-product btn-products-arrow" onClick={() => this.ButtonSlider(1)}>{'<'}</button>
                                    }
                                </Col>
                                <Col md={10}>
                                    <Row>
                                        <Col md={10}>
                                            <h5 className="h5-title">TE PODRÍA INTERESAR</h5>
                                        </Col>
                                        <Col md={2} className="align-inline-flex-content-column">
                                            <button className="btn-lg btn-outline-primary rounded-pill" onClick={this.AddMoreProduct.bind(this)}>Ver mas</button>
                                        </Col>
                                    </Row>
                                    <HorizontalProductComponent products={this.state.retrieveProducts.slice(0, this.state.retrieveProducts.length)} col={3} />
                                </Col>
                                <Col md={1} className="column-btns-product-center">
                                    {
                                        this.state.limitPage < this.state.page &&
                                        <button className="btn-rigth-product  btn-products-arrow" onClick={() => this.ButtonSlider(0)} >{'>'}</button>
                                    }
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

class SponsorShipsComponent extends Component {

    constructor() {
        super();

        this.state = {
            translate: 0,
            velocity: 1185,
            page: 1,
            limitPage: 0
        }


    }

    ButtonSlider = direction => {
        let container = document.querySelector(".container-sponsor"),
            translate = this.state.translate,
            limitPage = this.state.limitPage;

        if (direction > 0) {
            limitPage--;
            translate += this.state.velocity

        } else {
            limitPage++;
            translate -= this.state.velocity
        }
        this.setState({ translate, limitPage })
        container.style.transform = `translateX(${translate}px)`;
        console.log("lIMIT PAGE:", this.state.limitPage);

    }

    AddMoreProduct = () => {
        this.setState({
            page: this.state.page + 1
        })
        console.log("Uno mas agregado", this.state.page);
    }

    render() {
        return (
            <Fragment>
                <Container fluid>
                    {/* <Row className="mt-4">
                        <Col md={10}>
                            <h5 className="h5-title">MARCAS PATROCINADORAS</h5>
                        </Col>
                        <Col md={2} className="align-inline-flex-content-column">
                            <button className="mr-2 btn-left-product btn-products-arrow">{'<'}</button>
                            <button className="btn-rigth-product  btn-products-arrow">{'>'}</button>
                        </Col>
                        <Col >
                            <HorizontalBrandsComponent listCount={12} col={3} />
                        </Col>
                    </Row> */}
                    <Row className="mt-4">
                        <Col md={12}>
                            <Row>
                                <Col md={1} className="column-btns-product-center">
                                    {this.state.limitPage > 0 &&
                                        <button className="btn-left-product btn-products-arrow" onClick={() => this.ButtonSlider(1)}>{'<'}</button>
                                    }
                                </Col>
                                <Col md={10}>
                                    <Row>
                                        <Col md={10}>
                                            <h5 className="h5-title">MARCAS PATROCINADORAS</h5>
                                        </Col>
                                        <Col md={2} className="align-inline-flex-content-column">
                                            <button className="btn-lg btn-outline-primary rounded-pill" onClick={this.AddMoreProduct.bind(this)}>Ver mas</button>
                                        </Col>
                                    </Row>
                                    <HorizontalBrandsComponent listCount={12} col={2} />
                                </Col>
                                <Col md={1} className="column-btns-product-center">
                                    {
                                        this.state.limitPage < this.state.page &&
                                        <button className="btn-rigth-product  btn-products-arrow" onClick={() => this.ButtonSlider(0)} >{'>'}</button>
                                    }
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}



export {
    TabContentComponent,
    InterestContentComponent,
    SponsorShipsComponent
}

