import React, { Component } from 'react';


class Prescriptionordertable extends Component {
    render() {
        const Prescriptionordertablelist = [
            {
                "time": '06/06 20:00',
                "Name": "GAS report",
                "ProductName":"Check ABG (At…",
                "Unit":"0.55/MG/IVA/BIW25",
                "State":"已結束",
                "StartTime":"06/24 16:00",
                "EndTime":"06/24 16:00",
                "Note":"備註內容"
            },
            {
                "time": '06/06 20:00',
                "Name": "GAS report",
                "ProductName":"Check ABG (At…",
                "Unit":"0.55/MG/IVA/BIW25",
                "State":"已結束",
                "StartTime":"06/24 16:00",
                "EndTime":"06/24 16:00",
                "Note":"備註內容"
            },
            {
                "time": '06/06 20:00',
                "Name": "GAS report",
                "ProductName":"Check ABG (At…",
                "Unit":"0.55/MG/IVA/BIW25",
                "State":"已結束",
                "StartTime":"06/24 16:00",
                "EndTime":"06/24 16:00",
                "Note":"備註內容"
            }
        ]
        let Prescriptionordertabletable = Prescriptionordertablelist.map(
            (info ,index) =>
                <div key={index} style={{ height: "130px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(232,232,232,1)", borderTopWidth: "0px", display: "grid", gridTemplateColumns: "1fr 6fr", paddingLeft: "10px", paddingRight: "10px" }}>
                    <div style={{ fontSize: "14px", lineHeight: "130px" }}>{info.time}</div>
                    <div style={{ display: "grid", gridTemplateRows: "80px 50px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.5fr 0.5fr 1fr 1fr" }}>
                            <div style={{ fontSize: "14px", display:"flex",alignItems:"center" }}>{info.Name}</div>
                            <div style={{ fontSize: "14px", display:"flex",alignItems:"center" }}>{info.ProductName}</div>
                            <div style={{ fontSize: "14px", display:"flex",alignItems:"center" }}>{info.Unit}</div>
                            <div style={{ fontSize: "14px", display:"flex",alignItems:"center" }}>{info.State}</div>
                            <div style={{ fontSize: "14px", display:"flex",alignItems:"center" }}>{info.StartTime}</div>
                            <div style={{ fontSize: "14px", display:"flex",alignItems:"center" }}>{info.EndTime}</div>
                        </div>
                        <div style={{ fontSize: "14px", display:"flex",alignItems:"center" }}>{info.Note}</div>
                    </div>
                </div>
        )
        return (
            <div>
                <div style={{ height: "50px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(232,232,232,1)", backgroundColor: "rgba(255,249,237,1)", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1.5fr 0.5fr 1fr 1fr", paddingLeft: "10px", paddingRight: "10px" }}>
                    <div style={{ fontSize: "14px", display:"flex",alignItems:"center"}}>開立時間</div>
                    <div style={{ fontSize: "14px", display:"flex",alignItems:"center" }}>學名</div>
                    <div style={{ fontSize: "14px", display:"flex",alignItems:"center" }}>商品名</div>
                    <div style={{ fontSize: "14px", display:"flex",alignItems:"center"}}>劑量/單位/途徑/頻次</div>
                    <div style={{ fontSize: "14px", display:"flex",alignItems:"center" }}>狀態</div>
                    <div style={{ fontSize: "14px", display:"flex",alignItems:"center"}}>開始日期</div>
                    <div style={{ fontSize: "14px", display:"flex",alignItems:"center" }}>結束日期</div>
                </div>
                <div style={{ maxHeight: "650px", overflow: "auto" }}>
                    {
                        Prescriptionordertabletable
                    }
                </div>
            </div>
        );
    }
}

export default Prescriptionordertable