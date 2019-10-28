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
import Schedulelayout from './Schedule'
import Todolayout from './Todo'


class Crosssectionlayout extends Component {
    state = {
        Cross_item: [0, 1, 2, 3, 4, 5]
    }
    callbackFunction = (item_array) => {
        console.log(item_array)
        this.setState(
            {
                Cross_item: item_array
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
        this.display_item(1)
        return (
            <div>
                <Controlbar parentCallback={this.callbackFunction} userdata={userdata} btnlist={crosssectioncontrollist} item_array={this.state.Cross_item}></Controlbar>
                <div style={{ maxHeight: '75vh', overflowY: 'auto' ,height:"75vh"}}>
                    <div id={"vitalsignIO"} style={this.display_item(0) ? { display: "grid", gridTemplateColumns: "50% 50%", gridGap: "10px" } : { display: "none" }}>
                        <Vitalsign></Vitalsign>
                        <IOpage></IOpage>
                    </div>
                    <div id={"lab"} style={this.display_item(1) ? { display: "grid", gridTemplateColumns: "50% 50%", gridGap: "10px" } : { display: "none" }}>
                        <Labviewlayout></Labviewlayout>
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
                        <Schedulelayout></Schedulelayout>
                    </div>
                    <div style={this.display_item(5) ? null : { display: "none" }}>
                        <Todolayout></Todolayout>
                    </div>
                </div>
            </div>
        );
    }
}

export default Crosssectionlayout;