import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import "antd/dist/antd.css";


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
                return "呼"
            case "TPN":
                return "TPN"
            case "NPO":
                return "NPO"
            case "TH":
                return "透"
            case "Anti":
                return "抗"
            case "Leaf":
                return "葉"
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
            case "TH":
                return "rgba(241, 204, 115, 1)"
            case "Anti":
                return "rgba(155, 202, 100, 1)"
            case "Leaf":
                return "rgba(65, 165, 181, 1)"
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
        const infotitlestyle = { paddingLeft: "2px", paddingRight: "2px", height: "20px", borderWidth: "1px", borderColor: "rgba(59, 151, 225, 1)", borderStyle: "solid", borderRadius: "4px", textAlign: "center", lineHeight: "20px" }
        const infodatastyle = { marginLeft: '2px' }
        const infodatahightlightstyle = { marginLeft: '3px', color: "red" }
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
        const infodata = [
            { Title: "BP", Data: 140 + "/" + 800, hightlight: false },
            { Title: "HR", Data: 120, hightlight: true },
            { Title: "RR", Data: 120, hightlight: false },
            { Title: "BT", Data: 340, hightlight: false },
            { Title: "尿", Data: 150, hightlight: false },
            { Title: "糖", Data: 450, hightlight: false },
            { Title: "SPO2", Data: 95, hightlight: false },
        ]

        let infolists = infodata.map((info, index) =>
            <div key={index} style={{ display: 'flex' }}>
                <div style={infotitlestyle}>{info.Title}</div>
                <div style={info.hightlight ? infodatahightlightstyle : infodatastyle}>{info.Data}</div>
            </div>
        )


        return (
            <div style={{ height: '170px', width: "99%", marginBottom: "10px", borderRadius: "4px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(215, 238, 255, 1)", position: 'relative' }} onMouseMove={() => this.hoverbackground()} onMouseLeave={() => this.hoverbackgroundhover()}>
                <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "rgba(215, 238, 255, 1)", padding: "10px" }}>
                    <span style={{ fontSize: '16px', color: "rgba(61, 119, 181, 1)", fontFamily: "PingFangSC-Regular" }}>
                        {this.switchbednumber(data.publishednumber)}
                    </span>
                    <span style={{ fontSize: '14px', fontFamily: "PingFangSC-Regular", color: "rgba(61, 119, 181, 1)" }}>
                        {data.Name}/{data.Channel}/{this.switchgender(data.Gender)}/{data.Week}週
                    </span>
                </div>
                <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "13px", borderBottomWidth: "0.5px", borderBottomColor: "rgba(215, 238, 255, 1)", borderBottomStyle: "solid" }}>
                    <span style={{ fontSize: '12px' }}>
                        病歷號:{data.id}
                    </span>
                    <span style={{ fontSize: '12px' }}>
                        {data.data.Weight}g (+{data.data.WeightDif}g)
                        </span>
                </div>
                <div style={{ borderBottomWidth: "0.5px", borderBottomColor: "rgba(215, 238, 255, 1)", borderBottomStyle: "solid" }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gridTemplateRows: "1fr 1fr", paddingTop: "3px", paddingLeft: "10px", paddingRight: "10px", paddingBottom: "3px" }}>
                        {infolists}
                    </div>
                </div>
                <div style={{ height: '30px', display: 'flex', width: "60%", justifyContent: "space-between", alignItems: 'center', paddingTop: "3px", paddingLeft: "10px", paddingRight: "10px", paddingBottom: "3px" }}>
                    {this.detaildatastylelist("rgba(61, 119, 181, 1)")}
                </div>
                <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "13px", borderBottomWidth: "0.5px", borderBottomColor: "rgba(215, 238, 255, 1)", borderBottomStyle: "solid", borderTopWidth: "0.5px", borderTopColor: "rgba(215, 238, 255, 1)", borderTopStyle: "solid" }}>
                    <span style={{ fontSize: '14px' }}>
                        {data.Note}
                    </span>
                </div>
                
                <div style={style}>
                    <Link to={{ pathname: '/Main/Bedview/Warduser', state: data}} params={{ testvalue: "hello" }} style={{ height: "40px", width: "40px", backgroundColor: "rgba(255,255,255, 1)", borderRadius: "99em", textAlign: "center", lineHeight: "40px", margin: "10px" }}>
                        <Icon type="file-search" />
                    </Link>
                    <Link to="/Main/Patientview" style={{ height: "40px", width: "40px", backgroundColor: "rgba(255,255,255, 1)", borderRadius: "99em", textAlign: "center", lineHeight: "40px", margin: "10px" }}>
                        <Icon type="database" />
                    </Link>
                </div>
            </div>
        );
    }
}

export default Wardcarddetail;