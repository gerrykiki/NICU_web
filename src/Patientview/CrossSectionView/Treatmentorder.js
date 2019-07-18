import React, { Component } from 'react';

class Treatmentorderlayout extends Component{
    render(){
        return(
            <div style={{ width: '45%', margin: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',height:'40px'  }}>
                    <div style={{ fontWeight: 'bold' }}>
                    Treatment Order
                    </div>
                </div>
                <hr></hr>
            </div>
        );
    }
}

export default Treatmentorderlayout