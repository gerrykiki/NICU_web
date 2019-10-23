import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";
import patientviewlogo from '../Image/svg/Patientviewclick.svg'
import checklogo from '../Image/svg/Check.svg'
import { ward_bed_lastData } from '../jsonResponse'


class Wardcarddetail extends Component {
    state = {
        hoverstate: "none",
        clickstate: false
    };

    switchbednumber(number) {
        if (number < 10) {
            return "0" + number;
        }
        return number;
    }

    switchgender(gender) {
        switch (gender) {
            case "Male":
                return "男"
            case "FeMale":
                return "女"
            default:
                return "未知"
        }
    }

    detailinformationswitch(item) {
        //console.log(item);
        switch (item) {
            case "Depends":
                return "呼(侵入)"
            case "TPN":
                return "TPN"
            case "NPO":
                return "NPO"
            case "HD":
                return "HD"
            case "Anti":
                return "Anti-B"
            case "Floey":
                return "Floey"
            case "Drain":
                return "Drain"
            default:
                return item
        }
    }

    detailinformationswitchstyle(item) {
        //console.log(item);
        switch (item) {
            case "Depends":
                return "rgba(232,152,162,1)"
            case "TPN":
                return "rgba(195,153,115,1)"
            case "NPO":
                return "rgba(61, 119, 181, 1)"
            case "HD":
                return "rgba(241, 204, 115, 1)"
            case "Anti":
                return "rgba(155, 202, 100, 1)"
            case "Floey":
                return "rgba(65, 165, 181, 1)"
            case "Drain":
                return "rgba(25,26,144,1)"
            default:
                return null
        }
    }

    detaildatastylelist(bool) {
        //No API Data
        const detail = this.props.data.detaildata
        let detaillist = detail.map((info, index) =>
            <div key={index} style={info.data ?
                { height: "24px", borderWidth: "1px", borderRadius: "4px", textAlign: "center", lineHeight: "24px", paddingLeft: "4px", paddingRight: "4px", color: "rgba(255, 255, 255, 1)", backgroundColor: this.detailinformationswitchstyle(info.item) } :
                { height: "24px", borderWidth: "1px", borderColor: "rgba(187, 187, 187, 1)", borderStyle: "solid", borderRadius: "4px", textAlign: "center", lineHeight: "24px", paddingLeft: "4px", paddingRight: "4px", color: "rgba(187, 187, 187, 1)" }}>
                {this.detailinformationswitch(info.item)}
            </div>
        )
        return detaillist;

    }


    hoverbackground() {
        //console.log("123")
        this.setState({
            hoverstate: "flex"
        });
    }

    hoverbackgroundhover() {
        //console.log("456")
        this.setState({
            hoverstate: "none"
        });
    }
    sendData = (idnumber) => {
        this.props.parentCallback(idnumber);
    }


    render() {
        const { data, selectstate } = this.props
        const status_data = data.detaildata
        var selectstyle = null
        if (selectstate === data.HISID) {
            selectstyle = {
                width: "99%",
                marginBottom: "10px",
                borderRadius: "4px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "rgba(245, 166, 35, 1)",
                position: 'relative'
            }
        }
        else {
            selectstyle = {
                width: "99%",
                marginBottom: "10px",
                borderRadius: "4px",
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "rgba(215, 238, 255, 1)",
                position: 'relative'
            }
        }


        return (
            <div onClick={() => this.sendData(data.id)}>
                <div style={selectstyle}>
                    <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "rgba(215, 238, 255, 1)", padding: "10px" }}>
                        <div style={{ fontSize: '18px', color: "rgba(61, 119, 181, 1)" }}>{data.Bednumber}/{data.Name}</div>
                        <div style={{ fontSize: '18px', color: "rgba(61, 119, 181, 1)" }}>{this.switchgender(data.Gender)}/[20＋5]&rarr;[24+4]</div>
                    </div>
                    <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "10px", borderBottomWidth: "0.5px", borderBottomColor: "rgba(215, 238, 255, 1)", borderBottomStyle: "solid" }}>
                        <div style={{ fontSize: '14px', color: "black" }}>
                            病歷號:{data.id}
                        </div>
                        <div style={{ fontSize: '14px', color: "black" }}>500g&rarr;{data.Weight}g</div>
                    </div>
                    <div style={{ borderBottomWidth: "0.5px", borderBottomColor: "rgba(215, 238, 255, 1)", borderBottomStyle: "solid" }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', paddingTop: "3px", paddingLeft: "10px", paddingRight: "10px", paddingBottom: "3px" }}>
                            <div style={{ display: 'grid', gridTemplateColumns: "1fr 2fr", gridColumnsGap: "5px" }}>
                                <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gridRowGap: "5px" }}>
                                    <div>
                                        <div style={{ fontSize: "12px", color: "black" }}>HR</div>
                                        <div style={{ fontSize: "18px", color: "black" }}>120</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "12px", color: "black" }}>SpO2</div>
                                        <div style={{ fontSize: "18px", color: "black" }}>22</div>
                                    </div>
                                </div>
                                <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gridRowGap: "5px" }}>
                                    <div>
                                        <div style={{ fontSize: "12px", color: "black" }}>ABP</div>
                                        <div style={{ fontSize: "18px", color: "black" }}>140/30(40)</div>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnsGap: "5px" }}>
                                        <div>
                                            <div style={{ fontSize: "12px", color: "black" }}>RR</div>
                                            <div style={{ fontSize: "18px", color: "black" }}>95%</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: "12px", color: "black" }}>BT</div>
                                            <div style={{ fontSize: "18px", color: "black" }}>40</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr", gridGap: "5px" }}>
                                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr",gridGap: "5px"  }}>
                                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",background:"rgba(232,152,162,1)",color:"white",borderRadius:"4px"}}>
                                        <div style={{background:"rgba(232,152,162,1)",color:"white",borderRadius:"4px"}}>123</div>
                                    </div>
                                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>123</div>
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>123</div>
                                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>123</div>
                                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>123</div>
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>123</div>
                                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>123</div>
                                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>123</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "10px", borderBottomWidth: "0.5px", borderBottomColor: "rgba(215, 238, 255, 1)", borderBottomStyle: "solid", borderTopWidth: "0.5px", borderTopColor: "rgba(215, 238, 255, 1)", borderTopStyle: "solid" }}>
                        <div style={{ fontSize: '10px', color: "black" }}>{data.Note}</div>
                        <Link to={{ pathname: "/patient", state: data }} style={{ height: "20px", backgroundColor: "rgba(59, 151, 225, 1)", borderRadius: "4px", textAlign: "center", lineHeight: "20px", color: "white", paddingLeft: "3px", paddingRight: "3px" }}>進入病人資料頁面</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wardcarddetail;