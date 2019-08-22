import React, { Component } from 'react';
import Nonlabviewtable from './Nonlabviewtable'




class Nonlabviewlayout extends Component{
    render(){
        return(
            <div style={{ width: "100%", marginBottom: "20px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
                    <div style={{ fontSize: "22px", fontFamily: "PingFangTC-Medium" }}>
                        Lab(非常規檢驗)
                    </div>
                </div>
                <Nonlabviewtable></Nonlabviewtable>
            </div>
        );
    }
}

export default Nonlabviewlayout