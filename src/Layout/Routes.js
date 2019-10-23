import React, { Component } from 'react';
import Bedview from '../Wardview/Bedview'
import Historyview from '../Content/Historyview'
import Patientviewlayout from '../Patientview/Patientviewlayout'
import Systemcontrol from '../Content/Systemcontrol'
import { Route } from 'react-router-dom';

class Routes extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Bedview} />
                <Route path="/history" component={Historyview} />
                <Route path="/system" component={Systemcontrol} />
                <Route path="/patient" component={Patientviewlayout} />
            </div>
        );
    }
}

export default Routes;