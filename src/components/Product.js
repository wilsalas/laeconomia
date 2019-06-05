import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, Row, Col } from 'reactstrap';



const ContentVertical = props => (
    <Row className="justify-content-center" >
        {new Array(props.listCount).fill().map((value, i) => {
            return (
                <Col key={i} md={props.col} className="mt-3 mb-3 " >
                    <ProductComponent {...props} />
                </Col>
            );
        })}
    </Row>
);

const ContentHorizontal = props => (
    <div className="grid-container">
        <main className="grid-item main">
            <div className="items">
                {new Array(props.listCount).fill().map((value, i) => {
                    return (
                        <div className="item " key={i}>
                            <ProductComponent {...props} />
                        </div>
                    );
                })}
            </div>
        </main>
    </div>
);


const ProductComponent = props => {
    return (
        <Card className="text-center card-tab-products">
            <div className="div-percent">{Math.floor((Math.random() * 100) + 1)}%</div>
            <CardImg top src="https://www.droguerialaeconomia.com/economia/site/img/086541.png" alt="Card image cap" />
            <CardBody className="div-cardbody">
                <CardTitle >$999.990</CardTitle>
                <CardSubtitle>$999.990</CardSubtitle>
                <CardText>coboral z polvo vainilla x 400 gramos</CardText>
                <CardText>CUIDADO DE LA PIEL</CardText>
                <button className="btn-lg btn-outline-primary rounded-pill" onClick={(e) => console.log(e.target)}>Agregar</button>
            </CardBody>
        </Card>
    );
}


export default props => props.horizontal ? <ContentHorizontal {...props} /> : <ContentVertical {...props} />;