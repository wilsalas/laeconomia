import React from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import '../styles/styles.css';

export default class TabsComponent extends React.Component {
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
                <Row>
                    <Col md={9} xs={12}>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                >
                                    INICIO
                        </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                >
                                    DROGUERÍA VIRTUAL
                        </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '3' })}
                                    onClick={() => { this.toggle('3'); }}
                                >
                                    CUIDADO DEL BEBÉ
                        </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '4' })}
                                    onClick={() => { this.toggle('4'); }}
                                >
                                    DICCIONARIO
                        </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '5' })}
                                    onClick={() => { this.toggle('5'); }}
                                >
                                    SUCURSALES
                        </NavLink>
                            </NavItem>
                            <NavItem>

                                <Button outline color="danger" className="btn-club-vida">CLUB VIDA SANA</Button>
                            </NavItem>
                        </Nav>
                        {/* <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <CarouselComponent/>
                            </TabPane>
                            <TabPane tabId="2">
                                2
                            </TabPane>
                            <TabPane tabId="3">
                                3
                            </TabPane>
                            <TabPane tabId="4">
                                4
                            </TabPane>
                            <TabPane tabId="5">
                                5
                            </TabPane>
                        </TabContent> */}
                    </Col>
                </Row>

            </div >
        );
    }
}