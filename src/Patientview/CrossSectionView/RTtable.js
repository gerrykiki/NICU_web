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
                <div key={index} style={{ height: "50px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(232,232,232,1)", borderTopWidth: "0px", display: "grid", gridTemplateColumns: "1fr 6fr", paddingLeft: "24px", paddingRight: "24px" }}>
                    <div style={{ fontSize: "16px", lineHeight: "50px" }}>{info.time}</div>
                    <div style={{ fontSize: "16px", lineHeight: "50px" }}>{info.result}</div>
                </div>
        )
        return (
            <div>
                <div style={{ height: "50px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(232,232,232,1)", backgroundColor: "rgba(255,249,237,1)", display: "grid", gridTemplateColumns: "1fr 6fr", paddingLeft: "24px", paddingRight: "24px" }}>
                    <div style={{ fontSize: "16px", lineHeight: "50px" }}>紀錄日期</div>
                    <div style={{ fontSize: "16px", lineHeight: "50px" }}>GAS Report</div>
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