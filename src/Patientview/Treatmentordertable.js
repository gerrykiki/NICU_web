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
                <div key={index} style={{ height: "130px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(232,232,232,1)", borderTopWidth: "0px", display: "grid", gridTemplateColumns:"1fr 7fr", paddingLeft: "10px", paddingRight: "10px" }}>
                    <div style={{ fontSize: "12px", display:"flex",alignItems:"center"}}>{info.time}</div>
                    <div style={{ display: "grid", gridTemplateRows: "80px 50px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr 1fr 1fr 1fr" }}>
                            <div style={{ fontSize: "12px", display:"flex",alignItems:"center" }}>{info.ActionName}</div>
                            <div style={{ fontSize: "12px", display:"flex",alignItems:"center" }}>{info.qd}</div>
                            <div style={{ fontSize: "12px", display:"flex",alignItems:"center"}}>{info.State}</div>
                            <div style={{ fontSize: "12px", display:"flex",alignItems:"center" }}>{info.StartTime}</div>
                            <div style={{ fontSize: "12px", display:"flex",alignItems:"center" }}>{info.EndTime}</div>
                        </div>
                        <div style={{ fontSize: "12px", display:"flex",alignItems:"center" }}>{info.Note}</div>
                    </div>
                </div>
        )
        return (
            <div>
                <div style={{ height: "50px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(232,232,232,1)", backgroundColor: "rgba(255,249,237,1)", display: "grid", gridTemplateColumns: "1fr 3fr 1fr 1fr 1fr 1fr", paddingLeft: "10px", paddingRight: "10px" }}>
                    <div style={{ fontSize: "12px", display:"flex",alignItems:"center" }}>開立時間</div>
                    <div style={{ fontSize: "12px", display:"flex",alignItems:"center" }}>處置名稱</div>
                    <div style={{ fontSize: "12px", display:"flex",alignItems:"center" }}>頻次</div>
                    <div style={{ fontSize: "12px", display:"flex",alignItems:"center" }}>狀態</div>
                    <div style={{ fontSize: "12px", display:"flex",alignItems:"center" }}>開始日期</div>
                    <div style={{ fontSize: "12px", display:"flex",alignItems:"center" }}>結束日期</div>
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