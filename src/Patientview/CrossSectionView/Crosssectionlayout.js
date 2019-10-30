import React, { Component } from 'react';
import Vitalsign from './Vitalsign';
import Controlbar from '../Controlbar';
import IOpage from './iopage'
import Labviewlayout from './Labview'
import Nonlabviewlayout from './Nonlabview'
import RTviewlayout from './RTview'
import RTbreathe from './RTbreathe'
import Prescriptionorderlayout from '../Prescriptionorder'
import Treatmentorderlayout from '../Treatmentorder'
import Crossection_schedule from './Crosssectionschedule'
import Crosssection_todo from './Crosssection_todo'


class Crosssectionlayout extends Component {
    state = {
        Cross_item: [0, 1, 2, 3, 4, 5],
        PickerDate: new Date().getTime()
    }
    callbackFunction = (item_array) => {
        console.log(item_array)
        this.setState(
            {
                Cross_item: item_array
            }
        )
    }

    callbackDateFunction = (Datetime) => {
        console.log(Datetime)
        this.setState(
            {
                PickerDate: Datetime
            }
        )
    }

    display_item(number) {
        const item = this.state.Cross_item
        var filter = item.some(function (item, index, array) {
            return item === number
        });
        console.log(filter)
        return filter
    }
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
        const { userdata } = this.props
        console.log(this.state.Cross_item)
        console.log(this.state.PickerDate)
        return (
            <div>
                <Controlbar Datestring={this.state.PickerDate} parentDateCallback={this.callbackDateFunction} parentCallback={this.callbackFunction} userdata={userdata} btnlist={crosssectioncontrollist} item_array={this.state.Cross_item}></Controlbar>
                <div style={{ maxHeight: '75vh', overflowY: 'auto', height: "75vh" }}>
                    <div id={"vitalsignIO"} style={this.display_item(0) ? { display: "grid", gridTemplateColumns: "2fr 1fr", gridGap: "10px" } : { display: "none" }}>
                        <Vitalsign userdata={userdata} defaultdate={this.state.PickerDate}></Vitalsign>
                        <IOpage userdata={userdata}></IOpage>
                    </div>
                    <div id={"lab"} style={this.display_item(1) ? { display: "grid", gridTemplateColumns: "50% 50%", gridGap: "10px" } : { display: "none" }}>
                        <Labviewlayout userdata={userdata}></Labviewlayout>
                        <Nonlabviewlayout></Nonlabviewlayout>
                    </div>
                    <div id={"rt"} style={this.display_item(2) ? { display: "grid", gridTemplateColumns: "50% 50%", gridGap: "10px" } : { display: "none" }}>
                        <RTviewlayout></RTviewlayout>
                        <RTbreathe></RTbreathe>
                    </div>
                    <div id={"order"} style={this.display_item(3) ? { display: "grid", gridTemplateColumns: "50% 50%", gridGap: "10px" } : { display: "none" }}>
                        <Prescriptionorderlayout searchbar={"none"}></Prescriptionorderlayout>
                        <Treatmentorderlayout searchbar={"none"}></Treatmentorderlayout>
                    </div>
                    <div id={"schedule"} style={this.display_item(4) ? null : { display: "none" }}>
                        <Crossection_schedule></Crossection_schedule>
                    </div>
                    <div style={this.display_item(5) ? null : { display: "none" }}>
                        <Crosssection_todo></Crosssection_todo>
                    </div>
                </div>
            </div>
        );
    }
}

export default Crosssectionlayout;