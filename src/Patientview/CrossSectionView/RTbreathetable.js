import React, { Component } from 'react';
import chooseedit from '../../Image/svg/Chooseedit.svg'
import RTbreathetablecell from './RTbreathtablecell'


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
            (info, index) =>
                <RTbreathetablecell key={index} info={info}></RTbreathetablecell>
        )
        return (
            <div>
                <div style={{ height: "50px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(232,232,232,1)", backgroundColor: "rgba(255,249,237,1)", display: "grid", gridTemplateColumns: "1fr 3fr 3fr", paddingLeft: "10px", paddingRight: "10px" }}>
                    <div style={{ fontSize: "1.3rem", display: "flex", alignItems: "center" }}>紀錄日期</div>
                    <div style={{ fontSize: "1.3rem", display: "flex", alignItems: "center" }}>Mode</div>
                    <div style={{ fontSize: "1.3rem", display: "flex", alignItems: "center" }}>Setting</div>
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