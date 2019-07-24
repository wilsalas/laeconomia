import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import {LoginComponent, RegisterComponent} from '../components/ContentForm';
import '../styles/styles.css';

export default class Account extends Component {

    render() {
        return (
            <Fragment>
                {this.props.match.params.page === "login" && <LoginComponent />}
                {this.props.match.params.page === "register" && <RegisterComponent />}
                {(this.props.match.params.page !== "login" && this.props.match.params.page !== "register") && <Redirect to={'/'} />}
            </Fragment>
        );
    }
}
