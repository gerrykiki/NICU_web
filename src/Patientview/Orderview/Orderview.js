import React, { Component } from 'react';
import Prescriptionordertable from '../Prescriptionorder'
import Treatmentorderlayout from '../Treatmentorder'

class Orderview extends Component {
    render() {
        const { searchbar } = this.props
        return (
            <div>
                <div style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "10px" }}>
                        <Prescriptionordertable searchbar={searchbar}></Prescriptionordertable>
                        <Treatmentorderlayout searchbar={searchbar}></Treatmentorderlayout>
                    </div>
                </div>
            </div>
        );
    }
}

export default Orderview;