import React, { useState, useEffect } from 'react';
import {
    Container
} from 'reactstrap';
import {
    StepLoginComponent,
    StepFacturationComponent,
    StepPaymentMethodComponent,
    StepSumaryBuyComponent
} from '../components/Steps';
import { InterestContentComponent } from '../components/ContentProducts';
import BannerComponent from '../components/Banner';
import { ModalAdress } from '../components/PopUp';
import { useGlobal } from '../managers/store/Context';


export default function ProcessToBuy() {
    const [getProfile, setProfile] = useState({});
    const [state, dispatch] = useGlobal();


    useEffect(() => {
        if (localStorage.getItem("usi")) {
            setProfile(JSON.parse(atob(localStorage.getItem("usi"))));
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem("usi")) {
            dispatch({ type: "STEP_ACTIVE", step: 2 })
        } else {
            dispatch({ type: "STEP_ACTIVE", step: 1 })
        }
    }, [dispatch])

    console.log(state.step);


    const funRenderSteps = () => {
        let render = null;
        switch (state.step) {
            case 1:
                render = <StepLoginComponent getProfile={getProfile} />
                break;
            case 2:
                render = <StepFacturationComponent getProfile={getProfile} />
                break;
            case 3:
                render = <StepPaymentMethodComponent getProfile={getProfile} />
                break;
            case 4:
                render = <StepSumaryBuyComponent getProfile={getProfile} />
                break;
            default:
                break;
        }
        return render
    }

    return (
        <>
            <Container fluid>
                <div className="mt-5">
                    <ul className="progressbar">
                        <li className="progressbar_active"> <p className="text-progress"> Iniciar Sesión</p> </li>
                        <li ><p className="text-progress">Información de Facturación</p></li>
                        <li ><p className="text-progress">Selecciona Medio de Pago</p></li>
                        <li><p className="text-progress">Resumen de Compra</p></li>
                    </ul>
                    {funRenderSteps()}
                </div>
                <InterestContentComponent getProfile={getProfile} />
            </Container>
            <BannerComponent />
            <ModalAdress getProfile={getProfile} />
        </>
    );
}
