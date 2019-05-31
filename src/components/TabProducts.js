import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardBody, CardTitle, CardSubtitle, CardImg, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class TabProductsComponent extends Component {

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
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Tab1
                </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Moar Tabs
                </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row >
                            {new Array(8).fill().map((value, i) => {
                                return (
                                    <Col key={i} md={3} className="mt-2">

                                        <Card style={{ display: 'flex', justifyContent: 'center', boxShadow: '2px 2px 3px 0 rgba(0, 0, 0, 0.16)' }}>

                                            <CardImg top src="https://www.droguerialaeconomia.com/economia/site/img/105226.png" alt="Card image cap" />

                                            <CardBody className="text-center">
                                                <CardTitle style={{
                                                    fontWeight: 600,
                                                    fontSize: 17,
                                                }}>$999.990</CardTitle>
                                                <CardSubtitle style={{
                                                    fontWeight: 600,
                                                    fontSize: 13,
                                                    color: '#b2c3c3',
                                                    textDecoration: 'line-through'
                                                }}>$999.990</CardSubtitle>
                                                <CardText>Altex lámina antibrillo x 50 unidades</CardText>
                                                <Button size="lg" block className="btn btn-outline-primary rounded-pill">Agregar</Button>
                                            </CardBody>
                                        </Card>

                                    </Col>
                                )
                            })}
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <h4>Tab 1 Contents</h4>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}