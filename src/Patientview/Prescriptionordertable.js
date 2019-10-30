import React, { Component } from 'react';
import Prescriptionordertablecell from './Prescriptionordertablecell'


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
        const layout_style = {
            title:{ fontSize: "1rem", display:"flex",alignItems:"center"}
        }
        let Prescriptionordertabletable = Prescriptionordertablelist.map(
            (info ,index) =>
                <Prescriptionordertablecell key={index} info={info}></Prescriptionordertablecell>
        )
        return (
            <div>
                <div style={{ height: "50px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(232,232,232,1)", backgroundColor: "rgba(255,249,237,1)", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1.5fr 0.5fr 1fr 1fr", paddingLeft: "10px", paddingRight: "10px" }}>
                    <div style={layout_style.title}>開立時間</div>
                    <div style={layout_style.title}>學名</div>
                    <div style={layout_style.title}>商品名</div>
                    <div style={layout_style.title}>劑量/單位/途徑/頻次</div>
                    <div style={layout_style.title}>狀態</div>
                    <div style={layout_style.title}>開始日期</div>
                    <div style={layout_style.title}>結束日期</div>
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