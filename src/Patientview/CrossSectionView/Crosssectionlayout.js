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
        const crosssectioncontrollist = ["vital&I/O", "Lab", "RT", "Order", "Schedule&To Do List"]
        return (
            <div>
                <Controlbar btnlist={crosssectioncontrollist}></Controlbar>
                <div style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                    <Basicinformation></Basicinformation>
                    <div style={{ display: "grid", gridTemplateColumns: "50% 50%", gridGap: "10px" }}>
                        <Vitalsign></Vitalsign>
                        <IOpage></IOpage>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "50% 50%", gridGap: "10px" }}>
                        <Labviewlayout></Labviewlayout>
                        <Nonlabviewlayout></Nonlabviewlayout>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "50% 50%", gridGap: "10px" }}>
                        <RTviewlayout></RTviewlayout>
                        <RTbreathe></RTbreathe>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "50% 50%", gridGap: "10px" }}>
                        <Prescriptionorderlayout></Prescriptionorderlayout>
                        <Treatmentorderlayout></Treatmentorderlayout>
                    </div>
                    <div>
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