import React, { useState, useEffect } from 'react';
import {
    Container, Col, Row
} from 'reactstrap';
import { TabContentComponent } from './ContentProducts';
import { API } from '../managers/api/ApiManager';

const OrderCategoryComponent = () => {
    return (
        <>
            <ul className="mt-2 order_category_list">
                {new Array(20).fill().map((value, i) => {
                    return (
                        <li key={i}>  <a href="/"> <i className="icon-g-80" /> Cuidado de la piel</a> </li>
                    );
                })}
            </ul>
            <a href="/">Borrar todo</a>
        </>
    );
}


const ListCategoryComponent = props => {
    return (
        <>
            <div className="mt-3">
                {props.retrieveCategories.map((value, i) => {
                    return (
                        <div key={i} className="panel-group " id={"accordion" + i}>
                            <div className="panel panel-default">
                                <div className="panel-heading ">
                                    <h4 className="panel-title ">
                                        <a data-toggle="collapse" data-parent={"#accordion" + i} href={"#collapse" + i} > {value}</a>
                                    </h4>
                                </div>
                                <div id={"collapse" + i} className="panel-collapse collapse in">
                                    <ul className="list_category">
                                        {new Array(20).fill().map((value, i) => {
                                            return (
                                                <li key={i}>item {i}</li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

const CategoryComponent = () => {
    return (
        <>
            <Container>
                <div className="row tt-layout-promo-box mt-3">
                    <div className="col-sm-12 col-md-6">
                        <div className="row">
                            <div className="col-sm-6">
                                <a href="listing-left-column.html" className="tt-promo-box tt-one-child hover-type-2">
                                    <img src="/images/loader.svg" data-src="/images/promo/index-promo-img-01.jpg" alt="img1" />
                                    <div className="tt-description">
                                        <div className="tt-description-wrapper">
                                            <div className="tt-background" />
                                            <div className="tt-title-small">SALE</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="listing-left-column.html" className="tt-promo-box tt-one-child hover-type-2">
                                    <img src="/images/loader.svg" data-src="/images/promo/index-promo-img-02.jpg" alt="img2" />
                                    <div className="tt-description">
                                        <div className="tt-description-wrapper">
                                            <div className="tt-background" />
                                            <div className="tt-title-small">NEW</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6">
                                <a href="listing-left-column.html" className="tt-promo-box tt-one-child hover-type-2">
                                    <img src="/images/loader.svg" data-src="/images/promo/index-promo-img-03.jpg" alt="img3" />
                                    <div className="tt-description">
                                        <div className="tt-description-wrapper">
                                            <div className="tt-background" />
                                            <div className="tt-title-small">WOMEN</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="row">
                            <div className="col-sm-6">
                                <a href="listing-left-column.html" className="tt-promo-box tt-one-child hover-type-2">
                                    <img src="/images/loader.svg" data-src="/images/promo/index-promo-img-04.jpg" alt="img4" />
                                    <div className="tt-description">
                                        <div className="tt-description-wrapper">
                                            <div className="tt-background" />
                                            <div className="tt-title-small">MEN</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6">
                                <a href="listing-left-column.html" className="tt-promo-box tt-one-child hover-type-2">
                                    <img src="/images/loader.svg" data-src="/images/promo/index-promo-img-05.jpg" alt="img5" />
                                    <div className="tt-description">
                                        <div className="tt-description-wrapper">
                                            <div className="tt-background" />
                                            <div className="tt-title-small">ACCESSORIES</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-12">
                                <a href="listing-left-column.html" className="tt-promo-box tt-one-child">
                                    <img src="/images/loader.svg" data-src="/images/promo/index-promo-img-06.jpg" alt="img6" />
                                    <div className="tt-description">
                                        <div className="tt-description-wrapper">
                                            <div className="tt-background" />
                                            <div className="tt-title-small">SHOES</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}


const GroupCategoryComponent = () => {

    const [retrieveCategories, setRetrieveCategories] = useState([]);

    useEffect(() => {
        RetrieveCategories();
    })

    const RetrieveCategories = async () => {
        let res = await API.GET.RetrieveCategories(localStorage.getItem("city"));
        if (Array.isArray(res.message)) {
            let listCategories = [];
            for (const categories of res.message) {
                listCategories.push(categories.Descripcion)
            }
            setRetrieveCategories(listCategories.filter((v, i) => listCategories.indexOf(v) === i));
        }
    }

    return (
        <Container>
            <Row>
                <Col md={3} className="mt-4">
                    <Row>
                        <Col md={12}>
                            <button className="collapsible">ORDENAR POR</button>
                            <div className="content_active_collapsible mb-4">
                                <OrderCategoryComponent />
                            </div>
                        </Col>
                        <Col md={12}>
                            <button className="collapsible">CATEGORÍAS</button>
                            <div className="content_active_collapsible">
                                <ListCategoryComponent retrieveCategories={retrieveCategories} />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={9}>
                    <TabContentComponent col={4} />
                </Col>
            </Row>
        </Container>
    );
}



export {
    CategoryComponent,
    OrderCategoryComponent,
    ListCategoryComponent,
    GroupCategoryComponent
}