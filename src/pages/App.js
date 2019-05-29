import React, { Component } from 'react';
import SearchComponent from '../components/Search';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import Content1Component from '../components/Content1';
import CategoryComponent from '../components/Category';
import '../styles/styles.css';

export default class App extends Component {

  render() {

    return (
      <div>
        <SearchComponent />
        <HeaderComponent />

        <div id="tt-Sale">
          <Content1Component seletedMenu={0} />
          <br />

          <CategoryComponent />


          {/* ----- */}

          <div className="container-indent">
            <div className="container container-fluid-custom-mobile-padding">
              <div className="tt-block-title">
                <h1 className="tt-title">TRENDING</h1>
                <div className="tt-description">TOP VIEW IN THIS WEEK</div>
              </div>
              <div className="row tt-layout-product-item">
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="tt-product thumbprod-center product-nohover">
                    <div className="tt-image-box">
                      <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" > </a>
                      <a href="product.html">
                        <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-03.jpg" alt="31" /></span>
                        <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-03-02.jpg" alt="32" /></span>
                        <span className="tt-label-location">
                          <span className="tt-label-new">New</span>
                        </span>
                      </a>
                    </div>
                    <div className="tt-description">
                      <div className="tt-row">
                        <ul className="tt-add-info">
                          <li><a href="/">T-SHIRTS</a></li>
                        </ul>
                        <div className="tt-rating">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star-half" />
                          <i className="icon-star-empty" />
                        </div>
                      </div>
                      <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                      <div className="tt-price">
                        $12
                  </div>
                      <div className="tt-option-block">
                        <ul className="tt-options-swatch js-change-img">
                          <li className="active"><a href="/" className="options-color-img" data-src="images/product/product-03.jpg" data-src-hover="images/product/product-03-02.jpg" data-tooltip="Blue" data-tposition="top" >  </a></li>
                          <li><a href="/" className="options-color-img" data-src="images/product/product-03-05.jpg" data-src-hover="images/product/product-03-05-hover.jpg" data-tooltip="Light Blue" data-tposition="top" >  </a></li>
                          <li><a href="/" className="options-color-img" data-src="images/product/product-03-06.jpg" data-src-hover="images/product/product-03-06-hover.jpg" data-tooltip="Green" data-tposition="top" > </a></li>
                          <li><a href="/" className="options-color-img" data-src="images/product/product-03-07.jpg" data-src-hover="images/product/product-03-07-hover.jpg" data-tooltip="Pink" data-tposition="top" > </a></li>
                          <li><a href="/" className="options-color-img" data-src="images/product/product-03-08.jpg" data-src-hover="images/product/product-03-08-hover.jpg" data-tooltip="Orange" data-tposition="top" > </a></li>
                        </ul>
                      </div>
                      <div className="tt-product-inside-hover">
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                        </div>
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" > </a>
                          <a href="/" className="tt-btn-wishlist" > </a>
                          <a href="/" className="tt-btn-compare" > </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="tt-product thumbprod-center">
                    <div className="tt-image-box">
                      <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" > </a>
                      <a href="product.html">
                        <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-43.jpg" alt="33" /></span>
                        <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-43-03.jpg" alt="34" /></span>
                        <span className="tt-label-location">
                          <span className="tt-label-our-fatured">Fatured</span>
                        </span>
                      </a>
                    </div>
                    <div className="tt-description">
                      <div className="tt-row">
                        <ul className="tt-add-info">
                          <li><a href="/">T-SHIRTS</a></li>
                        </ul>
                        <div className="tt-rating">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                        </div>
                      </div>
                      <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                      <div className="tt-price">
                        $17
                  </div>
                      <div className="tt-option-block">
                        <ul className="tt-options-swatch">
                          <li className="active"><a className="options-color tt-color-bg-01" href="/" > </a></li>
                          <li><a className="options-color tt-color-bg-02" href="/" > </a></li>
                        </ul>
                      </div>
                      <div className="tt-product-inside-hover">
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                        </div>
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" > </a>
                          <a href="/" className="tt-btn-wishlist" > </a>
                          <a href="/" className="tt-btn-compare" > </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="tt-product thumbprod-center">
                    <div className="tt-image-box">
                      <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" > </a>
                      <a href="product.html">
                        <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-27-01.jpg" alt="35" /></span>
                        <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-27.jpg" alt="36" /></span>
                        <span className="tt-label-location">
                          <span className="tt-label-our-stock">Out Of Stock</span>
                        </span>
                      </a>
                    </div>
                    <div className="tt-description">
                      <div className="tt-row">
                        <ul className="tt-add-info">
                          <li><a href="/">T-SHIRTS</a></li>
                        </ul>
                      </div>
                      <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                      <div className="tt-price">
                        $12
                  </div>
                      <div className="tt-option-block">
                        <ul className="tt-options-swatch">
                          <li><a className="options-color tt-color-bg-01" href="/" > </a></li>
                          <li><a className="options-color tt-color-bg-02" href="/" > </a></li>
                        </ul>
                      </div>
                      <div className="tt-product-inside-hover">
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                        </div>
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" > </a>
                          <a href="/" className="tt-btn-wishlist" > </a>
                          <a href="/" className="tt-btn-compare" > </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="tt-product thumbprod-center">
                    <div className="tt-image-box">
                      <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" > </a>
                      <a href="product.html">
                        <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-01.jpg" alt="37" /></span>
                        <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-01-02.jpg" alt="38" /></span>
                        <span className="tt-label-location">
                          <span className="tt-label-sale">Sale 15%</span>
                        </span>
                      </a>
                    </div>
                    <div className="tt-description">
                      <div className="tt-row">
                        <ul className="tt-add-info">
                          <li><a href="/">T-SHIRTS</a></li>
                        </ul>
                        <div className="tt-rating">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                        </div>
                      </div>
                      <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                      <div className="tt-price">
                        <span className="new-price">$14</span>
                        <span className="old-price">$24</span>
                      </div>
                      <div className="tt-option-block">
                        <ul className="tt-options-swatch">
                          <li className="active"><a href="/" className="options-color-img" data-src="images/custom/texture-img-06.jpg" data-tooltip="Blue" data-tposition="top" > </a></li>
                          <li><a href="/" className="options-color-img" data-src="images/custom/texture-img-07.jpg" data-tooltip="Light Blue" data-tposition="top" > </a></li>
                          <li><a href="/" className="options-color-img" data-src="images/custom/texture-img-08.jpg" data-tooltip="Yellow" data-tposition="top" > </a></li>
                        </ul>
                      </div>
                      <div className="tt-product-inside-hover">
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                        </div>
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" > </a>
                          <a href="/" className="tt-btn-wishlist" > </a>
                          <a href="/" className="tt-btn-compare" > </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="tt-product thumbprod-center">
                    <div className="tt-image-box">
                      <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" > </a>
                      <a href="product.html">
                        <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-26.jpg" alt="39" /></span>
                        <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-26-01.jpg" alt="40" /></span>
                      </a>
                    </div>
                    <div className="tt-description">
                      <div className="tt-row">
                        <ul className="tt-add-info">
                          <li><a href="/">T-SHIRTS</a></li>
                        </ul>
                      </div>
                      <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                      <div className="tt-price">
                        $56
                  </div>
                      <div className="tt-product-inside-hover">
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                        </div>
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" > </a>
                          <a href="/" className="tt-btn-wishlist" > </a>
                          <a href="/" className="tt-btn-compare" > </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="tt-product thumbprod-center">
                    <div className="tt-image-box">
                      <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" > </a>
                      <a href="product.html">
                        <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-45.jpg" alt="41" /></span>
                        <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-45-01.jpg" alt="42" /></span>
                      </a>
                    </div>
                    <div className="tt-description">
                      <div className="tt-row">
                        <ul className="tt-add-info">
                          <li><a href="/">T-SHIRTS</a></li>
                        </ul>
                      </div>
                      <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                      <div className="tt-price">
                        $78
                  </div>
                      <div className="tt-product-inside-hover">
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                        </div>
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" > </a>
                          <a href="/" className="tt-btn-wishlist" >  </a>
                          <a href="/" className="tt-btn-compare" >  </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="tt-product thumbprod-center">
                    <div className="tt-image-box">
                      <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" > </a>
                      <a href="product.html">
                        <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-14.jpg" alt="43" /></span>
                        <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-14-01.jpg" alt="44" /></span>
                      </a>
                      <div className="tt-countdown_box">
                        <div className="tt-countdown_inner">
                          <div className="tt-countdown" data-date="2019-05-01" data-year="Yrs" data-month="Mths" data-week="Wk" data-day="Day" data-hour="Hrs" data-minute="Min" data-second="Sec" />
                        </div>
                      </div>
                    </div>
                    <div className="tt-description">
                      <div className="tt-row">
                        <ul className="tt-add-info">
                          <li><a href="/">T-SHIRTS</a></li>
                        </ul>
                        <div className="tt-rating">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star-half" />
                          <i className="icon-star-empty" />
                        </div>
                      </div>
                      <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                      <div className="tt-price">
                        $51
                  </div>
                      <div className="tt-product-inside-hover">
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                        </div>
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" > </a>
                          <a href="/" className="tt-btn-wishlist" > </a>
                          <a href="/" className="tt-btn-compare" > </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="tt-product thumbprod-center">
                    <div className="tt-image-box">
                      <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" > </a>
                      <a href="product.html">
                        <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-15.jpg" alt="45" /></span>
                        <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-15-01.jpg" alt="46" /></span>
                      </a>
                    </div>
                    <div className="tt-description">
                      <div className="tt-row">
                        <ul className="tt-add-info">
                          <li><a href="/">T-SHIRTS</a></li>
                        </ul>
                      </div>
                      <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                      <div className="tt-price">
                        $12
                  </div>
                      <div className="tt-product-inside-hover">
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                        </div>
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" > </a>
                          <a href="/" className="tt-btn-wishlist" > </a>
                          <a href="/" className="tt-btn-compare" > </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ----- */}

          <div className="container-indent">
            <div className="container">
              <div className="row tt-layout-promo-box">
                <div className="col-sm-6 col-md-4">
                  <a href="listing-left-column.html" className="tt-promo-box">
                    <img src="images/loader.svg" data-src="images/promo/index-promo-img-07.jpg" alt="46" />
                    <div className="tt-description">
                      <div className="tt-description-wrapper">
                        <div className="tt-background" />
                        <div className="tt-title-small">DESCUENTOS</div>
                        <div className="tt-title-large ">HASTA 50%</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-6 col-md-4">
                  <a href="listing-left-column.html" className="tt-promo-box">
                    <img src="images/loader.svg" data-src="images/promo/index-promo-img-08.jpg" alt="47" />
                    <div className="tt-description">
                      <div className="tt-description-wrapper">
                        <div className="tt-background" />
                        <div className="tt-title-small">PROMOCION </div>
                        <div className="tt-title-large">DEL DÍA</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-6 col-md-4">
                  <a href="listing-left-column.html" className="tt-promo-box">
                    <img src="images/loader.svg" data-src="images/promo/index-promo-img-09.jpg" alt="48" />
                    <div className="tt-description">
                      <div className="tt-background" />
                      <div className="tt-description-wrapper">
                        <div className="tt-background" />
                        <div className="tt-title-small">NUEVOS</div>
                        <div className="tt-title-large">PRODUCTOS</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ----- */}

          <div className="container-indent">
            <div className="container container-fluid-custom-mobile-padding">
              <div className="tt-block-title">
                <h2 className="tt-title">BEST SELLER</h2>
                <div className="tt-description">TOP SALE IN THIS WEEK</div>
              </div>
              <div className="row tt-layout-product-item">
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="tt-product thumbprod-center">
                    <div className="tt-image-box">
                      <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" > </a>
                      <a href="product.html">
                        <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-16.jpg" alt="49" /></span>
                        <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-16-01.jpg" alt="50" /></span>
                      </a>
                      <div className="tt-countdown_box">
                        <div className="tt-countdown_inner">
                          <div className="tt-countdown" data-date="2019-04-14" data-year="Yrs" data-month="Mths" data-week="Wk" data-day="Day" data-hour="Hrs" data-minute="Min" data-second="Sec" />
                        </div>
                      </div>
                    </div>
                    <div className="tt-description">
                      <div className="tt-row">
                        <ul className="tt-add-info">
                          <li><a href="/">T-SHIRTS</a></li>
                        </ul>
                      </div>
                      <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                      <div className="tt-price">
                        $24
                  </div>
                      <div className="tt-product-inside-hover">
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                        </div>
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" > </a>
                          <a href="/" className="tt-btn-wishlist"  > </a>
                          <a href="/" className="tt-btn-compare" > </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="tt-product thumbprod-center">
                    <div className="tt-image-box">
                      <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" > </a>
                      <a href="product.html">
                        <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-46.jpg" alt="51" /></span>
                        <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-46-01.jpg" alt="52" /></span>
                      </a>
                    </div>
                    <div className="tt-description">
                      <div className="tt-row">
                        <ul className="tt-add-info">
                          <li><a href="/">T-SHIRTS</a></li>
                        </ul>
                        <div className="tt-rating">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star-half" />
                          <i className="icon-star-empty" />
                        </div>
                      </div>
                      <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                      <div className="tt-price">
                        $8
                  </div>
                      <div className="tt-option-block">
                        <ul className="tt-options-swatch">
                          <li className="active"><a className="options-color" href="/">
                            <span className="swatch-img">
                              <img src="images/custom/texture-img-06.jpg" alt="53" />
                            </span>
                            <span className="swatch-label color-black" />
                          </a></li>
                          <li><a className="options-color" href="/">
                            <span className="swatch-img">
                              <img src="images/custom/texture-img-07.jpg" alt="54" />
                            </span>
                            <span className="swatch-label color-black" />
                          </a></li>
                          <li><a className="options-color" href="/">
                            <span className="swatch-img">
                              <img src="images/custom/texture-img-08.jpg" alt="55" />
                            </span>
                            <span className="swatch-label color-black" />
                          </a></li>
                        </ul>
                      </div>
                      <div className="tt-product-inside-hover">
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                        </div>
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" > </a>
                          <a href="/" className="tt-btn-wishlist" > </a>
                          <a href="/" className="tt-btn-compare" > </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="tt-product thumbprod-center">
                    <div className="tt-image-box">

                      <a href="/" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" > </a>
                      <a href="product.html">
                        <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-18.jpg" alt="56" /></span>
                        <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-18-01.jpg" alt="57" /></span>
                      </a>
                    </div>
                    <div className="tt-description">
                      <div className="tt-row">
                        <ul className="tt-add-info">
                          <li><a href="/">T-SHIRTS</a></li>
                        </ul>
                      </div>
                      <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                      <div className="tt-price">
                        $46
                  </div>
                      <div className="tt-option-block">
                        <ul className="tt-options-swatch">
                          <li><a className="options-color tt-color-bg-01" href="/" > </a></li>
                          <li><a className="options-color tt-color-bg-02" href="/" > </a></li>
                        </ul>
                      </div>
                      <div className="tt-product-inside-hover">
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                        </div>
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" > </a>
                          <a href="/" className="tt-btn-wishlist" > </a>
                          <a href="/" className="tt-btn-compare" > </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="tt-product thumbprod-center">
                    <div className="tt-image-box">

                      <a href="/" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" > </a>
                      <a href="product.html">
                        <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-19.jpg" alt="58" /></span>
                        <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-19-02.jpg" alt="59" /></span>
                      </a>
                    </div>
                    <div className="tt-description">
                      <div className="tt-row">
                        <ul className="tt-add-info">
                          <li><a href="/">T-SHIRTS</a></li>
                        </ul>
                        <div className="tt-rating">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                        </div>
                      </div>
                      <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                      <div className="tt-price">
                        $35
                  </div>
                      <div className="tt-product-inside-hover">
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                        </div>
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" > </a>
                          <a href="/" className="tt-btn-wishlist" > </a>
                          <a href="/" className="tt-btn-compare" > </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="tt-product thumbprod-center">
                    <div className="tt-image-box">

                      <a href="/" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" > </a>
                      <a href="product.html">
                        <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-41.jpg" alt="60" /></span>
                        <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-41-01.jpg" alt="61" /></span>
                      </a>
                    </div>
                    <div className="tt-description">
                      <div className="tt-row">
                        <ul className="tt-add-info">
                          <li><a href="/">T-SHIRTS</a></li>
                        </ul>
                        <div className="tt-rating">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                        </div>
                      </div>
                      <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                      <div className="tt-price">
                        $124
                  </div>
                      <div className="tt-product-inside-hover">
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                        </div>
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" > </a>
                          <a href="/" className="tt-btn-wishlist" > </a>
                          <a href="/" className="tt-btn-compare" > </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="tt-product thumbprod-center">
                    <div className="tt-image-box">

                      <a href="/" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" > </a>
                      <a href="product.html">
                        <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-02.jpg" alt="62" /></span>
                        <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-02-03.jpg" alt="63" /></span>
                      </a>
                    </div>
                    <div className="tt-description">
                      <div className="tt-row">
                        <ul className="tt-add-info">
                          <li><a href="/">T-SHIRTS</a></li>
                        </ul>
                      </div>
                      <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                      <div className="tt-price">
                        $43
                  </div>
                      <div className="tt-product-inside-hover">
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                        </div>
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" > </a>
                          <a href="/" className="tt-btn-wishlist" > </a>
                          <a href="/" className="tt-btn-compare" > </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="tt-product thumbprod-center">
                    <div className="tt-image-box">

                      <a href="/" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" > </a>
                      <a href="product.html">
                        <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-05.jpg" alt="64" /></span>
                        <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-05-02.jpg" alt="65" /></span>
                      </a>
                    </div>
                    <div className="tt-description">
                      <div className="tt-row">
                        <ul className="tt-add-info">
                          <li><a href="/">T-SHIRTS</a></li>
                        </ul>
                      </div>
                      <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                      <div className="tt-price">
                        $124
                  </div>
                      <div className="tt-product-inside-hover">
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                        </div>
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" > </a>
                          <a href="/" className="tt-btn-wishlist" > </a>
                          <a href="/" className="tt-btn-compare" > </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="tt-product thumbprod-center">
                    <div className="tt-image-box">

                      <a href="/" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" > </a>
                      <a href="/" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" > </a>
                      <a href="product.html">
                        <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-33.jpg" alt="66" /></span>
                        <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-33-01.jpg" alt="67" /></span>
                      </a>
                    </div>
                    <div className="tt-description">
                      <div className="tt-row">
                        <ul className="tt-add-info">
                          <li><a href="/">T-SHIRTS</a></li>
                        </ul>
                        <div className="tt-rating">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star-half" />
                          <i className="icon-star-empty" />
                        </div>
                      </div>
                      <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                      <div className="tt-price">
                        $54
                  </div>
                      <div className="tt-product-inside-hover">
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                        </div>
                        <div className="tt-row-btn">
                          <a href="/" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" > </a>
                          <a href="/" className="tt-btn-wishlist" > </a>
                          <a href="/" className="tt-btn-compare" > </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ----- */}

          <div className="container-indent">
            <div className="container">
              <div className="tt-block-title">
                <h2 className="tt-title">LATES FROM BLOG</h2>
                <div className="tt-description">THE FRESHEST AND MOST EXCITING NEWS</div>
              </div>
              <div className="tt-blog-thumb-list">
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="tt-blog-thumb">
                      <div className="tt-img"><a href="blog-single-post.html" target="_blank"><img src="images/loader.svg" data-src="images/blog/blog-post-img-06.jpg" alt="67" /></a></div>
                      <div className="tt-title-description">
                        <div className="tt-background" />
                        <div className="tt-tag">
                          <a href="blog-single-post.html">FASHION</a>
                        </div>
                        <div className="tt-title">
                          <a href="blog-single-post.html">DOLORE EU FUGIATNULLA PARIATUR</a>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                        <div className="tt-meta">
                          <div className="tt-autor">
                            by <a href="/">ADRIAN</a> on January 14, 2017
                        </div>
                          <div className="tt-comments">
                            <a href="/"><i className="tt-icon icon-f-88" />7</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="tt-blog-thumb">
                      <div className="tt-img"><a href="blog-single-post.html" target="_blank"><img src="images/loader.svg" data-src="images/blog/blog-post-img-04.jpg" alt="68" /></a></div>
                      <div className="tt-title-description">
                        <div className="tt-background" />
                        <div className="tt-tag">
                          <a href="blog-single-post.html">FASHION</a>
                        </div>
                        <div className="tt-title">
                          <a href="blog-single-post.html">INCIDIDUNT UT LABORE ET DOLORE</a>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                        <div className="tt-meta">
                          <div className="tt-autor">
                            by <a href="/">ADRIAN</a> on January 14, 2017
                        </div>
                          <div className="tt-comments">
                            <a href="/"><i className="tt-icon icon-f-88" />7</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="tt-blog-thumb">
                      <div className="tt-img"><a href="blog-single-post.html" target="_blank"><img src="images/loader.svg" data-src="images/blog/blog-post-img-02.jpg" alt="68" /></a></div>
                      <div className="tt-title-description">
                        <div className="tt-background" />
                        <div className="tt-tag">
                          <a href="blog-single-post.html">FASHION</a>
                        </div>
                        <div className="tt-title">
                          <a href="blog-single-post.html">INCIDIDUNT UT LABORE ET DOLORE</a>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                        <div className="tt-meta">
                          <div className="tt-autor">
                            by <a href="/">ADRIAN</a> on January 14, 2017
                        </div>
                          <div className="tt-comments">
                            <a href="/"><i className="tt-icon icon-f-88" />7</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ----- */}

          <div className="container-indent">
            <div className="container-fluid">
              <div className="tt-block-title">
                <h2 className="tt-title"><a href="https://www.instagram.com/wokieeshop/">@ FOLLOW</a> US ON</h2>
                <div className="tt-description">INSTAGRAM</div>
              </div>
              <div className="row">
                <div id="instafeed" className="instafeed-fluid" data-accesstoken="8626857013.dd09515.0fcd8351c65140d48f5a340693af1c3f" data-clientid="dd095157744c4bd0a67181fc4906e5b6" data-userid={8626857013} data-limitimg={6}>
                </div>
              </div>
            </div>
          </div>

          {/* ----- */}

          <div className="container-indent">
            <div className="container">
              <div className="row tt-services-listing">
                <div className="col-xs-12 col-md-6 col-lg-4">
                  <a href="/" className="tt-services-block">
                    <div className="tt-col-icon">
                      <i className="icon-f-48" />
                    </div>
                    <div className="tt-col-description">
                      <h4 className="tt-title">FREE SHIPPING</h4>
                      <p>Free shipping on all US order or order above $99</p>
                    </div>
                  </a>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-4">
                  <a href="/" className="tt-services-block">
                    <div className="tt-col-icon">
                      <i className="icon-f-35" />
                    </div>
                    <div className="tt-col-description">
                      <h4 className="tt-title">SUPPORT 24/7</h4>
                      <p>Contact us 24 hours a day, 7 days a week</p>
                    </div>
                  </a>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-4">
                  <a href="/" className="tt-services-block">
                    <div className="tt-col-icon">
                      <i className="icon-e-09" />
                    </div>
                    <div className="tt-col-description">
                      <h4 className="tt-title">30 DAYS RETURN</h4>
                      <p>Simply return it within 24 days for an exchange.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <FooterComponent />

        <a href="/" className="tt-back-to-top">BACK TO TOP</a>

        {/*  modal (AddToCartProduct) */}
        <div className="modal  fade" id="modalAddToCartProduct" tabIndex={-1} role="dialog" aria-label="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content ">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span className="icon icon-clear" /></button>
              </div>
              <div className="modal-body">
                <div className="tt-modal-addtocart mobile">
                  <div className="tt-modal-messages">
                    <i className="icon-f-68" /> Added to cart successfully!
                </div>
                  <a href="/" className="btn-link btn-close-popup">CONTINUE SHOPPING</a>
                  <a href="shopping_cart_02.html" className="btn-link">VIEW CART</a>
                  <a href="page404.html" className="btn-link">PROCEED TO CHECKOUT</a>
                </div>
                <div className="tt-modal-addtocart desctope">
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <div className="tt-modal-messages">
                        <i className="icon-f-68" /> Added to cart successfully!
                    </div>
                      <div className="tt-modal-product">
                        <div className="tt-img">
                          <img src="images/loader.svg" data-src="images/product/product-01.jpg" alt="71" />
                        </div>
                        <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                        <div className="tt-qty">
                          QTY: <span>1</span>
                        </div>
                      </div>
                      <div className="tt-product-total">
                        <div className="tt-total">
                          TOTAL: <span className="tt-price">$324</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <a href="/" className="tt-cart-total">
                        There are 1 items in your cart
                      <div className="tt-total">
                          TOTAL: <span className="tt-price">$324</span>
                        </div>
                      </a>
                      <a href="/" className="btn btn-border btn-close-popup">CONTINUE SHOPPING</a>
                      <a href="shopping_cart_02.html" className="btn btn-border">VIEW CART</a>
                      <a href="/" className="btn">PROCEED TO CHECKOUT</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modal (quickViewModal) */}
        <div className="modal  fade" id="ModalquickView" tabIndex={-1} role="dialog" aria-label="myModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content ">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span className="icon icon-clear" /></button>
              </div>
              <div className="modal-body">
                <div className="tt-modal-quickview desctope">
                  <div className="row">
                    <div className="col-12 col-md-5 col-lg-6">
                      <div className="tt-mobile-product-slider arrow-location-center">
                        <div><img src="images/loader.svg" data-src="images/product/product-01.jpg" alt="72" /></div>
                        <div><img src="images/loader.svg" data-src="images/product/product-01-02.jpg" alt="73" /></div>
                        <div><img src="images/loader.svg" data-src="images/product/product-01-03.jpg" alt="74" /></div>
                        <div><img src="images/loader.svg" data-src="images/product/product-01-04.jpg" alt="75" /></div>
                        <div>
                          <div className="tt-video-block">
                            <a href="/" className="link-video" > </a>
                            <video className="movie" src="video/video.mp4" poster="video/video_img.jpg" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-7 col-lg-6">
                      <div className="tt-product-single-info">
                        <div className="tt-add-info">
                          <ul>
                            <li><span>SKU:</span> 001</li>
                            <li><span>Availability:</span> 40 in Stock</li>
                          </ul>
                        </div>
                        <h2 className="tt-title">Cotton Blend Fleece Hoodie</h2>
                        <div className="tt-price">
                          <span className="new-price">$29</span>
                          <span className="old-price" />
                        </div>
                        <div className="tt-review">
                          <div className="tt-rating">
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star-half" />
                            <i className="icon-star-empty" />
                          </div>
                          <a href="/">(1 Customer Review)</a>
                        </div>
                        <div className="tt-wrapper">
                          Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                      </div>
                        <div className="tt-swatches-container">
                          <div className="tt-wrapper">
                            <div className="tt-title-options">SIZE</div>
                            <form className="form-default">
                              <div className="form-group">
                                <select className="form-control">
                                  <option>21</option>
                                  <option>25</option>
                                  <option>36</option>
                                </select>
                              </div>
                            </form>
                          </div>
                          <div className="tt-wrapper">
                            <div className="tt-title-options">COLOR</div>
                            <form className="form-default">
                              <div className="form-group">
                                <select className="form-control">
                                  <option>Red</option>
                                  <option>Green</option>
                                  <option>Brown</option>
                                </select>
                              </div>
                            </form>
                          </div>
                          <div className="tt-wrapper">
                            <div className="tt-title-options">TEXTURE:</div>
                            <ul className="tt-options-swatch options-large">
                              <li><a className="options-color" href="/">
                                <span className="swatch-img">
                                  <img src="images/loader.svg" data-src="images/custom/texture-img-01.jpg" alt="76" />
                                </span>
                                <span className="swatch-label color-black" />
                              </a></li>
                              <li className="active"><a className="options-color" href="/">
                                <span className="swatch-img">
                                  <img src="images/loader.svg" data-src="images/custom/texture-img-02.jpg" alt="77" />
                                </span>
                                <span className="swatch-label color-black" />
                              </a></li>
                              <li><a className="options-color" href="/">
                                <span className="swatch-img">
                                  <img src="images/loader.svg" data-src="images/custom/texture-img-03.jpg" alt="78" />
                                </span>
                                <span className="swatch-label color-black" />
                              </a></li>
                              <li><a className="options-color" href="/">
                                <span className="swatch-img">
                                  <img src="images/loader.svg" data-src="images/custom/texture-img-04.jpg" alt="79" />
                                </span>
                                <span className="swatch-label color-black" />
                              </a></li>
                              <li><a className="options-color" href="/">
                                <span className="swatch-img">
                                  <img src="images/loader.svg" data-src="images/custom/texture-img-05.jpg" alt="80" />
                                </span>
                                <span className="swatch-label color-black" />
                              </a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="tt-wrapper">
                          <div className="tt-row-custom-01">
                            <div className="col-item">
                              <div className="tt-input-counter style-01">
                                <span className="minus-btn" />
                                <input type="text" defaultValue={1} size={5} />
                                <span className="plus-btn" />
                              </div>
                            </div>
                            <div className="col-item">
                              <a href="/" className="btn btn-lg"><i className="icon-f-39" />ADD TO CART</a>
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

        {/* modalVideoProduct */}
        <div className="modal fade" id="modalVideoProduct" tabIndex={-1} role="dialog" aria-label="myModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-video">
            <div className="modal-content ">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span className="icon icon-clear" /></button>
              </div>
              <div className="modal-body">
                <div className="modal-video-content">
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modal (ModalSubsribeGood) */}
        <div className="modal  fade" id="ModalSubsribeGood" tabIndex={-1} role="dialog" aria-label="myModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xs">
            <div className="modal-content ">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span className="icon icon-clear" /></button>
              </div>
              <div className="modal-body">
                <div className="tt-modal-subsribe-good">
                  <i className="icon-f-68" /> You have successfully signed!
            </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal (newsletter) */}
        <div className="modal  fade" id="Modalnewsletter" data-backdrop="static" data-keyboard="false" tabIndex={-1} role="dialog" aria-label="myModalLabel" aria-hidden="true" data-pause={2000}>
          <div className="modal-dialog modal-sm">
            <div className="modal-content ">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span className="icon icon-clear" /></button>
              </div>
              <form>
                <div className="modal-body no-background">
                  <div className="tt-modal-newsletter">
                    <div className="tt-modal-newsletter-promo">
                      <div className="tt-title-small">BE THE FIRST<br /> TO KNOW ABOUT</div>
                      <div className="tt-title-large">WOKIEE</div>
                      <p>
                        HTML FASHION DROPSHIPPING THEME
                    </p>
                    </div>
                    <p>
                      By subscribe, you accept the terms &amp; privacy policy<br />
                    </p>
                    <div className="subscribe-form form-default">
                      <div className="row-subscibe">
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Enter your e-mail" />
                          <button type="submit" className="btn">JOIN US</button>
                        </div>
                      </div>
                      <div className="checkbox-group">
                        <input type="checkbox" id="checkBox1" />
                        <label htmlFor="checkBox1">
                          <span className="check" />
                          <span className="box" />
                          Don’t Show This Popup Again
                      </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>




      </div>
    );
  }
}
