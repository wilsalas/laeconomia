import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Product from './Product';

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
            <div style={{ display: 'grid' , overflow:'scroll'}} className="mt-4">
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
                        <Product listCount={8} col={3} />
                    </TabPane>
                    <TabPane tabId="2">
                        <Product listCount={8} col={3} />
                    </TabPane>
                    <TabPane tabId="3">
                        <Product listCount={8} col={3} />
                    </TabPane>
                    <TabPane tabId="4">
                        <Product listCount={8} col={3} />
                    </TabPane>
                </TabContent>
                <button className="btn-lg btn-outline-primary rounded-pill mx-auto" style={{ margin: 20 }}>Cargar más</button>
            </div>
        );
    }
}