import React, { Component } from 'react';


class Treatmentordertable extends Component {
    render() {
        const Treatmentorderlist = [
            {
                "time": '06/06 20:00',
                "ActionName": "Check ABG (At Nursing Station)",
                "qd": "BIW25",
                "State":"生效中",
                "StartTime":"06/06 20:00",
                "EndTime":"06/06 20:00",
                "Note": "備註內容"
            },
            {
                "time": '06/06 20:00',
                "ActionName": "Check ABG (At Nursing Station)",
                "qd": "BIW25",
                "State":"生效中",
                "StartTime":"06/06 20:00",
                "EndTime":"06/06 20:00",
                "Note": "備註內容"
            },
            {
                "time": '06/06 20:00',
                "ActionName": "Check ABG (At Nursing Station)",
                "qd": "BIW25",
                "State":"生效中",
                "StartTime":"06/06 20:00",
                "EndTime":"06/06 20:00",
                "Note": "備註內容"
            },
        ]
        let Treatmentordertablecell = Treatmentorderlist.map(
            (info,index) =>
                <div key={index} style={{ height: "130px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(232,232,232,1)", borderTopWidth: "0px", display: "grid", gridTemplateColumns:"1fr 7fr", paddingLeft: "24px", paddingRight: "24px" }}>
                    <div style={{ fontSize: "14px", lineHeight: "130px" }}>{info.time}</div>
                    <div style={{ display: "grid", gridTemplateRows: "80px 50px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr 1fr 1fr 1fr" }}>
                            <div style={{ fontSize: "14px", lineHeight: "80px" }}>{info.ActionName}</div>
                            <div style={{ fontSize: "14px", lineHeight: "80px" }}>{info.qd}</div>
                            <div style={{ fontSize: "14px", lineHeight: "80px" }}>{info.State}</div>
                            <div style={{ fontSize: "14px", lineHeight: "80px" }}>{info.StartTime}</div>
                            <div style={{ fontSize: "14px", lineHeight: "80px" }}>{info.EndTime}</div>
                        </div>
                        <div style={{ fontSize: "14px", lineHeight: "50px" }}>{info.Note}</div>
                    </div>
                </div>
        )
        return (
            <div>
                <div style={{ height: "50px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(232,232,232,1)", backgroundColor: "rgba(255,249,237,1)", display: "grid", gridTemplateColumns: "1fr 3fr 1fr 1fr 1fr 1fr", paddingLeft: "24px", paddingRight: "24px" }}>
                    <div style={{ fontSize: "16px", lineHeight: "50px" }}>開立時間</div>
                    <div style={{ fontSize: "16px", lineHeight: "50px" }}>處置名稱</div>
                    <div style={{ fontSize: "16px", lineHeight: "50px" }}>頻次</div>
                    <div style={{ fontSize: "16px", lineHeight: "50px" }}>狀態</div>
                    <div style={{ fontSize: "16px", lineHeight: "50px" }}>開始日期</div>
                    <div style={{ fontSize: "16px", lineHeight: "50px" }}>結束日期</div>
                </div>
                <div style={{ maxHeight: "650px", overflow: "auto" }}>
                    {
                        Treatmentordertablecell
                    }
                </div>
            </div>
        );
    }
}

export default Treatmentordertable