import React from 'react';

export default () => {
    return (
        <>
            <footer>
                <div className="tt-footer-default tt-color-scheme-02">
                    <div className="container">
                        <div className="row">
                            {/* <div className="col-12 col-md-9">
                                <div className="tt-newsletter-layout-01">
                                    <div className="tt-newsletter">
                                        <div className="tt-mobile-collapse">
                                            <h4 className="tt-collapse-title footer-text-title" >
                                                ESTÁ EN CONTACTO CON NOSOTROS
                                            </h4>
                                            <div className="tt-collapse-content">
                                                <form className="form-inline form-default" action="/">
                                                    <div className="form-group">
                                                        <input type="text" name="email" className="form-control" placeholder="Ingresa tu correo" />
                                                        <button className="btn btn-contact">
                                                            SUSCRIBIRSE
                                                    </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-md-auto mx-auto">
                                <ul className="tt-social-icon">
                                   <span className="mr-3">Síguenos</span>
                                    <li><a className="icon-g mr-3" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/drogueriaslaeconomia" > <i className="fab fa-facebook-f"></i> </a></li>
                                    <li><a className="icon-g mr-3" target="_blank" rel="noopener noreferrer" href="https://twitter.com/laeconomiadro" > <i className="fab fa-twitter"></i> </a></li>
                                    <li><a className="icon-g mr-3" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/droguerialaeconomia/" > <i className="fab fa-instagram"></i> </a></li>
                                    <li><a className="icon-g mr-3" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/DeogueriaLaEconomia" > <i className="fab fa-youtube"></i> </a></li>
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
                                            <li><a href="/information/about">Quiénes somos</a></li>
                                            <li><a href="/information/history">Misión, Visión e Historia</a></li>
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
                                            <li><a href="/information/privacy">Aviso de privacidad</a></li>
                                            <li><a href="/information/terms">Políticas y términos de uso</a></li>
                                            <li><a href="/information/hebeasdata">Habeas data</a></li>
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
                                            <li>
                                                <a target="_blank" rel="noopener noreferrer" href="http://clubvidasana.co/registrate/">¡Haz parte del club
                                                    <span className="badge badge-primary ml-1">Registrarse</span>
                                                </a>
                                            </li>
                                            <li><a target="_blank" rel="noopener noreferrer" href="http://clubvidasana.co/informacion/">Información Del Club</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href="http://clubvidasana.co/aliados/">Beneficios Del Club</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="tt-newsletter">
                                    <div className="tt-mobile-collapse">
                                        <h4 className="tt-collapse-title tt-collapse-title-blue">
                                            CONTÁCTO
                                        </h4>
                                        <div className="tt-collapse-content">
                                            <address>
                                                <p>Contactenos: <a className="text-information-blue" href="mailto:habeasdata@eticos.com">habeasdata@eticos.com</a></p>
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
                                <div className="tt-box-copyright">
                                    © Drogueria La Economía. Todos los derechos reservados
                                </div>
                            </div>
                            <div className="col-md-4">
                                {/* payment-list */}
                                <img className="icon-payments" src="/assets/visa.png" alt="cobru" />
                                <img className="icon-payments" src="/assets/master_card.png" alt="cobru" />
                                <img className="icon-payments" src="/assets/cobru.png" alt="cobru" />
                                <img className="icon-payments" src="/assets/american_express.png" alt="cobru" />
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
            {/* link top back  */}
            <a href="/" className="tt-back-to-top">Volver arriba</a>
        </>
    )
}