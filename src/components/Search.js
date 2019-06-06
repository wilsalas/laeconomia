import React, { Component } from 'react';
import {
    Container, Col, Form, Row, InputGroup,
    Input, InputGroupAddon, Button
} from 'reactstrap';

export default class SearchComponent extends Component {
    render() {
        return (
            <Container >
                <Row className="mt-4 mb-1" >
                    <Col md={2} xs={12}>
                        <img alt="la economia" src="/assets/logo_economia.png" className="logo-header" />
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
            </Container>
        );
    }
}
