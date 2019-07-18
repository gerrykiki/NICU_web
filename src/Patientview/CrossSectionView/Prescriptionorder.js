import React, { Component } from 'react';

class Prescriptionorderlayout extends Component{
    render(){
        return(
            <div style={{ width: '45%', margin: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',height:'40px'  }}>
                    <div style={{ fontWeight: 'bold' }}>
                    Prescription Order
                    </div>
                </div>
                <hr></hr>
            </div>
        );
    }
}

export default Prescriptionorderlayout