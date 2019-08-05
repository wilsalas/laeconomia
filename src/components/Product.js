import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, Row, Col } from 'reactstrap';
import { FormatCOPNumber } from '../managers/helpers/HelperManager';
import { Redirect } from 'react-router-dom';


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

const HorizontalProductComponent = props => (
    // <div className="grid-container">
    //     <main className="grid-item main">
    //         <div className="items">
    //             {new Array(props.listCount).fill().map((value, i) => {
    //                 return (
    //                     <div className="item col-md-3 " key={i}>
    //                         <Product {...props} />
    //                     </div>
    //                 );
    //             })}
    //         </div>
    //     </main>
    // </div>
    <div className="outer" id="content">
        <div className="container-inner container-interest">
            {/* <Row className="justify-content-center" > */}
            {props.products.map((value, i) => {
                return (
                    <Col key={i} md={props.col} className="mt-3 mb-3 " >
                        <Product {...value} />
                    </Col>
                );
            })}
            {/* </Row> */}
        </div>
    </div>
);


const HorizontalBrandsComponent = props => (
    // <div className="grid-container">
    //     <main className="grid-item main">
    //         <div className="items">
    //             {new Array(props.listCount).fill().map((value, i) => {
    //                 return (
    //                     <div className="item col-md-3" key={i}>
    //                         <div style={{
    //                             width: '180px',
    //                             height: '180px',
    //                             objectFit: 'contain',
    //                             background: 'rgb(73, 159, 73)',
    //                             borderRadius: '24px'
    //                         }}>
    //                         </div>
    //                     </div>
    //                 );
    //             })}
    //         </div>
    //     </main>
    // </div>
    <div className="outer" id="content">
        <div className="container-inner container-sponsor">
            {/* <Row className="justify-content-center" > */}
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
            {/* </Row> */}
        </div>
    </div>
);

const Product = props => {
    // console.log(props);

    return (
        <Card className="text-center card-tab-products" onClick={() => window.location.href = `/detail?prod=${btoa(props)}`}>
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