import React, { Component } from 'react';
import Vitalsign from './Vitalsign';
import Basicinformation from './Basicinformation';
import Controlbar from './Controlbar';
import IOpage from './iopage'
import Labviewlayout from './Labview'
import Nonlabviewlayout from './Nonlabview'
import RTviewlayout from './RTview'
import RTbreathe from './RTbreathe'
import Prescriptionorderlayout from './Prescriptionorder'
import Treatmentorderlayout from './Treatmentorder'
import Schedulelayout from './Schedule'
import Todolayout from './Todo'


class Crosssectionlayout extends Component {

    render() {
        const crosssectioncontrollist = [
            {
                "name": "vital&I/O",
                "scrollpoint": "vitalsignIO"
            },
            {
                "name": "Lab",
                "scrollpoint": "lab"
            },
            {
                "name": "RT",
                "scrollpoint": "rt"
            },
            {
                "name": "Order",
                "scrollpoint": "order"
            },
            {
                "name": "Schedule&To Do List",
                "scrollpoint": "schedule"
            }
        ]
        return (
            <div>
                <Controlbar btnlist={crosssectioncontrollist}></Controlbar>
                <div style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                    <Basicinformation></Basicinformation>
                    <div id={"vitalsignIO"} style={{ display: "grid", gridTemplateColumns: "50% 50%", gridGap: "10px" }}>
                        <Vitalsign></Vitalsign>
                        <IOpage></IOpage>
                    </div>
                    <div id={"lab"} style={{ display: "grid", gridTemplateColumns: "50% 50%", gridGap: "10px" }}>
                        <Labviewlayout></Labviewlayout>
                        <Nonlabviewlayout></Nonlabviewlayout>
                    </div>
                    <div id={"rt"} style={{ display: "grid", gridTemplateColumns: "50% 50%", gridGap: "10px" }}>
                        <RTviewlayout></RTviewlayout>
                        <RTbreathe></RTbreathe>
                    </div>
                    <div id={"order"} style={{ display: "grid", gridTemplateColumns: "50% 50%", gridGap: "10px" }}>
                        <Prescriptionorderlayout></Prescriptionorderlayout>
                        <Treatmentorderlayout></Treatmentorderlayout>
                    </div>
                    <div id={"schedule"}>
                        <Schedulelayout></Schedulelayout>
                    </div>
                    <div>
                        <Todolayout></Todolayout>
                    </div>
                </div>
            </div>
        );
    }
}

export default Crosssectionlayout;