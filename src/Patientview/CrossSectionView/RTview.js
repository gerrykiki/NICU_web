import React, { Component } from 'react';
import RTtable from './RTtable'

class RTviewlayout extends Component{
    render(){
        return(
            <div style={{ width: "100%", marginBottom: "20px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
                    <div style={{ fontSize: "22px", fontFamily: "PingFangTC-Medium" }}>
                        RT(Blood Gas Analysis)
                    </div>
                </div>
                <RTtable></RTtable>
            </div>
        );
    }
}

export default RTviewlayout