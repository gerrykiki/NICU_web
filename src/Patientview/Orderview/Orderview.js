import React, { Component } from 'react';
import Prescriptionordertable from '../Prescriptionorder'
import Treatmentorderlayout from '../Treatmentorder'

class Orderview extends Component {
    render() {
        return (
            <div>
                <div style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "10px" }}>
                    <Prescriptionordertable searchbar={"flex"}></Prescriptionordertable>
                    <Treatmentorderlayout searchbar={"flex"}></Treatmentorderlayout>
                    </div>
                </div>
            </div>
        );
    }
}

export default Orderview;