import React, { useState, useEffect } from 'react';
import {
    Container, Col, Row
} from 'reactstrap';
import { TabContentComponent } from './ContentProducts';
import { API, URL } from '../managers/api/ApiManager';
import { funRenderSpinner } from '../managers/helpers/HelperManager';
import { useGlobal } from '../managers/store/Context';
import { HorizontalCategoriesComponent } from './Product';



// const OrderCategoryComponent = () => {
//     return (
//         <>
//             <ul className="mt-2 order_category_list">
//                 {new Array(3).fill().map((value, i) => {
//                     return (
//                         <li key={i}>  <a href="/"> <i className="icon-g-80" /> Cuidado de la piel</a> </li>
//                     );
//                 })}
//             </ul>
//             <a href="/">Borrar todo</a>
//         </>
//     );
// }



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
            setCategories(listNewCategories);
        }
    }


    const funProductForSubCategories = async (e, subCategorie) => {
        e.preventDefault();
        dispatch({ type: "GET_PRODUCT" })
        let resSubCategories = await API.GET.RetrieveProductsFromSubcategory(localStorage.getItem("city"), subCategorie);
        if (Array.isArray(resSubCategories.message)) dispatch({ type: "GET_PRODUCT", products: resSubCategories.message, subCategorie , typeSearch: "productSubCategoryCode"})
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

    const [getCategories, setCategories] = useState([]);
    const [getTranslate, setTranslate] = useState(0);
    const [getVelocity] = useState(976);
    const [getPage, setPage] = useState(1);
    const [getLimitPage, setLimitPage] = useState(0);

    useEffect(() => {
        RetrieveCategories();
    }, [])

    const RetrieveCategories = async () => {
        let res = await API.GET.RetrieveCategories(localStorage.getItem("city"));
        if (Array.isArray(res.message)) {
            let listCategories = [], listNewCategories = [];
            res.message.forEach(categories => {
                listCategories.push({ id: categories.Categoria, name: categories.Descripcion, icono: `${URL.HOST}/economia/site/img/categorias/v2/${categories.Categoria}.png`, subCategories: [] });
                listNewCategories = Array.from(new Set(listCategories.map(a => a.id))).map(id => listCategories.find(a => a.id === id));
                listNewCategories.forEach(element => {
                    if (element.id === categories.Categoria) {
                        element.subCategories.push({ subName: categories.Sub_descripcion, subID: categories.SubCategoria })
                    }
                });
            })
            setCategories(listNewCategories);
            setPage(listNewCategories.length / 7);
        }
    }

    const funButtonSlider = direction => {
        let container = document.querySelector(".container-categories"),
            translate = getTranslate,
            limitPage = getLimitPage;

        if (direction > 0) {
            limitPage--;
            translate += getVelocity

        } else {
            limitPage++;
            translate -= getVelocity
        }
        setTranslate(translate);
        setLimitPage(limitPage)
        container.style.transform = `translateX(${translate}px)`;
    }

    const funRenderCategory = () => {
        let render;
        if (getCategories.length < 1) {
            render =
                <>
                    <Col md={1} className="column-btns-product-center"></Col>
                    <Col md={10}>
                        {funRenderSpinner()}
                    </Col>
                    <Col md={1} className="column-btns-product-center"></Col>
                </>
        } else {
            render =
                <>
                    <Col md={1} className="column-btns-product-center">
                        {getLimitPage > 0 &&
                            <button className="btn-left-product btn-products-arrow d-none d-md-block " onClick={() => funButtonSlider(1)}>
                                <i className="fas fa-angle-left"></i>
                            </button>
                        }
                    </Col>
                    <Col md={10}>
                        <HorizontalCategoriesComponent products={getCategories} />
                    </Col>
                    <Col md={1} className="column-btns-product-center">
                        {
                            getLimitPage < getPage &&
                            <button className="btn-rigth-product  btn-products-arrow d-none d-md-block " onClick={() => funButtonSlider(0)} >
                                <i className="fas fa-angle-right"></i>
                            </button>
                        }
                    </Col>
                </>
        }
        return render;
    }


    return (
        <>
            <Container>

                <Row className="mt-4">
                    <Col md={12}>
                        <Row>
                            {funRenderCategory()}
                        </Row>
                    </Col>
                </Row>
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
                    <TabContentComponent col maxwidth {...props} />
                </Col>
            </Row>
        </Container>
    );
}



export {
    CategoryComponent,
    GroupCategoryComponent
}