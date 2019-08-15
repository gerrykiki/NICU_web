import React, { Component } from 'react';
import Vitalsign from './Vitalsign';
import Basicinformation from './Basicinformation';
import Controlbar from './Controlbar';
import IOpage from './iopage'
import Labviewlayout from './Labview'


class Crosssectionlayout extends Component {

    render() {
        return (
            <div>
                <Controlbar></Controlbar>
                <div style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                    <Basicinformation></Basicinformation>
                    <div style={{ display: "grid", gridTemplateColumns: "50% 50%", gridGap: "10px" }}>
                        <Vitalsign></Vitalsign>
                        <IOpage></IOpage>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "50% 50%", gridGap: "10px" }}>
                        <Labviewlayout></Labviewlayout>
                        <Labviewlayout></Labviewlayout>
                    </div>
                </div>
            </div>
        );
    }
}

export default Crosssectionlayout;