import React, { Component } from 'react';
import { Container } from 'reactstrap';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import SliderComponent from '../components/Slider';
import '../styles/styles.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      seletedMenu: 0
    }

    this.changeMenu = this.changeMenu.bind(this);
  }

  changeMenu(seletedMenu) {
    this.setState({ seletedMenu })
  }


  render() {

    return (
      //   <NavbarComponent />
      <div>
        <Container >
          <HeaderComponent />

          {/* loading part */}
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


        </Container>


        {/* ---HEADER---- */}
        <header>
          {/* Nav mobile menu */}

          <nav className="panel-menu mobile-main-menu">
            <ul>
              <li>
                <a href="listing-left-column.html">INICIO</a>

              </li>
              <li>

                <a href="listing-left-column.html">DROGUERIA VIRTUAL</a>
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
                <a href="blog-listing-without-col.html">BLOG</a>
                <ul>
                  <li>
                    <a href="blog-listing-without-col.html">BLOG STYLE</a>
                    <ul>
                      <li><a href="blog-listing-without-col.html">Standard Without Sidebar</a></li>
                      <li><a href="blog-listing-col-left.html">Standard With Left Sidebar</a></li>
                      <li><a href="blog-listing-col-right.html">Standard With Right Sidebar</a></li>
                      <li><a href="blog-masonry-col-2.html">Two Colums</a></li>
                      <li><a href="blog-masonry-col-3.html">Three Colums</a></li>
                      <li><a href="blog-masonry-col-3-filter.html">Three Colums With Filter</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog-single-post.html">POST TYPE</a>
                    <ul>
                      <li><a href="blog-single-post.html">Standard</a></li>
                      <li><a href="blog-single-post-gallery.html">Gallery</a></li>
                      <li><a href="blog-single-post-link.html">Link</a></li>
                      <li><a href="blog-single-post-quote.html">Quote</a></li>
                      <li><a href="blog-single-post-video.html">Video</a></li>
                      <li><a href="blog-single-post-audio.html">Audio</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="portfolio-col-grid-four.html">PORTFOLIO</a>
                <ul>
                  <li>
                    <a href="portfolio-col-grid-four.html">BOXED GRID</a>
                    <ul>
                      <li><a href="portfolio-col-grid-two.html">Two Colums</a></li>
                      <li><a href="portfolio-col-grid-three.html">Three Colums</a></li>
                      <li><a href="portfolio-col-grid-four.html">Four Colums</a></li>
                      <li><a href="portfolio-col-grid-four-without-filter.html">Four Colums Without Filter</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="portfolio-col-wide-three.html">BOXED STYLES</a>
                    <ul>
                      <li><a href="portfolio-col-wide-two.html">Two Colums</a></li>
                      <li><a href="portfolio-col-wide-three.html">Three Colums</a></li>
                      <li><a href="portfolio-col-wide-four.html">Four Colums</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">PAGES</a>
                <ul>
                  <li><a href="about.html">About Example 1</a>
                    <ul>
                      <li><a href="about.html">Link Level 1</a></li>
                      <li>
                        <a href="about.html">Link Level 1</a>
                        <ul>
                          <li><a href="about.html">Link Level 2</a></li>
                          <li>
                            <a href="about.html">Link Level 2</a>
                            <ul>
                              <li><a href="about.html">Link Level 3</a></li>
                              <li><a href="about.html">Link Level 3</a></li>
                              <li><a href="about.html">Link Level 3</a></li>
                              <li>
                                <a href="about.html">Link Level 3</a>
                                <ul>
                                  <li>
                                    <a href="about.html">Link Level 4</a>
                                    <ul>
                                      <li><a href="about.html">Link Level 5</a></li>
                                      <li><a href="about.html">Link Level 5</a></li>
                                      <li><a href="about.html">Link Level 5</a></li>
                                      <li><a href="about.html">Link Level 5</a></li>
                                      <li><a href="about.html">Link Level 5</a></li>
                                    </ul>
                                  </li>
                                  <li><a href="about.html">Link Level 4</a></li>
                                </ul>
                              </li>
                              <li><a href="about.html">Link Level 3</a></li>
                            </ul>
                          </li>
                          <li><a href="about.html">Link Level 2</a></li>
                          <li><a href="about.html">Link Level 2</a></li>
                        </ul>
                      </li>
                      <li><a href="about.html">Link Level 1</a></li>
                      <li><a href="about.html">Link Level 1</a></li>
                      <li><a href="about.html">Link Level 1</a></li>
                    </ul>
                  </li>
                  <li><a href="about-02.html">About Example 2</a></li>
                  <li><a href="contact.html">Contacts Example 1</a></li>
                  <li><a href="contact-02.html">Contacts Example 2</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="faq.html">FAQ</a></li>
                  <li><a href="coming-soon.html">Coming Soon</a></li>
                  <li><a href="page404.html">Page 404</a></li>
                  <li><a href="typography.html">Typography</a></li>
                  <li><a href="gift-cart.html">Gift Cart</a></li>
                  <li>
                    <a href="compare.html">Compare</a>
                    <ul>
                      <li><a href="compare.html">Compare 01</a></li>
                      <li><a href="compare-02.html">Compare 02</a></li>
                    </ul>
                  </li>
                  <li><a href="wishlist.html">Wishlist</a></li>
                  <li>
                    <a href="empty-search.html">Empty</a>
                    <ul>
                      <li><a href="empty-cart.html">Empty Cart</a></li>
                      <li><a href="empty-search.html">Empty Search</a></li>
                      <li><a href="empty-wishlist.html">Empty Wishlist</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="listing-left-column.html">WOMEN</a>
                <ul>
                  <li>
                    <a href="listing-left-column.html">TOPS</a>
                    <ul>
                      <li><a href="listing-left-column.html">Blouses &amp; Shirts</a></li>
                      <li><a href="listing-left-column.html">Dresses <span className="tt-badge tt-new">New</span></a></li>
                      <li>
                        <a href="listing-left-column.html">Tops &amp; T-shirts</a>
                        <ul>
                          <li><a href="listing-left-column.html">Link Level 1</a></li>
                          <li>
                            <a href="listing-left-column.html">Link Level 1</a>
                            <ul>
                              <li><a href="listing-left-column.html">Link Level 2</a></li>
                              <li>
                                <a href="listing-left-column.html">Link Level 2</a>
                                <ul>
                                  <li><a href="listing-left-column.html">Link Level 3</a></li>
                                  <li><a href="listing-left-column.html">Link Level 3</a></li>
                                  <li><a href="listing-left-column.html">Link Level 3</a></li>
                                  <li>
                                    <a href="listing-left-column.html">Link Level 3</a>
                                    <ul>
                                      <li>
                                        <a href="listing-left-column.html">Link Level 4</a>
                                        <ul>
                                          <li><a href="listing-left-column.html">Link Level 5</a></li>
                                          <li><a href="listing-left-column.html">Link Level 5</a></li>
                                          <li><a href="listing-left-column.html">Link Level 5</a></li>
                                          <li><a href="listing-left-column.html">Link Level 5</a></li>
                                          <li><a href="listing-left-column.html">Link Level 5</a></li>
                                        </ul>
                                      </li>
                                      <li><a href="listing-left-column.html">Link Level 4</a></li>
                                      <li><a href="listing-left-column.html">Link Level 4</a></li>
                                      <li><a href="listing-left-column.html">Link Level 4</a></li>
                                      <li><a href="listing-left-column.html">Link Level 4</a></li>
                                    </ul>
                                  </li>
                                  <li><a href="listing-left-column.html">Link Level 3</a></li>
                                </ul>
                              </li>
                              <li><a href="listing-left-column.html">Link Level 2</a></li>
                              <li><a href="listing-left-column.html">Link Level 2</a></li>
                              <li><a href="listing-left-column.html">Link Level 2</a></li>
                            </ul>
                          </li>
                          <li><a href="listing-left-column.html">Link Level 1</a></li>
                          <li><a href="listing-left-column.html">Link Level 1</a></li>
                          <li><a href="listing-left-column.html">Link Level 1</a></li>
                        </ul>
                      </li>
                      <li><a href="listing-left-column.html">Sleeveless Tops</a></li>
                      <li><a href="listing-left-column.html">Sweaters</a></li>
                      <li><a href="listing-left-column.html">Jackets</a></li>
                      <li><a href="listing-left-column.html">Outerwear</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="listing-left-column.html">BOTTOMS</a>
                    <ul>
                      <li><a href="listing-left-column.html">Trousers <span className="tt-badge tt-fatured">Fatured</span></a></li>
                      <li><a href="listing-left-column.html">Jeans</a></li>
                      <li><a href="listing-left-column.html">Leggings</a></li>
                      <li><a href="listing-left-column.html">Jumpsuit &amp; Shorts</a></li>
                      <li><a href="listing-left-column.html">Skirts</a></li>
                      <li><a href="listing-left-column.html">Tights</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="listing-left-column.html">ACCESSORIES</a>
                    <ul>
                      <li><a href="listing-left-column.html">Jewellery</a></li>
                      <li><a href="listing-left-column.html">Hats</a></li>
                      <li><a href="listing-left-column.html">Scarves &amp; Snoods</a></li>
                      <li><a href="listing-left-column.html">Belts</a></li>
                      <li><a href="listing-left-column.html">Bags</a></li>
                      <li><a href="listing-left-column.html">Shoes</a></li>
                      <li><a href="listing-left-column.html">Sunglasses <span className="tt-badge tt-sale">Sale 15%</span></a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="listing-left-column.html">SPECIALS</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="listing-right-column.html">MEN</a>
                <ul>
                  <li>
                    <a href="listing-right-column.html">TOPS</a>
                    <ul>
                      <li><a href="listing-right-column.html">Blouses &amp; Shirts</a></li>
                      <li><a href="listing-right-column.html">Dresses <span className="tt-badge tt-new">New</span></a></li>
                      <li>
                        <a href="listing-right-column.html">Tops &amp; T-shirts</a>
                        <ul>
                          <li><a href="listing-right-column.html">Link Level 1</a></li>
                          <li>
                            <a href="listing-right-column.html">Link Level 1</a>
                            <ul>
                              <li><a href="listing-right-column.html">Link Level 2</a></li>
                              <li>
                                <a href="listing-right-column.html">Link Level 2</a>
                                <ul>
                                  <li><a href="listing-right-column.html">Link Level 3</a></li>
                                  <li><a href="listing-right-column.html">Link Level 3</a></li>
                                  <li><a href="listing-right-column.html">Link Level 3</a></li>
                                  <li>
                                    <a href="listing-right-column.html">Link Level 3</a>
                                    <ul>
                                      <li>
                                        <a href="listing-right-column.html">Link Level 4</a>
                                        <ul>
                                          <li><a href="listing-right-column.html">Link Level 5</a></li>
                                          <li><a href="listing-right-column.html">Link Level 5</a></li>
                                          <li><a href="listing-right-column.html">Link Level 5</a></li>
                                          <li><a href="listing-right-column.html">Link Level 5</a></li>
                                          <li><a href="listing-right-column.html">Link Level 5</a></li>
                                        </ul>
                                      </li>
                                      <li><a href="listing-right-column.html">Link Level 4</a></li>
                                      <li><a href="listing-right-column.html">Link Level 4</a></li>
                                      <li><a href="listing-right-column.html">Link Level 4</a></li>
                                      <li><a href="listing-right-column.html">Link Level 4</a></li>
                                    </ul>
                                  </li>
                                  <li><a href="listing-right-column.html">Link Level 3</a></li>
                                </ul>
                              </li>
                              <li><a href="listing-right-column.html">Link Level 2</a></li>
                              <li><a href="listing-right-column.html">Link Level 2</a></li>
                              <li><a href="listing-right-column.html">Link Level 2</a></li>
                            </ul>
                          </li>
                          <li><a href="listing-right-column.html">Link Level 1</a></li>
                          <li><a href="listing-right-column.html">Link Level 1</a></li>
                          <li><a href="listing-right-column.html">Link Level 1</a></li>
                        </ul>
                      </li>
                      <li><a href="listing-right-column.html">Sleeveless Tops</a></li>
                      <li><a href="listing-right-column.html">Sweaters</a></li>
                      <li><a href="listing-right-column.html">Jackets</a></li>
                      <li><a href="listing-right-column.html">Outerwear</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="listing-right-column.html">BOTTOMS</a>
                    <ul>
                      <li><a href="listing-right-column.html">Trousers <span className="tt-badge tt-fatured">Fatured</span></a></li>
                      <li><a href="listing-right-column.html">Jeans</a></li>
                      <li><a href="listing-right-column.html">Leggings</a></li>
                      <li><a href="listing-right-column.html">Jumpsuit &amp; shorts</a></li>
                      <li><a href="listing-right-column.html">Skirts</a></li>
                      <li><a href="listing-right-column.html">Tights</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="listing-right-column.html">ACCESSORIES</a>
                    <ul>
                      <li><a href="listing-right-column.html">Jewellery</a></li>
                      <li><a href="listing-right-column.html">Hats</a></li>
                      <li><a href="listing-right-column.html">Scarves &amp; Snoods</a></li>
                      <li><a href="listing-right-column.html">Belts</a></li>
                      <li><a href="listing-right-column.html">Bags</a></li>
                      <li><a href="listing-right-column.html">Shoes</a></li>
                      <li><a href="listing-right-column.html">Sunglasses <span className="tt-badge tt-sale">Sale 15%</span></a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="index-rtl.html">RTL</a></li>
            </ul>
            <div className="mm-navbtn-names">
              <div className="mm-closebtn">Cerrar</div>
              <div className="mm-backbtn">Atrás</div>
            </div>
          </nav>

          {/*-- tt-mobile-header --  */}
          <div className="tt-mobile-header">
            <div className="container-fluid">
              <div className="tt-header-row">
                <div className="tt-mobile-parent-menu">
                  <div className="tt-menu-toggle">
                    <i className="icon-03"></i>
                  </div>
                </div>
                {/* <!-- search --> */}
                <div className="tt-mobile-parent-search tt-parent-box"></div>
                {/* <!-- /search --> */}
                {/* <!-- cart --> */}
                <div className="tt-mobile-parent-cart tt-parent-box"></div>
                {/* <!-- /cart --> */}
                {/* <!-- account --> */}
                <div className="tt-mobile-parent-account tt-parent-box"></div>
                {/* <!-- /account --> */}
                {/* <!-- currency --> */}
                <div className="tt-mobile-parent-multi tt-parent-box"></div>
                {/* <!-- /currency --> */}
              </div>
            </div>
            <div className="container-fluid tt-top-line">
              <div className="row">
                <div className="tt-logo-container">
                  {/* <!-- mobile logo --> */}
                  <a className="tt-logo tt-logo-alignment" href="index.html"><img src="images/custom/logo.png" alt="30" /></a>
                  {/* <!-- /mobile logo --> */}
                </div>
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
                          <li className="dropdown tt-megamenu-col-02 selected ">
                            <a href="/" onClick={(e) => { e.preventDefault(); this.changeMenu(0) }} >INICIO</a>
                            {/* <button type="button" onClick={() => this.ChangeMenu(1)} class="btn btn-link">INICIO</button> */}
                          </li>
                          <li className="dropdown megamenu">
                            {/* <a href="listing-collection.html">DROGUERIA VIRTUAL</a> */}
                            <a href="/" onClick={(e) => { e.preventDefault(); this.changeMenu(1) }} >DROGUERIA VIRTUAL</a>
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

                          <li className="dropdown tt-megamenu-col-01">
                            <a href="blog-listing-without-col.html">CUIDADO DEL BEBÉ</a>

                          </li>

                          <li className="dropdown tt-megamenu-col-01">
                            <a href="portfolio-col-wide-four.html">DICCIONARIO</a>

                          </li>

                          <li className="dropdown tt-megamenu-col-01">
                            <a href="about.html">SUCURSALES</a>

                          </li>

                          <li >
                            <a href="http://clubvidasana.co/" target="_blank" rel="noopener noreferrer" className="btn-club-vida ">CLUB VIDA SANA</a>
                          </li>


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
                      <button className="tt-dropdown-toggle">
                        <i className="icon-f-24" />
                        {/* <i className="fas fa-map-marker-alt"></i> */}
                        {/* <img src="assets/location.png" alt="location" className="icon-menu-user"/> */}
                      </button>
                      <div className="tt-dropdown-menu">
                        <div className="container">
                          <form>
                            <div className="tt-col">
                              <input type="text" className="tt-search-input" placeholder="Search Products..." />
                              <button className="tt-btn-search" type="submit" />
                            </div>
                            <div className="tt-col">
                              <button className="tt-btn-close icon-g-80" />
                            </div>
                            <div className="tt-info-text">
                              What are you Looking for?
                          </div>
                            <div className="search-results">
                              <ul>
                                <li>
                                  <a href="product.html">
                                    <div className="thumbnail"><img src="images/loader.svg" data-src="images/product/product-03.jpg" alt="21" /></div>
                                    <div className="tt-description">
                                      <div className="tt-title">Flared Shift Bag</div>
                                      <div className="tt-price">
                                        <span className="new-price">$14</span>
                                        <span className="old-price">$24</span>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="product.html">
                                    <div className="thumbnail"><img src="images/loader.svg" data-src="images/product/product-02.jpg" alt="22" /></div>
                                    <div className="tt-description">
                                      <div className="tt-title">Flared Shift Bag</div>
                                      <div className="tt-price">
                                        $24
                                    </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="product.html">
                                    <div className="thumbnail"><img src="images/loader.svg" data-src="images/product/product-01.jpg" alt="23" /></div>
                                    <div className="tt-description">
                                      <div className="tt-title">Flared Shift Bag</div>
                                      <div className="tt-price">
                                        $14
                                    </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="product.html">
                                    <div className="thumbnail"><img src="images/loader.svg" data-src="images/product/product-04.jpg" alt="24" /></div>
                                    <div className="tt-description">
                                      <div className="tt-title">Flared Shift Bag</div>
                                      <div className="tt-price">
                                        $24
                                    </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="product.html">
                                    <div className="thumbnail"><img src="images/loader.svg" data-src="images/product/product-05.jpg" alt="25" /></div>
                                    <div className="tt-description">
                                      <div className="tt-title">Flared Shift Bag</div>
                                      <div className="tt-price">
                                        $17
                                    </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="product.html">
                                    <div className="thumbnail"><img src="images/loader.svg" data-src="images/product/product-06.jpg" alt="26" /></div>
                                    <div className="tt-description">
                                      <div className="tt-title">Flared Shift Bag</div>
                                      <div className="tt-price">
                                        $20
                                    </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                              <button type="button" className="tt-view-all">View all products</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>


                  {/* tt-account */}
                  <div className="tt-desctop-parent-account tt-parent-box">
                    <div className="tt-account tt-dropdown-obj">
                      <button className="tt-dropdown-toggle" data-tooltip="My Account" data-tposition="bottom">
                        {/* <i className="icon-f-94" /> */}
                        <i className="far fa-user-circle"></i>
                      {/* <img src="assets/user.png" alt="user" className="icon-menu-user"/> */}
                      </button>
                      <div className="tt-dropdown-menu">
                        <div className="tt-mobile-add">
                          <button className="tt-close">Close</button>
                        </div>
                        <div className="tt-dropdown-inner">
                          <ul>
                            <li><a href="login.html"><i className="icon-f-94" />Account</a></li>
                            <li><a href="wishlist.html"><i className="icon-n-072" />Wishlist</a></li>
                            <li><a href="compare.html"><i className="icon-n-08" />Compare</a></li>
                            <li><a href="page404.html"><i className="icon-f-68" />Check Out</a></li>
                            <li><a href="login.html"><i className="icon-f-76" />Sign In</a></li>
                            <li><a href="page404.html"><i className="icon-f-77" />Sign Out</a></li>
                            <li><a href="create-account.html"><i className="icon-f-94" />Register</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>


                  {/* tt-cart */}
                  <div className="tt-desctop-parent-cart tt-parent-box">
                    <div className="tt-cart tt-dropdown-obj" data-tooltip="Cart" data-tposition="bottom">
                      <button className="tt-dropdown-toggle">
                        <i className="icon-f-47" />
                        {/* <i className="fas fa-shopping-cart"></i> */}
                        {/* <img src="assets/car.png" alt="car" className="icon-menu-user"/> */}

                        <span className="tt-badge-cart">2</span>
                      </button>
                      <div className="tt-dropdown-menu">
                        <div className="tt-mobile-add">
                          <h6 className="tt-title">SHOPPING CART</h6>
                          <button className="tt-close">Close</button>

                        </div>
                        <div className="tt-dropdown-inner">
                          <div className="tt-cart-layout">
                            {/* layout emty cart */}
                            {/* <a href="empty-cart.html" class="tt-cart-empty">
											<i class="icon-f-39"></i>
											<p>No Products in the Cart</p>
										</a> */}
                            <div className="tt-cart-content">
                              <div className="tt-cart-list">
                                <div className="tt-item">
                                  <a href="product.html">
                                    <div className="tt-item-img">

                                      <img src="images/loader.svg" data-src="images/product/product-01.jpg" alt="27" />
                                    </div>
                                    <div className="tt-item-descriptions">
                                      <h2 className="tt-title">Flared Shift Dress</h2>
                                      <ul className="tt-add-info">
                                        <li>Yellow, Material 2, Size 58,</li>
                                        <li>Vendor: Addidas</li>
                                      </ul>
                                      <div className="tt-quantity">1 X</div> <div className="tt-price">$12</div>
                                    </div>
                                  </a>
                                  <div className="tt-item-close">
                                    <a href="/" className="tt-btn-close" > </a>
                                  </div>
                                </div>
                                <div className="tt-item">
                                  <a href="product.html">
                                    <div className="tt-item-img">
                                      <img src="images/loader.svg" data-src="images/product/product-02.jpg" alt="28" />
                                    </div>
                                    <div className="tt-item-descriptions">
                                      <h2 className="tt-title">Flared Shift Dress</h2>
                                      <ul className="tt-add-info">
                                        <li>Yellow, Material 2, Size 58,</li>
                                        <li>Vendor: Addidas</li>
                                      </ul>
                                      <div className="tt-quantity">1 X</div> <div className="tt-price">$18</div>
                                    </div>
                                  </a>
                                  <div className="tt-item-close">
                                    <a href="/" className="tt-btn-close" > </a>
                                  </div>
                                </div>
                              </div>
                              <div className="tt-cart-total-row">
                                <div className="tt-cart-total-title">SUBTOTAL:</div>
                                <div className="tt-cart-total-price">$324</div>
                              </div>
                              <div className="tt-cart-btn">
                                <div className="tt-item">
                                  <a href="/" className="btn">PROCEED TO CHECKOUT</a>
                                </div>
                                <div className="tt-item">
                                  <a href="shopping_cart_02.html" className="btn-link-02 tt-hidden-mobile">View Cart</a>
                                  <a href="shopping_cart_02.html" className="btn btn-border tt-hidden-desctope">VIEW CART</a>
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

          {/* -- stuck nav -- */}
          <div className="tt-stuck-nav">
            <div className="container">
              <div className="tt-header-row ">
                <div className="tt-stuck-parent-menu" />
                <div className="tt-stuck-parent-search tt-parent-box" />
                <div className="tt-stuck-parent-cart tt-parent-box" />
                <div className="tt-stuck-parent-account tt-parent-box" />
                <div className="tt-stuck-parent-multi tt-parent-box" />
              </div>
            </div>
          </div>

        </header>

        {/* Seleccion de */}
        <div className="tt-breadcrumb">
          <div className="container">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li>Listing</li>
            </ul>
          </div>
        </div>

        {/* Sale */}

        <div id="tt-Sale">
          <div className="container-indent nomargin" style={{backgroundColor:'#f4f4f4'}}>
            <div className={this.state.seletedMenu < 1 ? "" : "container"}>

              {/* menu inicio */}
              {this.state.seletedMenu === 0 && <SliderComponent view={0}/>}

              {/* menu drogueria */}
              {this.state.seletedMenu === 1 &&
                <div className="row">

                  <div className="col-md-6">
                    <a href="listing-left-column.html" className="tt-promo-box tt-one-child hover-type-2">
                      <img src="images/promo/index-promo-img-07.jpg" alt="img3" className="img-col-drogueria" />
                      <div className="tt-description">
                        <div className="tt-description-wrapper">
                          <div className="tt-title-small-drogueria ">CUIDADO DEL BEBÉ</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-12">
                        <a href="listing-left-column.html" className="tt-promo-box tt-one-child hover-type-2">
                          <img src="images/promo/index-promo-img-01.jpg" alt="img1" className="imgs-cols-drogueria" />
                          <div className="tt-description">
                            <div className="tt-description-wrapper">
                              <div className="tt-title-small-drogueria ">CUIDADO DE LA PIEL</div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-12" style={{ marginBottom: 20}}>
                        <a href="listing-left-column.html" className="tt-promo-box tt-one-child hover-type-2">
                          <img src="images/promo/index-promo-img-02.jpg" alt="img2" className="imgs-cols-drogueria" />
                          <div className="tt-description">
                            <div className="tt-description-wrapper">
                              <div className="tt-title-small-drogueria ">CUIDADO!</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              }

              {/* menu cuidado bebe */}
              {this.state.seletedMenu === 3 &&
                <div className="row">
                  cuidado del bebe
                </div>
              }

              {/* menu diccionario */}
              {this.state.seletedMenu === 4 &&
                <div className="row">
                  cuidado del bebe
                </div>
              }



            </div>
          </div>
          <br />


          {/* ----- */}

          <div className="container-indent0">
            <div className="container">
              <div className="row tt-layout-promo-box">
                <div className="col-sm-12 col-md-6">
                  <div className="row">
                    <div className="col-sm-6">
                      <a href="listing-left-column.html" className="tt-promo-box tt-one-child hover-type-2">
                        <img src="images/loader.svg" data-src="images/promo/index-promo-img-01.jpg" alt="img1" />
                        <div className="tt-description">
                          <div className="tt-description-wrapper">
                            <div className="tt-background" />
                            <div className="tt-title-small">SALE</div>
                          </div>
                        </div>
                      </a>
                      <a href="listing-left-column.html" className="tt-promo-box tt-one-child hover-type-2">
                        <img src="images/loader.svg" data-src="images/promo/index-promo-img-02.jpg" alt="img2" />
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
                        <img src="images/loader.svg" data-src="images/promo/index-promo-img-03.jpg" alt="img3" />
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
                        <img src="images/loader.svg" data-src="images/promo/index-promo-img-04.jpg" alt="img4" />
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
                        <img src="images/loader.svg" data-src="images/promo/index-promo-img-05.jpg" alt="img5" />
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
                        <img src="images/loader.svg" data-src="images/promo/index-promo-img-06.jpg" alt="img6" />
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
            </div>
          </div>

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
