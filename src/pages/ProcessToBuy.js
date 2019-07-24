import React, { Component, Fragment } from 'react';
import {
    Container
} from 'reactstrap';
import {
    StepLoginComponent,
    StepFacturationComponent,
    StepPaymentMethodComponent,
    StepSumaryBuyComponent
} from '../components/Steps';
import {InterestContentComponent } from '../components/ContentProducts';
import BannerComponent from '../components/Banner';
import '../styles/styles.css';


class ProcessToBuy extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid>

                    <div className="mt-5">

                        <ul className="progressbar">
                            <li className="progressbar_active"> <p className="text-progress"> Iniciar Sesión</p> </li>
                            <li className="progressbar_active"><p className="text-progress">Información de Facturación</p></li>
                            <li className="progressbar_active"><p className="text-progress">Selecciona Medio de Pago</p></li>
                            <li><p className="text-progress">Resumen de Compra</p></li>
                        </ul>

                        {/* Step 1  */}
                        {/* <StepLoginComponent /> */}


                        {/* Step 2  */}
                        {/* <StepFacturationComponent /> */}



                        {/* Step 3  */}
                        {/* <StepPaymentMethodComponent /> */}




                        {/* Step 4  */}
                        <StepSumaryBuyComponent />

                    </div>
                    <InterestContentComponent />
                </Container>

                <BannerComponent />
            </Fragment>
        );
    }
}

export default ProcessToBuy