import React, { Component } from 'react';


class RTbreathetable extends Component {
    render() {
        const RTbreathelist = [
            {
                "time": '06/06 20:00',
                "Mode": "Pressuresupport+PEEP",
                "Setting": "Fio:22/Rate:30/PIP:27/PEEP:35",
                "Note": "備註內容"
            },
            {
                "time": '06/06 20:00',
                "Mode": "Pressuresupport+PEEP",
                "Setting": "Fio:22/Rate:30/PIP:27/PEEP:35",
                "Note": "備註內容"
            },
            {
                "time": '06/06 20:00',
                "Mode": "Pressuresupport+PEEP",
                "Setting": "Fio:22/Rate:30/PIP:27/PEEP:35",
                "Note": "備註內容"
            },
        ]
        let RTbreathetable = RTbreathelist.map(
            (info ,index) =>
                <div key={index} style={{ height: "100px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(232,232,232,1)", borderTopWidth: "0px", display: "grid", gridTemplateColumns:"1fr 6fr", paddingLeft: "24px", paddingRight: "24px" }}>
                    <div style={{ fontSize: "16px", lineHeight: "100px" }}>{info.time}</div>
                    <div style={{ display: "grid", gridTemplateRows: "50px 50px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                            <div style={{ fontSize: "16px", lineHeight: "50px" }}>{info.Mode}</div>
                            <div style={{ fontSize: "16px", lineHeight: "50px" }}>{info.Setting}</div>
                        </div>
                        <div style={{ fontSize: "16px", lineHeight: "50px" }}>{info.Note}</div>
                    </div>
                </div>
        )
        return (
            <div>
                <div style={{ height: "50px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(232,232,232,1)", backgroundColor: "rgba(255,249,237,1)", display: "grid", gridTemplateColumns: "1fr 3fr 3fr", paddingLeft: "24px", paddingRight: "24px" }}>
                    <div style={{ fontSize: "16px", lineHeight: "50px" }}>紀錄日期</div>
                    <div style={{ fontSize: "16px", lineHeight: "50px" }}>Mode</div>
                    <div style={{ fontSize: "16px", lineHeight: "50px" }}>Setting</div>
                </div>
                <div style={{ maxHeight: "650px", overflow: "auto" }}>
                    {
                        RTbreathetable
                    }
                </div>
            </div>
        );
    }
}

export default RTbreathetable