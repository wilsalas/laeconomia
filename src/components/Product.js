import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, Row, Col } from 'reactstrap';
import { FormatCOPNumber, funRenderSpinner, FormatPointsSupensive } from '../managers/helpers/HelperManager';
import { useGlobal } from '../managers/store/Context';

const VerticalProductComponent = props => {

    if (props.products.length < 1) {
        return funRenderSpinner();
    }

    return (
        <Row className="justify-content-center" >
            {props.products.map((value, i) => {
                return (
                    <Col key={i} md={props.col} className={`mt-2 mb-2 v-prod${props.maxwidth}`} >
                        <Product {...value} />
                    </Col>
                );
            })}
        </Row>
    )
};



const HorizontalProductComponent = props => {
    
    if (props.products.length < 1) {
        return funRenderSpinner();
    }

    return (
        <div className="outer" id="content">
            <div className="container-inner container-interest">
                {props.products.map((value, i) => {
                    return (
                        <Col key={i} md={props.col} className="mt-2 mb-2 h-prod" >
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

    const [, dispatch] = useGlobal();
    let URL_IMAGE = `https://www.droguerialaeconomia.com/economia/site/img/`;


    const funSaveDetailProduct = () => {
        localStorage.setItem("dproduct", btoa(JSON.stringify(props)));
        window.location.href = "/detail"
    }

    const funAddCart = (product, countProduct = 0) => {
        let products = JSON.parse(localStorage.getItem("cart"));
        if (products) {
            let isAdd = false;
            products.forEach((item, i) => {
                if (item.codigo === product.codigo) {
                    item.countProduct += countProduct
                    isAdd = true;
                }
            })
            if (!isAdd) {
                products.push({ ...product, countProduct });
            }
        } else {
            products = [{ ...product, countProduct }];
        }
        localStorage.setItem("cart", JSON.stringify(products));
        funCountProduct(products);
    }

    const funCountProduct = products => {
        let totalProduct = 0;
        products.forEach(item => totalProduct += item.countProduct);
        dispatch({ type: 'COUNT_TOTAL_PRODUCT', totalProduct })
    }

    return props.codigo ? (
        <Card className="text-center card-tab-products" >
            {props.Porcentaje > 0 && <div className="div-percent">-{props.Porcentaje}%</div>}
            <CardImg top style={{ cursor: 'pointer' }} src={`${URL_IMAGE}${props.codigo}.png`}
                onError={(e) => { e.target.src = `${URL_IMAGE}no-disponible.png` }}
                alt={`Card image cap ${props.codigo}`} onClick={() => funSaveDetailProduct()} />
            <CardBody className="div-cardbody">
                <CardTitle >{FormatCOPNumber(props.Ahora)}</CardTitle>
                <CardSubtitle>{FormatCOPNumber(props.Antes)}</CardSubtitle>
                <CardText title={props.descripcion}>{FormatPointsSupensive(props.descripcion)}</CardText>
                <CardText>Mililitro a $999.999</CardText>
                <CardText>{props.Categoria}</CardText>
                <button className="btn-lg btn-outline-primary rounded-pill" onClick={() => funAddCart(props, 1)}>Agregar</button>
            </CardBody>
        </Card>
    ) : null
}


export {
    VerticalProductComponent,
    HorizontalProductComponent,
    HorizontalBrandsComponent
};