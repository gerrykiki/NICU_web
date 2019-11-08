import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter ,Route,Redirect} from 'react-router-dom';
import Layoutframe from './Layout/Layout'
import Loginview from './Layout/Loginview'

ReactDOM.render(
    <BrowserRouter>
            <Route exact path="/" component={App} />
            <Redirect from={'/'} to={"/login"} />
            <Route path="/nicu"  component={Layoutframe} />
            <Route path="/login" component={Loginview} />
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
