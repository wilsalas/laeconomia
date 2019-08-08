import React from 'react';
import { SearchHeaderComponent } from '../components/Search';
import { Row, Col } from 'reactstrap';

export default function HeaderComponent() {

    return (
        <>
            <SearchHeaderComponent />
            <header>
                {/* MENU MOBILE */}
                <nav className="panel-menu mobile-main-menu">
                    <ul>
                        <li>
                            <a href="/" >INICIO</a>
                        </li>
                        <li>
                            <a href="/droguery" >DROGUERIA VIRTUAL</a>
                            <ul>
                                {new Array(10).fill().map((value, i) => {
                                    return (
                                        <li key={i}>
                                            <a href="/">CATEGORÍA {i}</a>
                                            <ul>
                                                <li><a href="/">Item 1</a></li>
                                                <li><a href="/">Item 2</a></li>
                                                <li><a href="/">Item 3</a></li>
                                            </ul>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li>
                            <a href="/babycare">CUIDADO DEL BEBÉ</a>
                        </li>
                        <li>
                            <a href="/dictionary" >DICCIONARIO</a>
                        </li>
                        <li>
                            <a href="/subsidiary">SUCURSALES</a>
                        </li>
                        <li>
                            <a href="http://clubvidasana.co/" target="_blank" rel="noopener noreferrer" className="btn-club-vida-mobile">
                                CLUB VIDA SANA
                            </a>
                        </li>
                    </ul>
                    <div className="mm-navbtn-names">
                        <div className="mm-closebtn">Cerrar</div>
                        <div className="mm-backbtn">Atrás</div>
                    </div>
                </nav>

                {/* MENU DESKTOP  */}
                <div className="tt-mobile-header">
                    <div className="container-fluid">
                        <div className="tt-header-row">
                            <div className="tt-mobile-parent-menu">
                                <div className="tt-menu-toggle">
                                    <i className="icon-03"></i>
                                </div>
                            </div>
                            {/* <!-- city --> */}
                            <div className="tt-mobile-parent-multi tt-parent-box"></div>
                            {/* <!-- /city --> */}
                            {/* <!-- subsidiary --> */}
                            <div className="tt-mobile-parent-search tt-parent-box"></div>
                            {/* <!-- /subsidiary --> */}
                            {/* <!-- account --> */}
                            <div className="tt-mobile-parent-account tt-parent-box"></div>
                            {/* <!-- /account --> */}
                            {/* <!-- cart --> */}
                            <div className="tt-mobile-parent-cart tt-parent-box"></div>
                            {/* <!-- /cart --> */}
                        </div>
                    </div>
                </div>

                {/* -- tt-desktop-header -- */}
                <div className="tt-desktop-header">
                    <div className="container">
                        <div className="tt-header-holder">
                            <div className="tt-col-obj tt-obj-menu">
                                {/* <!-- tt-menu --> */}
                                <div className="tt-desctop-parent-menu tt-parent-box">
                                    <div className="tt-desctop-menu">
                                        <nav>
                                            <ul>
                                                <li className="dropdown tt-megamenu-col-02  ">
                                                    <a href="/" >INICIO</a>
                                                </li>
                                                <li className="dropdown megamenu ">
                                                    <a href="/droguery" >DROGUERIA VIRTUAL</a>
                                                    <div className="dropdown-menu">
                                                        <div className="row tt-col-list">

                                                            {new Array(10).fill().map((value, i) => {
                                                                return (
                                                                    <div className="col-md-2" key={i}>
                                                                        <h6 className="tt-title-submenu"><a href="listing-left-column.html">CATEGORÍA {i}</a></h6>
                                                                        <ul className="tt-megamenu-submenu">
                                                                            <li><a href="/">Quíenes somos</a></li>
                                                                            <li><a href="/">Quíenes somos</a></li>
                                                                            <li><a href="/">Quíenes somos</a></li>
                                                                        </ul>
                                                                        <ul>
                                                                            <li> <a href="/" style={{ fontWeight: 500 }}>Ver todo</a></li>
                                                                        </ul>

                                                                    </div>
                                                                )
                                                            })}

                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="dropdown tt-megamenu-col-01 ">
                                                    <a href="/babycare">CUIDADO DEL BEBÉ</a>
                                                </li>

                                                <li className="dropdown tt-megamenu-col-01">
                                                    <a href="/dictionary" >DICCIONARIO</a>
                                                </li>

                                                <li className="dropdown tt-megamenu-col-01">
                                                    <a href="/subsidiary">SUCURSALES</a>
                                                </li>

                                                <a href="http://clubvidasana.co/" target="_blank" rel="noopener noreferrer" className="btn-club-vida ">CLUB VIDA SANA</a>

                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                {/* <!-- /tt-menu --> */}
                            </div>
                            <div className="tt-col-obj tt-obj-options obj-move-right">
                                {/* tt-langue and tt-currency */}
                                <div className="tt-desctop-parent-multi tt-parent-box">
                                    <div className="tt-multi-obj tt-dropdown-obj">
                                        <button className="tt-dropdown-toggle" data-tooltip="Ciudad" data-tposition="bottom">
                                            {/* <i className="icon-f-79" /> */}
                                            Elije tu ciudad
                                        </button>
                                        <div className="tt-dropdown-menu">
                                            <div className="tt-mobile-add">
                                                <button className="tt-close">Cerrar</button>
                                            </div>
                                            <div className="tt-dropdown-inner">
                                                <ul>
                                                    {new Array(10).fill().map((value, i) => {
                                                        return (
                                                            <li key={i} className="selected_li"><a href="/">Barranquilla {i}</a></li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /tt-langue and tt-currency */}

                                {/* tt-search */}
                                <div className="tt-desctop-parent-search tt-parent-box">
                                    <div className="tt-search tt-dropdown-obj">
                                        <a href="/subsidiary" className="tt-dropdown-toggle" data-tooltip="Sucursales" data-tposition="bottom">
                                            <i className="icon-f-24" />
                                        </a>

                                    </div>
                                </div>


                                {/* tt-account */}
                                <div className="tt-desctop-parent-account tt-parent-box">
                                    <div className="tt-account tt-dropdown-obj">
                                        <button className="tt-dropdown-toggle" data-tooltip={'Mi cuenta'} data-tposition="bottom">
                                            <i className="far fa-user-circle"></i>
                                        </button>
                                        <div className="tt-dropdown-menu">
                                            <div className="tt-mobile-add">
                                                <button className="tt-close">Cerrar</button>
                                            </div>
                                            <div className="tt-dropdown-inner">
                                                <ul>
                                                    <li><a href="login.html" ><i className="icon-e-42"></i>Perfil</a></li>
                                                    <li><a href="/account/login"><i className="icon-g-44" />Iniciar Sesión</a></li>
                                                    <li><a href="/account/register"><i className="icon-h-22" />Registrarse</a></li>
                                                    <li><a href="page404.html"><i className="icon-g-17" />Cerrar Sesión</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* tt-cart */}
                                <div className="tt-desctop-parent-cart tt-parent-box">
                                    <div className="tt-cart tt-dropdown-obj" data-tooltip="Carrito de compra" data-tposition="bottom">
                                        <button className="tt-dropdown-toggle">
                                            <i className="icon-f-47" />

                                            <span className="tt-badge-cart">2</span>
                                        </button>
                                        <div className="tt-dropdown-menu">
                                            <div className="tt-mobile-add">
                                                <h6 className="tt-title">Carrito de compra</h6>
                                                <button className="tt-close">Cerrar</button>

                                            </div>
                                            <div className="tt-dropdown-inner">
                                                <div className="tt-cart-layout">
                                                    <div className="tt-cart-content">
                                                        <div className="tt-cart-list" style={{ height: 250, overflow: 'scroll' }}>
                                                            {new Array(50).fill().map((value, i) => {
                                                                return (
                                                                    <div className="tt-item" key={i} onClick={() => window.location.href = "/detail"}>
                                                                        <div className="tt-item-img">

                                                                            <img src="/images/loader.svg" data-src="https://www.droguerialaeconomia.com/economia/site/img/086541.png" alt="27" />
                                                                        </div>
                                                                        <div className="tt-item-descriptions">
                                                                            <h2 className="tt-title">Coboral z polvo vainilla x 400 gramos</h2>
                                                                            <ul className="tt-add-info">
                                                                                <li>Mililitro a $999.999</li>
                                                                                <li>CUIDADO DE LA PIEL</li>
                                                                            </ul>
                                                                            <div className="tt-quantity">1 X</div> <div className="tt-price">$999.990</div>
                                                                        </div>
                                                                        <div className="tt-item-close">
                                                                            <a href="/" className="tt-btn-close" > </a>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                        <div className="tt-cart-total-row">
                                                            <div className="tt-cart-total-title">SUBTOTAL:</div>
                                                            <div className="tt-cart-total-price">$324</div>
                                                        </div>
                                                        <div className="tt-cart-btn">
                                                            <div className="tt-item">
                                                                <a href="/processbuy" className="btn">Realizar compra</a>
                                                            </div>
                                                            <div className="tt-item">
                                                                <a href="/buys" className="btn">Ver carrito de compras</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                {/* Page selected */}
                <div className="tt-breadcrumb">
                    <div className="container">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li>Listing</li>
                        </ul>
                    </div>
                </div>


                {/* -- Stuck menu -- */}
                <div className="tt-stuck-nav">
                    <div className="container">

                        {/* Search component */}
                        <Row>
                            <Col md={10}>
                                <SearchHeaderComponent />
                            </Col>
                            <Col md={2} className="mb-2">
                                <div className="tt-header-row mt-2">
                                    <div className="tt-stuck-parent-menu" style={{ display: 'none' }} />
                                    <div className="tt-stuck-parent-multi tt-parent-box" />
                                    <div className="tt-stuck-parent-search tt-parent-box" />
                                    <div className="tt-stuck-parent-account tt-parent-box" />
                                    <div className="tt-stuck-parent-cart tt-parent-box" />
                                </div>

                            </Col>
                        </Row>
                    </div>
                </div>

                {/* Loading circle part */}
                <div id="loader-wrapper">
                    <div id="loader">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>

            </header>
        </>
    );
}