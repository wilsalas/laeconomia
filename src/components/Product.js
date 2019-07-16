import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, Row, Col } from 'reactstrap';



const VerticalProductComponent = props => (
    <Row className="justify-content-center" >
        {new Array(props.listCount).fill().map((value, i) => {
            return (
                <Col key={i} md={props.col} className="mt-3 mb-3 " >
                    <Product {...props} />
                </Col>
            );
        })}
    </Row>
);

const HorizontalProductComponent = props => (
    <div className="grid-container">
        <main className="grid-item main">
            <div className="items">
                {new Array(props.listCount).fill().map((value, i) => {
                    return (
                        <div className="item " key={i}>
                            <Product {...props} />
                        </div>
                    );
                })}
            </div>
        </main>
    </div>
);


const HorizontalBrandsComponent = props => (
    <div className="grid-container">
        <main className="grid-item main">
            <div className="items">
                {new Array(props.listCount).fill().map((value, i) => {
                    return (
                        <div className="item " key={i}>
                            <div style={{
                                width: '180px',
                                height: '180px',
                                objectFit: 'contain',
                                background: 'rgb(73, 159, 73)',
                                borderRadius: '24px'
                            }}>
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    </div>
);

const Product = props => {
    return (
        <Card className="text-center card-tab-products" onClick={()=>  window.location.href= "/detail" }>
            <div className="div-percent">{Math.floor((Math.random() * 100) + 1)}%</div>
            <CardImg top src="https://www.droguerialaeconomia.com/economia/site/img/086541.png" alt="Card image cap" />
            <CardBody className="div-cardbody">
                <CardTitle >$999.990</CardTitle>
                <CardSubtitle>$999.990</CardSubtitle>
                <CardText>Coboral z polvo vainilla x 400 gramos</CardText>
                <CardText>Mililitro a $999.999</CardText>
                <CardText>CUIDADO DE LA PIEL</CardText>
                <button className="btn-lg btn-outline-primary rounded-pill" onClick={(e) => console.log(e.target)}>Agregar</button>
            </CardBody>
        </Card>
    );
}


export {
    VerticalProductComponent,
    HorizontalProductComponent,
    HorizontalBrandsComponent
};