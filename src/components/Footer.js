import React from 'react';

export default () => {
    return (
        <footer>
            <div className="tt-footer-default tt-color-scheme-02">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <div className="tt-newsletter-layout-01">
                                <div className="tt-newsletter">
                                    <div className="tt-mobile-collapse">
                                        <h4 className="tt-collapse-title">
                                            ESTÁ EN CONTACTO CON NOSOTROS
                                        </h4>
                                        <div className="tt-collapse-content">
                                            <form id="newsletterform" className="form-inline form-default" method="post" noValidate="novalidate" action="#">
                                                <div className="form-group">
                                                    <input type="text" name="email" className="form-control" placeholder="Ingresa tu correo" />
                                                    <button type="submit" className="btn btn-contact">
                                                        SUSCRIBIRSE
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-auto">
                            <ul className="tt-social-icon">
                                <li><a className="icon-g" target="_blank" href="/" > <i className="fab fa-facebook-f"></i> </a></li>
                                <li><a className="icon-g" target="_blank" href="/" > <i className="fab fa-twitter"></i> </a></li>
                                <li><a className="icon-g" target="_blank" href="/" > <i className="fab fa-instagram"></i> </a></li>
                                <li><a className="icon-g" target="_blank" href="/" > <i className="fab fa-youtube"></i> </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="tt-footer-col tt-color-scheme-01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-2 col-xl-3">
                            <div className="tt-mobile-collapse">
                                <h4 className="tt-collapse-title tt-collapse-title-blue">
                                    LA EMPRESA
                                </h4>
                                <div className="tt-collapse-content">
                                    <ul className="tt-list">
                                        <li><a href="listing-collection.html">Quiénes somos</a></li>
                                        <li><a href="listing-collection.html">Nuestra misión</a></li>
                                        <li><a href="listing-collection.html">Nuestra visíon</a></li>
                                        <li><a href="listing-collection.html">Nuestra historia</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 col-xl-3">
                            <div className="tt-mobile-collapse">
                                <h4 className="tt-collapse-title tt-collapse-title-blue">
                                    INFORMACIÓN
                                </h4>
                                <div className="tt-collapse-content">
                                    <ul className="tt-list">
                                        <li><a href="account_order.html">Aviso de privacidad</a></li>
                                        <li><a href="page404.html">Políticas y términos de uso</a></li>
                                        <li><a href="page404.html">Habeas data</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <div className="tt-mobile-collapse">
                                <h4 className="tt-collapse-title tt-collapse-title-blue">
                                    CLUB VIDA SANA
                                </h4>
                                <div className="tt-collapse-content">
                                    <ul className="tt-list">

                                        <li><a href="account_order.html">¡Haz parte del club <span className="badge badge-primary">Registrarse</span></a></li>
                                        <li><a href="page404.html">Políticas y términos de uso</a></li>
                                        <li><a href="page404.html">Habeas data</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <div className="tt-newsletter">
                                <div className="tt-mobile-collapse">
                                    <h4 className="tt-collapse-title tt-collapse-title-blue">
                                        CONTACTS
                                    </h4>
                                    <div className="tt-collapse-content">
                                        <address>

                                            <p><span>Contactenos:</span> <a href="mailto:info@mydomain.com">hola@mydomain.com</a></p>
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="tt-footer-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            {/* <div className="tt-col-item tt-logo-col"> */}
                            {/* logo */}
                            {/* <a className="tt-logo tt-logo-alignment" href="index.html">
                                    <img src="images/custom/logo.png" alt="70" />
                                </a> */}
                            {/* /logo */}
                            {/* </div> */}

                            {/* copyright */}
                            <div className="tt-box-copyright">
                                © Trixel S.A.S. 2019. Todos los derechos reservados
                                </div>
                            {/* /copyright */}

                        </div>
                        <div className="col-md-4">
                         
                                {/* payment-list */}
                                <img className="icon-payments" src="assets/visa.png" alt="cobru" />
                                <img className="icon-payments" src="assets/master_card.png" alt="cobru" />
                                <img className="icon-payments" src="assets/cobru.png" alt="cobru" />
                                <img className="icon-payments" src="assets/american_express.png" alt="cobru" />
                                {/* /payment-list */}
                           
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}