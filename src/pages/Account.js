import React from 'react';
import { Redirect } from 'react-router-dom';
import { LoginComponent, RegisterComponent } from '../components/ContentForm';

export default function Account(props) {
    return (
        <>
            {props.match.params.page === "login" && <LoginComponent isLoginOrRegister/>}
            {props.match.params.page === "register" && <RegisterComponent />}
            {(props.match.params.page !== "login" && props.match.params.page !== "register") && <Redirect to={'/'} />}
        </>
    );
}
