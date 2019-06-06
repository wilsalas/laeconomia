import React from 'react';
import {
    Container, Col, Row
} from 'reactstrap';

export default () => (
    <Container>
        <Row className="mt-3">
            <Col  md={12} style={{
                height:'20%'
                // background: '#1babd9',
            }} className="d-flex justify-content-center">
                <img src="https://www.droguerialaeconomia.com/economia/site/img/Banner-web-favoritosTQ30jun.png" alt="banner" width="100%" height="20%" />
            </Col>
        </Row>
    </Container>
);