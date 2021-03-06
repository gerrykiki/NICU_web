import React from 'react';
import Bedview from '../Wardview/Bedview'
import Historyview from '../Content/Historyview'
import Patientviewlayout from '../Patientview/Patientviewlayout'
import Systemcontrol from '../Content/Systemcontrol'
import Layoutframe from './Layout'
import Loginview from './Login'
import { Route, Switch } from 'react-router-dom';


const Routes = () => {
    return (
        <Switch>
            <Route path="/nicu/ward" component={Bedview} />
            <Route path="/nicu/history" component={Historyview} />
            <Route path="/nicu/system" component={Systemcontrol} />
            <Route path="/nicu/patient" component={Patientviewlayout} />
        </Switch>
    );
};

const Loginroutes = () => {
    return (
        <div>
            <Route path="/nicu"  component={Layoutframe} />
            <Route path="/login" component={Loginview} />
        </div>
    );
};

export { Routes, Loginroutes };