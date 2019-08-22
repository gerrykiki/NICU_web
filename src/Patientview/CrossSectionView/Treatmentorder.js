import React, { Component } from 'react';
import Treatmentordertable from './Treatmentordertable'

class Treatmentorderlayout extends Component{
    render(){
        return(
            <div style={{ width: "100%", marginBottom: "20px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
                    <div style={{ fontSize: "22px", fontFamily: "PingFangTC-Medium" }}>
                    Treatment Order
                    </div>
                </div>
                <Treatmentordertable></Treatmentordertable>
            </div>
        );
    }
}

export default Treatmentorderlayout