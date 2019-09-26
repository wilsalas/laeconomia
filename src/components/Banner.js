import React from 'react';
import {
    Container, Col, Row
} from 'reactstrap';

export default function Banner() {
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col md={12} className="d-flex justify-content-center">
                        <img src="https://www.droguerialaeconomia.com/economia/site/img/Banner-web-favoritosTQ30jun.png" alt="banner" width="100%" height="200px" />
                    </Col>
                </Row>
            </Container>
        </>
    )
};