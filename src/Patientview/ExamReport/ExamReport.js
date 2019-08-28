import React, { Component } from 'react';
import Labview from './Labview'
import Nonlabview from './NonLabview'

class Examreport extends Component {
    render() {
        return (
            <div>
                <div style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "10px" }}>
                        <Labview></Labview>
                        <Nonlabview></Nonlabview>
                    </div>
                </div>
            </div>
        );
    }
}

export default Examreport;