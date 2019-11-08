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
        const string_style = {
            title: { fontSize: "1rem",display:"flex",alignItems:"center" },
            item:{ fontSize: "1rem",display:"flex",alignItems:"center" }
        }
        let labtable = lablist.map(
            (info, index) =>
                <div key={index} style={{ height: "50px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(232,232,232,1)", borderTopWidth: "0px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", paddingLeft: "5px", paddingRight: "5px" }}>
                    <div style={string_style.item}>{info.time}</div>
                    <div style={string_style.item}>{info.item}</div>
                    <div style={string_style.item}>{info.result}</div>
                </div>
        )

        return (
            <div style={{marginTop:"10px"}}>
                <div style={{ height: "50px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238,238,238,1)", backgroundColor:  "rgba(238,238,238,1)", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", paddingLeft: "5px", paddingRight: "5px" }}>
                    <div style={string_style.title}>檢驗日期</div>
                    <div style={string_style.title}>檢驗項目名稱</div>
                    <div style={string_style.title}>檢驗項目狀態</div>
                    <div style={string_style.title}>檢驗結果</div>
                </div>
                <div style={{ maxHeight: "650px", overflow: "auto" }}>
                    {labtable}
                </div>
            </div>
        );
    }
}

export default Nonlabviewtable