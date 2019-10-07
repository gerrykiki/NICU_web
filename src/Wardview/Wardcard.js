import React, { Component } from 'react';
import './Wardcard.css'
import { Link } from 'react-router-dom';
import patientviewlogo from '../Image/svg/Patientviewclick.svg'
import checklogo from '../Image/svg/Check.svg'


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
                <div style={{ height: '30px', display: 'flex', alignItems: 'center', padding: "10px" }}>
                    <span style={{ fontSize: '12px' }}>{data.Note}</span>
                </div>
                <div style={style}>
                    <Link to="/Main/Bedview/Warduser" style={{ height: "40px", width: "40px", backgroundColor: "rgba(255,255,255, 1)", borderRadius: "99em", textAlign: "center", lineHeight: "40px", margin: "10px" }}>
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

export default Wardcard;