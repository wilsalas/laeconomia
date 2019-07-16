import classnames from 'classnames';
import React, { Component, Fragment } from 'react';
import { Container, Col, TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import { VerticalProductComponent, HorizontalProductComponent, HorizontalBrandsComponent } from './Product';

class TabContentComponent extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            col: this.props.col ? this.props.col : 3
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <Fragment>
                <div style={{ display: 'grid', overflow: 'scroll' }} className="mt-4">
                    <Nav tabs className="justify-content-center">
                        <NavItem>
                            <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
                                OFERTAS DEL DÍA
                        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
                                NUEVOS PRODUCTOS
                        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>
                                MÁS COMPRADOS
                        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: this.state.activeTab === '4' })} onClick={() => { this.toggle('4'); }}>
                                MÁS PEDIDOS
                        </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab} className="tab-content-scroll">
                        <TabPane tabId="1">
                            <VerticalProductComponent listCount={8} col={this.state.col} />
                        </TabPane>
                        <TabPane tabId="2">
                            <VerticalProductComponent listCount={8} col={this.state.col} />
                        </TabPane>
                        <TabPane tabId="3">
                            <VerticalProductComponent listCount={8} col={this.state.col} />
                        </TabPane>
                        <TabPane tabId="4">
                            <VerticalProductComponent listCount={8} col={this.state.col} />
                        </TabPane>
                    </TabContent>
                    <button className="btn-lg btn-outline-primary rounded-pill mx-auto" style={{ margin: 20 }}>Cargar más</button>
                </div>
            </Fragment>
        );
    }
}


class InterestContentComponent extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="mt-4">
                        <Col md={10}>
                            <h5 className="h5-title">TE PODRÍA INTERESAR</h5>
                        </Col>
                        <Col md={2} className="align-inline-flex-content-column">
                            <button className="mr-2 btn-left-product btn-products-arrow">{'<'}</button>
                            <button className="btn-rigth-product  btn-products-arrow">{'>'}</button>
                        </Col>
                        <Col >
                            <HorizontalProductComponent listCount={12} col={3} />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

class SponsorShipsComponent extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="mt-4">
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

