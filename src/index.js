import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import DrogueryVirtual from './pages/DrogueryVirtual';
import BaCare from './pages/BaCare';
// import 'bootstrap/dist/css/bootstrap.min.css';
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
        <div>
            <Switch>
                <RouteProvider exact path='/' component={App} />
                <RouteProvider path='/droguery' component={DrogueryVirtual} />
                <RouteProvider path='/babycare' component={BaCare} />
                <Route render={() => <Redirect to="/" />} />
            </Switch >
        </div>
    </Router>
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
