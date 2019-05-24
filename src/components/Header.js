import React, { Component } from 'react';
import {
    Col, Form, Row, InputGroup,
    Input, InputGroupAddon, Button
} from 'reactstrap';
import '../styles/styles.css';

export default class HeaderComponent extends Component {
    render() {
        return (
            <Row className="mt-5 mb-2">
                <Col md={2} xs={12}>
                    <img alt="la economia" src="/assets/business_logo.jpg" className="logo-header" />
                </Col>
                <Col md={10} xs={12}>
                    <Form>
                        <InputGroup>
                            <Input
                                placeholder={'¿Qué está buscando?'}
                                className="header-input" />
                            <InputGroupAddon addonType="append">
                                <Button className="btn-search-header">
                                    <i className="fas fa-search"></i>
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
        );
    }
}
