import React, { Component } from 'react';
import RTbreathetable from './RTbreathetable'

class RTbreathe extends Component{
    render(){
        return(
            <div style={{ width: "100%", marginBottom: "20px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' ,paddingLeft:"5px",paddingRight:"5px",background:"rgba(238,238,238,1)"}}>
                    <div style={{ fontSize: "2rem" }}>
                        RT(呼吸器設定)
                    </div>
                </div>
                <RTbreathetable></RTbreathetable>
            </div>
        );
    }
}

export default RTbreathe