import classnames from 'classnames';
import React, { Component, Fragment } from 'react';
import { Container, Col, TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import { VerticalProductComponent, HorizontalProductComponent } from './Product';

class TabContentComponent extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
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
                            <VerticalProductComponent listCount={8} col={3} />
                        </TabPane>
                        <TabPane tabId="2">
                            <VerticalProductComponent listCount={8} col={3} />
                        </TabPane>
                        <TabPane tabId="3">
                            <VerticalProductComponent listCount={8} col={3} />
                        </TabPane>
                        <TabPane tabId="4">
                            <VerticalProductComponent listCount={8} col={3} />
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
                            <h5 style={{ fontWeight: 600, color: '#657272' }}>TE PODRÍA INTERESAR</h5>
                        </Col>
                        <Col md={2} style={{
                            justifyContent: 'flex-end',
                            display: 'inline-flex'
                        }}>
                            <button
                                className="mr-2"
                                style={{
                                    width: '37.3px',
                                    height: '35px',
                                    borderRadius: '10.7px',
                                    backgroundColor: '#f2f2f2',
                                    color: '#657272',
                                    border: 'none',
                                    fontSize: 23,
                                    fontWeight: 700
                                }}
                            >{'<'}</button>
                            <button
                                style={{
                                    width: '37.3px',
                                    height: '35px',
                                    borderRadius: '10.7px',
                                    backgroundColor: '#657272',
                                    color: '#f2f2f2',
                                    border: 'none',
                                    fontSize: 23,
                                    fontWeight: 700
                                }}
                            >{'>'}</button>
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



export {
    TabContentComponent,
    InterestContentComponent
}

