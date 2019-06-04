import React from 'react';
import {
    Container, Col, Row
} from 'reactstrap';
import Product from './Product';

export default () => {
    return (
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
                <Product listCount={12} col={3} />
                </Col>
            </Row>
        </Container>
    );
}