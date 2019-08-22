import React, { Component } from 'react';
import Prescriptionordertable from './Prescriptionordertable'

class Prescriptionorderlayout extends Component{
    render(){
        return(
            <div style={{ width: "100%", marginBottom: "20px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
                    <div style={{ fontSize: "22px", fontFamily: "PingFangTC-Medium" }}>
                    Prescription Order
                    </div>
                </div>
                <Prescriptionordertable>s</Prescriptionordertable>
            </div>
        );
    }
}

export default Prescriptionorderlayout