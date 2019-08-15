import React, { Component } from 'react';
import Labviewitem from './Labviewitem'

class Labviewlayout extends Component {
    render() {
        const data = [
            {title:"Glucose",score:77,date:"2019/01/01"},
            {title:"WBC",score:19647,date:"Seg 59%2019/01/01"},
            {title:"WBC",score:14.8,date:"2019/01/01"},
            {title:"Platelet",score:125,date:"2019/01/01"},
            {title:"Glucose",score:77,date:"2019/01/01"},
            {title:"Glucose",score:77,date:"2019/01/01"},
        ]
        return (
            <div style={{ width: "100%", marginBottom: "20px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
                    <div style={{ fontSize: "22px", fontFamily: "PingFangTC-Medium" }}>
                        Lab(常規檢驗)
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gridGap: "10px" }}>
                    <Labviewitem data={data[0]}></Labviewitem>
                    <Labviewitem data={data[1]}></Labviewitem>
                    <Labviewitem data={data[2]}></Labviewitem>
                    <Labviewitem data={data[3]}></Labviewitem>
                </div>
                <div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr", gridGap: "10px" }}>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridGap: "10px" }}>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gridGap: "10px" }}>
                </div>
            </div>
        );
    }
}

export default Labviewlayout