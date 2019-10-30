import React, { Component } from 'react';


class RTtable extends Component {
    render() {
        const RTlist = [
            {
                "time": '06/06 20:00',
                "result": "GAS report"
            },
            {
                "time": '06/06 20:00',
                "result": "GAS report"
            },
            {
                "time": '06/06 20:00',
                "result": "GAS report"
            }
        ]
        let RTtable = RTlist.map(
            (info ,index) =>
                <div key={index} style={{ height: "50px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(232,232,232,1)", borderTopWidth: "0px", display: "grid", gridTemplateColumns: "1fr 5fr",gridGap:'10px', paddingLeft: "10px", paddingRight: "10px" }}>
                    <div style={{ fontSize: "1rem", display:"flex",justifyContent:"center",alignItems:"center" }}>{info.time}</div>
                    <div style={{ fontSize: "1rem", display:"flex",alignItems:"center" }}>{info.result}</div>
                </div>
        )
        return (
            <div>
                <div style={{ height: "50px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(232,232,232,1)", backgroundColor: "rgba(255,249,237,1)", display: "grid", gridTemplateColumns: "1fr 5fr",gridGap:'10px', paddingLeft: "10px", paddingRight: "10px" }}>
                    <div style={{ fontSize: "1.3rem", display:"flex",justifyContent:"center",alignItems:"center" }}>紀錄日期</div>
                    <div style={{ fontSize: "1.3rem", display:"flex",alignItems:"center"}}>GAS Report</div>
                </div>
                <div style={{ maxHeight: "650px", overflow: "auto" }}>
                    {
                        RTtable
                    }
                </div>
            </div>
        );
    }
}

export default RTtable