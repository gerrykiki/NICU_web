import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";
import Wardcardvalue from './Wardcardvalue'
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
        var selectstyle = null
        if (selectstate === data.id) {
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
        console.log(data)
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
                        <div style={{ fontSize: '14px', color: "black" }}>{data.data.Weight}g&rarr;{data.data.WeightDif}g</div>
                    </div>
                    <div style={{ borderBottomWidth: "0.5px", borderBottomColor: "rgba(215, 238, 255, 1)", borderBottomStyle: "solid" }}>
                        <Wardcardvalue source={data}></Wardcardvalue>
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