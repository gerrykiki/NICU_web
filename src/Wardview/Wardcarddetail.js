import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";
import patientviewlogo from '../Image/svg/Patientviewclick.svg'
import checklogo from '../Image/svg/Check.svg'


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

    detaildatastylelist() {
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

    render() {
        const { data } = this.props
        // const infotitlestyle = { paddingLeft: "2px", paddingRight: "2px", height: "20px", borderWidth: "1px", borderColor: "rgba(59, 151, 225, 1)", borderStyle: "solid", borderRadius: "4px", textAlign: "center", lineHeight: "20px" }
        // const infodatastyle = { marginLeft: '2px' }
        // const infodatahightlightstyle = { marginLeft: '3px', color: "red" }
        const style = {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0px",
            borderRadius: "4px",
            display: this.state.hoverstate,
            justifyContent: "center",
            alignItems: "center"
        }
        // const infodata = [
        //     { Title: "BP", Data: 140 + "/" + 800, hightlight: false },
        //     { Title: "HR", Data: 120, hightlight: true },
        //     { Title: "RR", Data: 120, hightlight: false },
        //     { Title: "BT", Data: 340, hightlight: false },
        //     { Title: "尿", Data: 150, hightlight: false },
        //     { Title: "糖", Data: 450, hightlight: false },
        //     { Title: "SPO2", Data: 95, hightlight: false },
        // ]

        // let infolists = infodata.map((info, index) =>
        //     <div key={index} style={{ display: 'flex' }}>
        //         <div style={infotitlestyle}>{info.Title}</div>
        //         <div style={info.hightlight ? infodatahightlightstyle : infodatastyle}>{info.Data}</div>
        //     </div>
        // )


        return (
            <div style={{ width: "99%", marginBottom: "10px", borderRadius: "4px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(215, 238, 255, 1)", position: 'relative' }} onMouseMove={() => this.hoverbackground()} onMouseLeave={() => this.hoverbackgroundhover()}>
                <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "rgba(215, 238, 255, 1)", padding: "10px" }}>
                    <div style={{ fontSize: '18px', color: "rgba(61, 119, 181, 1)"}}>
                        {this.switchbednumber(data.publishednumber)}/{data.Name}
                    </div>
                    <div style={{ fontSize: '18px',color: "rgba(61, 119, 181, 1)" }}>
                        {this.switchgender(data.Gender)}/[20＋5]&rarr;[24+4]
                    </div>
                </div>
                <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "10px", borderBottomWidth: "0.5px", borderBottomColor: "rgba(215, 238, 255, 1)", borderBottomStyle: "solid" }}>
                    <div style={{ fontSize: '14px' }}>
                        病歷號:{data.id}
                    </div>
                    <div style={{ fontSize: '14px' }}>500g&rarr;700g(+0.5g)</div>
                </div>
                <div style={{ borderBottomWidth: "0.5px", borderBottomColor: "rgba(215, 238, 255, 1)", borderBottomStyle: "solid" }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', paddingTop: "3px", paddingLeft: "10px", paddingRight: "10px", paddingBottom: "3px" }}>
                        <div style={{ display: 'grid', gridTemplateColumns: "1fr 2fr", gridColumnsGap: "5px" }}>
                            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gridRowGap: "5px" }}>
                                <div>
                                    <div style={{ fontSize: "12px" }}>HR</div>
                                    <div style={{ fontSize: "18px" }}>120</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: "12px" }}>SpO2</div>
                                    <div style={{ fontSize: "18px" }}>22</div>
                                </div>
                            </div>
                            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gridRowGap: "5px" }}>
                                <div>
                                    <div style={{ fontSize: "12px" }}>ABP</div>
                                    <div style={{ fontSize: "18px" }}>140/30(40)</div>
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnsGap: "5px" }}>
                                    <div>
                                        <div style={{ fontSize: "12px" }}>RR</div>
                                        <div style={{ fontSize: "18px" }}>95%</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "12px" }}>BT</div>
                                        <div style={{ fontSize: "18px" }}>40</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 1fr 1fr", gridGap: "5px" }}>
                            {this.detaildatastylelist("rgba(61, 119, 181, 1)")}
                        </div>
                    </div>
                </div>
                <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "13px", borderBottomWidth: "0.5px", borderBottomColor: "rgba(215, 238, 255, 1)", borderBottomStyle: "solid", borderTopWidth: "0.5px", borderTopColor: "rgba(215, 238, 255, 1)", borderTopStyle: "solid" }}>
                    <span style={{ fontSize: '14px' }}>
                        {data.Note}
                    </span>
                </div>
                <div style={style}>
                    <Link to={{ pathname: '/Main/Bedview/Warduser', state: data }} params={{ testvalue: "hello" }} style={{ height: "40px", width: "40px", backgroundColor: "rgba(255,255,255, 1)", borderRadius: "99em", textAlign: "center", lineHeight: "40px", margin: "10px" }}>
                        <img src={checklogo} alt='checklogo'></img>
                    </Link>
                    <Link to="/Main/Patientview" style={{ height: "40px", width: "40px", backgroundColor: "rgba(255,255,255, 1)", borderRadius: "99em", textAlign: "center", lineHeight: "40px", margin: "10px" }}>
                        <img src={patientviewlogo} alt='patientviewlogo'></img>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Wardcarddetail;