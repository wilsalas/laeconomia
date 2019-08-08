import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/styles/styles.css';
import App from './pages/App';
import Account from './pages/Account';
import DrogueryVirtual from './pages/DrogueryVirtual';
import BaCare from './pages/BaCare';
import Dictionary from './pages/Dictionary';
import Subsidiary from './pages/Subsidiary';
import CartToBuy from './pages/CartToBuy';
import ProcessToBuy from './pages/ProcessToBuy';
import ProductDetail from './pages/ProductDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

/*function to authenticate users*/
const Authenticated = (type, session = localStorage.getItem('fakeAuth')) => {
    return type === 'public' && session !== null ? <Redirect to={'/home'} /> :
        type === 'private' && session === null ? <Redirect to={'/'} /> :
            type === 'compare' ? session : null;
}

/*function logout app */
const Logout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
        localStorage.removeItem('fakeAuth');
        window.location.href = "/";
    }
}

/*function render components app */
const RouteProvider = ({ component: Component, ...objectPath }) => (
    <Route  {...objectPath} render={props => <Component {...props} fakeAuth={Authenticated} logout={Logout} />} />
);

// Config routes app
ReactDOM.render(
    <Router>
        <>
            <Header />
            <Switch>
                <RouteProvider exact path='/' component={App} />
                <RouteProvider path='/droguery' component={DrogueryVirtual} />
                <RouteProvider path='/babycare' component={BaCare} />
                <RouteProvider path='/dictionary' component={Dictionary} />
                <RouteProvider path='/subsidiary' component={Subsidiary} />
                <RouteProvider path='/account/:page' component={Account} />
                <RouteProvider path='/buys' component={CartToBuy} />
                <RouteProvider path='/processbuy' component={ProcessToBuy} />
                <RouteProvider path='/detail' component={ProductDetail} />
                <Route render={() => <Redirect to="/" />} />
            </Switch >
            <Footer />
        </>
    </Router>
    , document.getElementById('root'));
serviceWorker.unregister();
