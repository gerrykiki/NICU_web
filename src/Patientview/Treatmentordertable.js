import React, { Component } from 'react';
import Treatmentordertablecell from './Treatmentordertablecell'

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
        let Treatmentordertablecelllist = Treatmentorderlist.map(
            (info,index) => <Treatmentordertablecell key={index} info={info}></Treatmentordertablecell>

        )
        return (
            <div>
                <div style={{ height: "50px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(232,232,232,1)", backgroundColor: "rgba(255,249,237,1)", display: "grid", gridTemplateColumns: "1fr 3fr 1fr 1fr 1fr 1fr", paddingLeft: "10px", paddingRight: "10px" }}>
                    <div style={{ fontSize: "1rem", display:"flex",alignItems:"center" }}>開立時間</div>
                    <div style={{ fontSize: "1rem", display:"flex",alignItems:"center" }}>處置名稱</div>
                    <div style={{ fontSize: "1rem", display:"flex",alignItems:"center" }}>頻次</div>
                    <div style={{ fontSize: "1rem", display:"flex",alignItems:"center" }}>狀態</div>
                    <div style={{ fontSize: "1rem", display:"flex",alignItems:"center" }}>開始日期</div>
                    <div style={{ fontSize: "1rem", display:"flex",alignItems:"center" }}>結束日期</div>
                </div>
                <div style={{ maxHeight: "650px", overflow: "auto" }}>
                    {Treatmentordertablecelllist}
                </div>
            </div>
        );
    }
}

export default Treatmentordertable