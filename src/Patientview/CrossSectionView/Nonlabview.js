import React, { Component } from 'react';
import Nonlabviewtable from './Nonlabviewtable'




class Nonlabviewlayout extends Component{
    render(){
        return(
            <div style={{ width: "100%", marginBottom: "20px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px',paddingLeft:"5px",paddingRight:"5px",background:"rgba(238,238,238,1)" }}>
                    <div style={{ fontSize: "2rem" }}>報告清單</div>
                </div>
                <Nonlabviewtable></Nonlabviewtable>
            </div>
        );
    }
}

export default Nonlabviewlayout