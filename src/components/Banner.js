import React, { useState, useEffect } from 'react';
import {
    Container, Col, Row
} from 'reactstrap';
import { PANEL_API, URL } from '../managers/api/ApiManager';


export default function Banner() {
    
    const [getRetrieveAdsBanner, setRetrieveAdsBanner] = useState([]);
    const url = URL.S3;


    useEffect(() => {
        funRetrieveAdsBanner()
    }, [])

    const funRetrieveAdsBanner = async () => {
        let resBanners = await PANEL_API.GET.RetrieveBanners(5);
        if (resBanners) {
            setRetrieveAdsBanner(resBanners.message.data[0].photo);
        }
    }

    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col md={12} className="d-flex justify-content-center">
                        <img src={`${url+getRetrieveAdsBanner}`} alt="banner" width="100%" height="200px" />
                    </Col>
                </Row>
            </Container>
        </>
    )
};