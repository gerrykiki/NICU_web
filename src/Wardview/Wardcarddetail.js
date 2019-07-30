import React, { Component } from 'react';


class Wardcarddetail extends Component {
    render() {
        const infotitlestyle = { paddingLeft: "2px", paddingRight: "2px", height: "20px", borderWidth: "1px", borderColor: "rgba(59, 151, 225, 1)", borderStyle: "solid", borderRadius: "4px", textAlign: "center", lineHeight: "20px" }
        const infodatastyle = { marginLeft: '2px' }
        const infodatahightlightstyle = { marginLeft: '3px', color: "red" }
        const infodata = [
            { Title: "BP", Data: 140 + "/" + 800 ,hightlight:false},
            { Title: "HR", Data: 120 ,hightlight:true},
            { Title: "RR", Data: 120 ,hightlight:false},
            { Title: "BT", Data: 340 ,hightlight:false},
            { Title: "尿", Data: 150 ,hightlight:false},
            { Title: "糖", Data: 450 ,hightlight:false},
            { Title: "SPO2", Data: 95 ,hightlight:false},
        ]
        
        let infolists = infodata.map((info) =>
            <div style={{ display: 'flex' }}>
                <div style={infotitlestyle}>{info.Title}</div>
                <div style={info.hightlight ? infodatahightlightstyle:infodatastyle}>{info.Data}</div>
            </div>
        )

        return (
            <div style={{ height: '170px', width: "99%", marginBottom: "10px", borderRadius: "4px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(215, 238, 255, 1)" }}>
                <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "rgba(215, 238, 255, 1)", padding: "10px" }}>
                    <span style={{ fontSize: '16px', color: "rgba(61, 119, 181, 1)", fontFamily: "PingFangSC-Regular" }}>
                        01
                    </span>
                    <span style={{ fontSize: '14px', fontFamily: "PingFangSC-Regular", color: "rgba(61, 119, 181, 1)" }}>
                        程子倩/Ch01/女/13週
                    </span>
                </div>
                <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "13px", borderBottomWidth: "0.5px", borderBottomColor: "rgba(160, 213, 255, 1)", borderBottomStyle: "solid" }}>
                    <span style={{ fontSize: '12px' }}>
                        病歷號:XXXXX-XXXXX
                        </span>
                    <span style={{ fontSize: '12px' }}>
                        3700g (+700g)
                        </span>
                </div>
                <div style={{ borderBottomWidth: "0.5px", borderBottomColor: "rgba(160, 213, 255, 1)", borderBottomStyle: "solid" }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gridTemplateRows: "1fr 1fr", paddingTop: "3px", paddingLeft: "10px", paddingRight: "10px", paddingBottom: "3px" }}>
                        {infolists}
                    </div>
                </div>
                <div style={{ height: '30px', display: 'flex', alignItems: 'center', paddingTop: "3px", paddingLeft: "10px", paddingRight: "10px", paddingBottom: "3px", borderBottomWidth: "0.5px", borderBottomColor: "rgba(160, 213, 255, 1)", borderBottomStyle: "solid" }}>
                    <div style={{ height: "20px", borderWidth: "1px", borderColor: "rgba(59, 151, 225, 1)", borderStyle: "solid", borderRadius: "4px", textAlign: "center", lineHeight: "20px" }}>BP</div>
                </div>
                <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "13px", borderBottomWidth: "0.5px", borderBottomColor: "rgba(160, 213, 255, 1)", borderBottomStyle: "solid" }}>
                    <span style={{ fontSize: '14px' }}>
                        隨時注意病人血壓狀況
                    </span>
                </div>
            </div>
        );
    }
}

export default Wardcarddetail;