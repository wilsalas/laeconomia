import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, Row, Col } from 'reactstrap';
import { FormatCOPNumber } from '../managers/helpers/HelperManager';

const VerticalProductComponent = props => {
    return (
        <Row className="justify-content-center" >
            {props.products.map((value, i) => {
                return (
                    <Col key={i} md={props.col} className="mt-3 mb-3 " >
                        <Product {...value} />
                    </Col>
                );
            })}
        </Row>
    )
};

const HorizontalProductComponent = props => {
    return (
        <div className="outer" id="content">
            <div className="container-inner container-interest">
                {props.products.map((value, i) => {
                    return (
                        <Col key={i} md={props.col} className="mt-3 mb-3 " >
                            <Product {...value} />
                        </Col>
                    );
                })}
            </div>
        </div>
    )
};


const HorizontalBrandsComponent = props => {
    return (
        <div className="outer" id="content">
            <div className="container-inner container-sponsor">
                {new Array(props.listCount).fill().map((value, i) => {
                    return (
                        <Col key={i} md={props.col} className="mt-3 mb-3 " >
                            <div style={{
                                width: '180px',
                                height: '180px',
                                objectFit: 'contain',
                                background: 'rgb(73, 159, 73)',
                                borderRadius: '24px'
                            }}> </div>
                        </Col>
                    );
                })}
            </div>
        </div>
    )
};

const Product = props => {
    return (
        <Card className="text-center card-tab-products" onClick={() => window.location.href = `/detail?prod=${btoa(props.codigo)}`}>
            <div className="div-percent">{props.Porcentaje}%</div>
            <CardImg top src={`https://www.droguerialaeconomia.com/economia/site/img/${props.codigo}.png`} alt={`Card image cap ${props.codigo}`} />
            <CardBody className="div-cardbody">
                <CardTitle >{FormatCOPNumber(props.Ahora)}</CardTitle>
                <CardSubtitle>{FormatCOPNumber(props.Antes)}</CardSubtitle>
                <CardText>{props.descripcion}</CardText>
                <CardText>Mililitro a $999.999</CardText>
                <CardText>{props.Categoria}</CardText>
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