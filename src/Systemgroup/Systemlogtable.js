import React, { Component } from 'react';

class Systemlogtable extends Component {
    render() {
        const RTlist = [
            {
                "time": '2019-06-06 20:00',
                "log": "GAS report"
            },
            {
                "time": '2019-06-06 20:00',
                "log": "GAS report"
            },
            {
                "time": '2019-06-06 20:00',
                "log": "GAS report"
            },
            {
                "time": '2019-06-06 20:00',
                "log": "GAS report"
            },
            {
                "time": '2019-06-06 20:00',
                "log": "GAS report"
            },
            {
                "time": '2019-06-06 20:00',
                "log": "GAS report"
            },
            {
                "time": '2019-06-06 20:00',
                "log": "GAS report"
            },
            {
                "time": '2019-06-06 20:00',
                "log": "GAS report"
            },
            {
                "time": '2019-06-06 20:00',
                "log": "GAS report"
            },
            {
                "time": '2019-06-06 20:00',
                "log": "GAS report"
            },
            {
                "time": '2019-06-06 20:00',
                "log": "GAS report"
            },
            {
                "time": '2019-06-06 20:00',
                "log": "GAS report"
            },
            {
                "time": '2019-06-06 20:00',
                "log": "GAS report"
            },
            {
                "time": '2019-06-06 20:00',
                "log": "GAS report"
            },
            {
                "time": '2019-06-06 20:00',
                "log": "GAS report"
            },
            {
                "time": '2019-06-06 20:00',
                "log": "GAS report"
            }
        ]
        let RTtable = RTlist.map(
            (info ,index) =>
                <div key={index} style={{ height: "50px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(232,232,232,1)", borderTopWidth: "0px", display: "grid", gridTemplateColumns: "1fr 6fr",gridGap:'10px', paddingLeft: "10px", paddingRight: "10px" }}>
                    <div style={{ fontSize: "14px", display:"flex",alignItems:"center" }}>{info.time}</div>
                    <div style={{ fontSize: "14px", display:"flex",alignItems:"center" }}>{info.log}</div>
                </div>
        )
        return (
            <div>
                <div style={{ height: "50px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(232,232,232,1)", backgroundColor: "rgba(255,249,237,1)", display: "grid", gridTemplateColumns: "1fr 6fr", gridGap: '10px', paddingLeft: "10px", paddingRight: "10px" }}>
                    <div style={{ fontSize: "14px", display: "flex", alignItems: "center" }}>紀錄時間</div>
                    <div style={{ fontSize: "14px", display: "flex", alignItems: "center" }}>事件</div>
                </div>
                <div style={{ maxHeight: "550px", overflow: "auto" }}>
                    {
                        RTtable
                    }
                </div>
            </div>
        );
    }
}

export default Systemlogtable