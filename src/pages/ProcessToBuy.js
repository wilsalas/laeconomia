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
        dispatch({ type: "STEP_ACTIVE", step: localStorage.getItem("usi") ? 2 : 1 })
    }, [dispatch]);

    const funRenderProgressBar = () => {
        return (
            <>
                <ul className="progressbar">
                    <li className={state.step >= 1 ? "progressbar_active" : ""}><p className="text-progress"> Iniciar Sesión</p> </li>
                    <li className={state.step >= 2 ? "progressbar_active" : ""}><p className="text-progress">Información de Facturación</p></li>
                    <li className={state.step >= 3 ? "progressbar_active" : ""}><p className="text-progress">Selecciona Medio de Pago</p></li>
                    <li className={state.step >= 4 ? "progressbar_active" : ""}><p className="text-progress">Resumen de Compra</p></li>
                </ul>
            </>
        )
    }

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
        return render;
    }

    return (
        <>
            <Container fluid>
                <div className="mt-5">
                    {funRenderProgressBar()}
                    {funRenderSteps()}
                </div>
                <InterestContentComponent />
            </Container>
            <BannerComponent />
            <ModalAdress getProfile={getProfile} />
        </>
    );
}
