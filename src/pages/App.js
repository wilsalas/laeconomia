import React, { Component } from 'react';
import { Container } from 'reactstrap';
import SearchComponent from '../components/Search';
import HeaderComponent from '../components/Header';
import Content1Component from '../components/Content1';
import CategoryComponent from '../components/Category';
import TabProductsComponent from '../components/TabProducts';
import FooterComponent from '../components/Footer';
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
          <Container>
            <TabProductsComponent />
          </Container>
          <br />
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
