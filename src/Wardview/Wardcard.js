import React, { Component } from 'react';
import './Wardcard.css'
import { Link } from 'react-router-dom';
import { Icon } from 'antd';


class Wardcard extends Component {
    state = {
        hoverstate: "none",
        clickstate: false
    };

    hoverbackground() {
        //console.log("123")
        this.setState({
            hoverstate: "flex"
        });
    }

    hoverbackgroundhover() {
        this.setState({
            hoverstate: "none"
        });
    }
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
    render() {
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

        const { data } = this.props
        console.log(data);
        return (
            <div className="wardcardbuttonlayout" onMouseMove={() => this.hoverbackground()} onMouseLeave={() => this.hoverbackgroundhover()}>
                <div className="wardcardbuttonheader">
                    <div style={{ fontSize: '16px', color: "rgba(61, 119, 181, 1)", fontFamily: "PingFangSC-Regular" }}>{this.switchbednumber(data.publishednumber)}</div>
                    <div style={{ fontSize: '14px', fontFamily: "PingFangSC-Regular", color: "rgba(61, 119, 181, 1)" }}>{data.Name}/{data.Channel}/{this.switchgender(data.Gender)}/{data.Week}週</div>
                </div>
                <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "10px", borderBottomWidth: "0.5px", borderBottomColor: "rgba(160, 213, 255, 1)", borderBottomStyle: "solid" }}>
                    <div style={{ fontSize: '12px' }}>病歷號:{data.id}</div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ fontSize: '12px' }}>{data.data.Weight}g (+{data.data.WeightDif}g)/</div>
                        <div style={{ fontSize: '12px'}}>E4V5M6</div>
                    </div>
                </div>
                <div style={{ height: '30px', display: 'flex', alignItems: 'center', padding: "10px" }}>
                    <span style={{ fontSize: '12px' }}>{data.Note}</span>
                </div>
                <div style={style}>
                    <Link to="/Main/Bedview/Warduser" style={{ height: "40px", width: "40px", backgroundColor: "rgba(255,255,255, 1)", borderRadius: "99em", textAlign: "center", lineHeight: "40px", margin: "10px" }}>
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

export default Wardcard;