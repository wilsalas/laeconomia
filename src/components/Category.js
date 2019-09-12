import React, { useState, useEffect } from 'react';
import {
    Container, Col, Row
} from 'reactstrap';
import { TabContentComponent } from './ContentProducts';
import { API } from '../managers/api/ApiManager';
import { funRenderSpinner } from '../managers/helpers/HelperManager';
import { useGlobal } from '../managers/store/Context';



const OrderCategoryComponent = () => {
    return (
        <>
            <ul className="mt-2 order_category_list">
                {new Array(3).fill().map((value, i) => {
                    return (
                        <li key={i}>  <a href="/"> <i className="icon-g-80" /> Cuidado de la piel</a> </li>
                    );
                })}
            </ul>
            <a href="/">Borrar todo</a>
        </>
    );
}



const ListCategoryComponent = () => {

    const [getCategories, setCategories] = useState([]);
    const [, dispatch] = useGlobal();

    useEffect(() => {
        RetrieveCategories();
    }, [])

    const RetrieveCategories = async () => {
        let res = await API.GET.RetrieveCategories(localStorage.getItem("city"));
        if (Array.isArray(res.message)) {
            let listCategories = [], listNewCategories = [];
            res.message.forEach(categories => {
                listCategories.push({ id: categories.Categoria, name: categories.Descripcion, subCategories: [] });
                listNewCategories = Array.from(new Set(listCategories.map(a => a.id))).map(id => listCategories.find(a => a.id === id));
                listNewCategories.forEach(element => {
                    if (element.id === categories.Categoria) {
                        element.subCategories.push({ subName: categories.Sub_descripcion, subID: categories.SubCategoria })
                    }
                });
            })
            // console.log(listNewCategories);
            setCategories(listNewCategories);
        }
    }


    const funProductForSubCategories = async (e, subCategorie) => {
        e.preventDefault();
        dispatch({ type: "GET_PRODUCT" })
        let resSubCategories = await API.GET.RetrieveProductsFromSubcategory(localStorage.getItem("city"), subCategorie);
        if (Array.isArray(resSubCategories.message)) dispatch({ type: "GET_PRODUCT", products: resSubCategories.message , subCategorie})
    }

    return (
        <>
            <div className="mt-3">
                {getCategories.length < 1 && funRenderSpinner("sm")}
                {getCategories.length > 0 && getCategories.map((categories, i) => {
                    return (
                        <div key={i} className="panel-group " id={"accordion" + i}>
                            <div className="panel panel-default">
                                <div className="panel-heading ">
                                    <h4 className="panel-title ">
                                        <a data-toggle="collapse" data-parent={"#accordion" + i} href={"#collapse" + i} > {categories.name}</a>
                                    </h4>
                                </div>
                                <div id={"collapse" + i} className="panel-collapse collapse in">
                                    <ul className="list_category">
                                        {categories.subCategories.map((item, i) => {
                                            return (
                                                <li key={i}><a href="/" onClick={e => funProductForSubCategories(e, item.subID)}>{item.subName}</a></li>
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


const GroupCategoryComponent = props => {

    return (
        <Container>
            <Row>
                <Col md={3} className="mt-4">
                    <Row>
                        {/* <Col md={12}>
                            <button className="collapsible">ORDENAR POR</button>
                            <div className="content_active_collapsible mb-4">
                                <OrderCategoryComponent />
                            </div>
                        </Col> */}
                        <Col md={12}>
                            <button className="collapsible">CATEGORÍAS</button>
                            <div className="content_active_collapsible">
                                <ListCategoryComponent />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={9}>
                    <TabContentComponent col maxwidth {...props}/>
                </Col>
            </Row>
        </Container>
    );
}



export {
    CategoryComponent,
    GroupCategoryComponent
}