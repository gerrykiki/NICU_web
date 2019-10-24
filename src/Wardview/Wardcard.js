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

    sendData = (idnumber) => {
        this.props.parentCallback(idnumber);
    }
    render() {
        // const style = {
        //     backgroundColor: "rgba(0, 0, 0, 0.3)",
        //     width: "100%",
        //     height: "100%",
        //     position: "absolute",
        //     top: "0px",
        //     borderRadius: "4px",
        //     display: this.state.hoverstate,
        //     justifyContent: "center",
        //     alignItems: "center"
        // }

        // const { data } = this.props
        // console.log(data);

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

        const hoverstyle = {
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

        return (
            <div style={selectstyle} onMouseMove={() => this.hoverbackground()} onMouseLeave={() => this.hoverbackgroundhover()}>
                <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "rgba(215, 238, 255, 1)", padding: "10px" }}>
                    <div style={{ fontSize: '18px', color: "rgba(61, 119, 181, 1)" }}>
                        {this.switchbednumber(data.publishednumber)}/{data.Name}
                    </div>
                    <div style={{ fontSize: '18px', color: "rgba(61, 119, 181, 1)" }}>
                        {this.switchgender(data.Gender)}/[20＋5]&rarr;[24+4]
                    </div>
                </div>
                <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "10px", borderBottomWidth: "0.5px", borderBottomColor: "rgba(215, 238, 255, 1)", borderBottomStyle: "solid" }}>
                    <div style={{ fontSize: '14px' }}>
                        病歷號:{data.id}
                    </div>
                    <div style={{ fontSize: '14px' }}>{data.data.Weight}g&rarr;{data.data.WeightDif}g</div>
                </div>
                <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "10px", borderBottomWidth: "0.5px", borderBottomColor: "rgba(215, 238, 255, 1)", borderBottomStyle: "solid", borderTopWidth: "0.5px", borderTopColor: "rgba(215, 238, 255, 1)", borderTopStyle: "solid" }}>
                    <div style={{ fontSize: '10px', color: "black" }}>{data.Note}</div>
                    <Link to={{ pathname: "/nicu/patient", state: data }} style={{ height: "20px", backgroundColor: "rgba(59, 151, 225, 1)", borderRadius: "4px", textAlign: "center", lineHeight: "20px", color: "white", paddingLeft: "3px", paddingRight: "3px" }}>進入病人資料頁面</Link>
                </div>
            </div>
        );
    }
}

export default Wardcard;