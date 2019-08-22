import React, { Component } from 'react';




class Nonlabviewtable extends Component {
    render() {
        const lablist = [
            {
                "time": '2019-06-06 20:00',
                "item": "blood culture",
                "result": "negative"
            },
            {
                "time": '2019-06-06 20:00',
                "item": "blood culture",
                "result": "negative"
            },
            {
                "time": '2019-06-06 20:00',
                "item": "blood culture",
                "result": "negative"
            }
        ]
        let labtable = lablist.map(
            (info,index) =>
                <div key={index} style={{ height: "50px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(232,232,232,1)", borderTopWidth: "0px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", paddingLeft: "24px", paddingRight: "24px" }}>
                    <div style={{ fontSize: "16px", lineHeight: "50px" }}>{info.time}</div>
                    <div style={{ fontSize: "16px", lineHeight: "50px" }}>{info.item}</div>
                    <div style={{ fontSize: "16px", lineHeight: "50px" }}>{info.result}</div>
                </div>
        )
        return (
            <div>
                <div style={{ height: "50px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(232,232,232,1)", backgroundColor: "rgba(255,249,237,1)", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", paddingLeft: "24px", paddingRight: "24px" }}>
                    <div style={{ fontSize: "16px", lineHeight: "50px" }}>檢驗日期</div>
                    <div style={{ fontSize: "16px", lineHeight: "50px" }}>檢驗項目名稱</div>
                    <div style={{ fontSize: "16px", lineHeight: "50px" }}>檢驗結果</div>
                </div>
                <div style={{ maxHeight: "650px", overflow: "auto" }}>
                    {labtable}
                </div>
            </div>
        );
    }
}

export default Nonlabviewtable