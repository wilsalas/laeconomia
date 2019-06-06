import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import SearchComponent from '../components/Search';
import HeaderComponent from '../components/Header';
import LoginComponent from '../components/Login';
import RegisterComponent from '../components/Register';
import FooterComponent from '../components/Footer';
import '../styles/styles.css';

export default class Account extends Component {

    render() {
        return (
            <Fragment>
                <SearchComponent />
                <HeaderComponent />
                {this.props.match.params.page === "login" && <LoginComponent />}
                {this.props.match.params.page === "register" && <RegisterComponent />}
                {(this.props.match.params.page !== "login" && this.props.match.params.page !== "register") && <Redirect to={'/'} />}
                <FooterComponent />
            </Fragment>
        );
    }
}
