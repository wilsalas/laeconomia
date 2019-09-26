import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/styles/styles.css';
import App from './pages/App';
import Account from './pages/Account';
import Information from './pages/Information';
import DrogueryVirtual from './pages/DrogueryVirtual';
import BaCare from './pages/BaCare';
import Dictionary from './pages/Dictionary';
import Subsidiary from './pages/Subsidiary';
import CartToBuy from './pages/CartToBuy';
import ProcessToBuy from './pages/ProcessToBuy';
import ProductDetail from './pages/ProductDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import { ModalLocation, ModalRefreshTokenLogin } from './components/PopUp';
import * as serviceWorker from './serviceWorker';
import { RootProvider } from './managers/store/Context';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// Config routes app
ReactDOM.render(
    <Router>
        <>
            <RootProvider>
                <Header />
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route path='/babycare' component={BaCare} />
                    <Route path='/dictionary' component={Dictionary} />
                    <Route path='/subsidiary' component={Subsidiary} />
                    <Route path='/buys' component={CartToBuy} />
                    <Route path='/processbuy' component={ProcessToBuy} />
                    <Route path='/detail' component={ProductDetail} />
                    <Route path='/account/:page' component={Account} />
                    <Route path='/information/:page' component={Information} />
                    <Route path='/droguery/:code?/:type?' component={DrogueryVirtual} />
                    <Route render={() => <Redirect to="/" />} />
                </Switch >
                <Footer />
                <ModalLocation />
                <ModalRefreshTokenLogin />
            </RootProvider>
        </>
    </Router>
    , document.getElementById('root'));
serviceWorker.unregister();
